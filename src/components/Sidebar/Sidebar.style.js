import styled from "styled-components";
import {
    FloatButton,
    Layout,
    Menu as AntMenu,
} from 'antd';
import {
    MenuOutlined,
} from '@ant-design/icons';

const { Sider: AntSider } = Layout;

export const MobileMenuIcon = styled(FloatButton).attrs({
    icon: <MenuOutlined />,
    shape: 'square',
})`
display: none;
left: 0;
bottom: 0;

    .ant-float-btn-body {
        background: ${props => props.theme.primaryColor};
    }

    svg {
        color: #fff;
    }
`;

export const Sider = styled(AntSider)`
background: ${props => props.theme.backgroundColor} !important;
padding-bottom: 0 !important;
margin-bottom: -18px;

    :not(.ant-layout-sider-collapsed){
        width: 230px !important;
        min-width: 230px !important;
        max-width: 230px !important;
        margin-bottom: -18px !important;
        padding-bottom: 0 !important;
        position: relative;

        .ant-layout-sider-trigger {
            width: 230px !important;

            @media screen and (max-width: 575px) {
                width: 100% !important;
                border-radius: 0;
            }
        }

        @media screen and (max-width: 1024px) {
            position: fixed;
            z-index: 10;
        }

        @media screen and (max-width: 575px) {
            width: ${props => props.forcedcollapsed ? '0 !important' : '100% !important;'};
            min-width: ${props => props.forcedcollapsed ? '0 !important' : '100% !important;'};
            max-width: ${props => props.forcedcollapsed ? '0 !important' : '100% !important;'};
            position: fixed;
            z-index: 10;
            height: 100%;

            .ant-menu-item, .ant-menu-submenu-title {
                display: ${props => props.forcedcollapsed ? 'none' : 'block'};
            }

            ${MobileMenuIcon} {
                display: ${props => props.forcedcollapsed ? 'block !important' : 'none !important'};
            }
        }
    }

    .ant-layout-sider-trigger {
        background: ${props => props.theme.primaryColor};

        @media screen and (max-width: 575px) {
           display: ${props => props.collapsed || props.forcedcollapsed ? 'none !important' : 'block !important'};
        }
    }

@media screen and (max-width: 575px) {
    max-width: 0 !important;
    min-width: 0 !important;
    width: 0 !important;

    ${MobileMenuIcon} {
        display: block !important;
    }
}
`;

export const Menu = styled(AntMenu)`
background: ${props => props.theme.backgroundColor} !important;
height: 100%;
border-right: 0 !important;
color: #000;
font-weight: 500;

    svg {
        font-size: 18px;
    }
`;

export const MenuWrapper = styled.div.attrs({
    className: 'custom-scroll'
})`
position: sticky;
top: 64px;
bottom: 0;
padding-top: 8px;
height: calc(100vh - 112px);
overflow: hidden;
border-right: 1px solid rgba(5,5,5,.06);

    :hover {
        overflow-y: auto;
    }
`;
