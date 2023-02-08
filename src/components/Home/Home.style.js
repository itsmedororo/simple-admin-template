import styled from "styled-components";
import {
    Layout,
    Modal as AntModal,
} from "antd";

const {
    Content: AntContent,
    Footer: AntFooter,
} = Layout;

export const RootLayout = styled(Layout)`
min-height: 100vh;
background: ${props => props.theme.backgroundColor};
`;

export const Content = styled(AntContent)`
padding: 16px 24px;
background: ${props => props.theme.backgroundColor} !important;
overflow: auto;

@media screen and (max-width: 480px) {
    padding: 10px !important;
}

@media screen and (max-width: 320px) {
    padding: 5px !important;
}
`;

export const Footer = styled(AntFooter)`
text-align: center;
background: ${props => props.theme.backgroundColor} !important;
`;

export const Modal = styled(AntModal)`
width: 300px !important;

    .ant-modal-body {
        text-align: center;
        padding: 20px;
    }

    .ant-modal-footer {
        text-align: center;

        button {
            width: 73px;
        }
    }
`;