import styled from "styled-components";
import {
    Layout,
    Space,
} from "antd";
import { logo } from '@assets';

const {
    Header: AntHeader,
} = Layout;

export const Header = styled(AntHeader)`
position: sticky;
top: 0;
padding: 0 24px !important;
background: ${props => props.theme.primaryColor} !important;
box-shadow: 0px 3px 6px #00000029;
display: flex;
align-items: center;
z-index: 2;
`;

export const TitleWrapper = styled(Space).attrs({
    size: 'middle'
})`
flex: 1;
align-items: center;
text-align: left;

.ant-space-item:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
}
`;

export const Title = styled.div`
font-size: 20px;
font-weight: 500;
color: #fff;
text-transform: capitalize;
`;

export const Logo = styled.img.attrs({
    alt: 'logo',
    src: logo,
})`
width: 50px;
`;
