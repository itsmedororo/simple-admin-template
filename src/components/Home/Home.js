import React, { useState } from 'react';
import {
    Content,
    Footer,
    Modal,
    RootLayout,
} from './Home.style';
import { Layout, message } from 'antd';
import {
    Breadcrumb,
    Sidebar,
    Topbar,
    SessionExpiredDialog,
} from '@components';
import { useDispatch } from 'react-redux';
import { api, Status } from '@api';
import { localStorage } from '@utils';
import { clearToken } from '@store/auth/authSlice';
import HomeRoutes from './HomeRoutes';

const Home = () => {
    const dispatch = useDispatch();
    const [logoutStatus, setLogoutStatus] = useState(Status.DEFAULT);
    const [open, setOpen] = useState(false);

    const logout = () => {
        if (logoutStatus !== Status.LOADING) {
            setLogoutStatus(Status.SUCCESS);
            message.success('Logout Success!');
            resetSessionState();
        }
    }

    const resetSessionState = () => {
        // clear token in redux
        dispatch(clearToken());
        // remove token from localstorage
        localStorage.clearToken();
        // update token in request obj
        api.setSessionToken('');
    }

    const renderHeader = () => {
        return (
            <>
                <Topbar openModal={() => setOpen(true)} />
                <Modal
                    centered
                    closable={false}
                    open={open}
                    confirmLoading={logoutStatus === Status.LOADING}
                    onCancel={() => logoutStatus !== Status.LOADING && setOpen(false)}
                    onOk={logout}
                >
                    Are you sure to logout?
                </Modal>
            </>
        );
    }

    const renderFooter = () => {
        return (
            <Footer>
                © 2023 Simple Admin. All Rights Reserved.
            </Footer>
        );
    }

    return (
        <>
            <RootLayout>
                {renderHeader()}
                <Layout>
                    <Sidebar />
                    <Layout>
                        <Breadcrumb />
                        <Content>
                            <HomeRoutes />
                        </Content>
                    </Layout>
                </Layout>
                {renderFooter()}
            </RootLayout>

            <SessionExpiredDialog
                handleClick={resetSessionState}
            />
        </>
    );
}

export default Home;