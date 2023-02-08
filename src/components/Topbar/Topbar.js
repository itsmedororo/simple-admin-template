import React from 'react';
import {
    LogoutOutlined,
} from '@ant-design/icons';
import {
    Space,
    Button,
} from 'antd';
import {
    Header,
    TitleWrapper,
    Logo,
    Title,
} from './Topbar.style';
import { useNavigate } from 'react-router-dom';
import { PRIVATE_ROUTE } from '../../route.constants';

const {
    HOME,
    DASHBOARD,
} = PRIVATE_ROUTE;

const Topbar = ({
    openModal,
}) => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate(`/${HOME}/${DASHBOARD}`);
    }

    const MainLogo = () => (
        <TitleWrapper>
            <Logo onClick={goToHome} />
            <Title onClick={goToHome}>
                Simple
            </Title>
        </TitleWrapper>
    );

    const Profile = () => (
        <Button
            type='default'
            shape='circle'
            icon={<LogoutOutlined />}
            onClick={openModal}
        />
    );

    return (
        <Header>
            <MainLogo />
            <Space size='middle'>
                <Profile />
            </Space>
        </Header>
    )
};

export default Topbar;