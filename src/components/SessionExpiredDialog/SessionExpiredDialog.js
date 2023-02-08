import React from 'react';
import {
    Modal,
    Text,
} from './SessionExpiredDialog.style';
import { useSelector } from 'react-redux';
import { Status, } from '@api';
import { Button } from 'antd';

const SessionExpiredDialog = ({
    handleClick,
}) => {
    const sessionStatus = useSelector(state => state.auth.sessionStatus);

    return (
        <Modal
            title='Session Expired!'
            open={sessionStatus === Status.ERROR}
            closable={false}
            footer={false}
            width={400}
            centered
        >
            <Text>
                Your session has been expired.
                Please login again.
            </Text>
            <Button
                type='primary'
                onClick={handleClick}
            >
                OK
            </Button>
        </Modal>
    );
}

export default SessionExpiredDialog;