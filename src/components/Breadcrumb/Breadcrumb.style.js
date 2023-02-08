import styled from "styled-components";
import { Breadcrumb } from "antd";

export const StyledBreadcrumb = styled(Breadcrumb)`
padding: 20px 20px 0 20px;
background: ${props => props.theme.backgroundColor};
color: ${props => props.subpath ? 'grey' : props.theme.primaryColor};
font-weight: 500;

    ol>li:nth-child(2) {
        display: ${props => props.subpath ? 'block' : 'none'};
        color: ${props => props.theme.primaryColor};
    }

    ol>li>.ant-breadcrumb-separator {
        display: ${props => props.subpath ? 'inline' : 'none'};
    }
`;