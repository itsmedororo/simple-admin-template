import React from 'react';
import {
    Button,
    Result as AntResult
} from 'antd';
import { no_internet_img } from '@assets';
import styled from 'styled-components';

const Image = styled.img.attrs({
    alt: 'img',
    src: no_internet_img,
})`
width: 252px;
aspect-ratio: 252 / 311;
`;

const Result = styled(AntResult)`

.ant-result-title {
    margin-top: -60px;
}
`;

const NoInternet = () => {
    return (
        <Result
            icon={<Image />}
            title="Connect to the Internet"
            subTitle="You're offline. Check your connection."
            extra={
                <Button
                    type="primary"
                    onClick={() => window.location.reload()}
                >
                    Retry
                </Button>
            }
        />
    );
}

export default NoInternet;