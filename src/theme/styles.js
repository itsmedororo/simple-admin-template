import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  font-family: 'Outfit';
}

body {
  background-color: ${props => props.theme.backgroundColor};   
}

.ant-layout {
  background-color: ${props => props.theme.backgroundColor};
}

.ant-input:not(.ant-input-status-error) {
  border: 1px solid ${props => props.theme.primaryColor};

  :focus {
    box-shadow: none !important;
  }
}

.ant-input-affix-wrapper:not(.ant-input-affix-wrapper-status-error) {
  border: 1px solid ${props => props.theme.primaryColor};

  :hover {
    border: 1px solid ${props => props.theme.primaryColor};
  }

  :focus {
    box-shadow: none !important;
  }
}

.ant-menu-item-selected {
  background: ${props => props.theme.primaryRgb('30%')} !important;
  color: ${props => props.theme.primaryColor} !important;

  :hover {
    background: ${props => props.theme.primaryRgb('30%')} !important;
  }
}

.ant-menu-sub {
  background: ${props => props.theme.backgroundColor} !important;
}

.ant-menu-submenu-selected >.ant-menu-submenu-title {
  color: ${props => props.theme.primaryColor} !important;
}

.ant-menu-item:not(.ant-menu-item-selected):hover,.ant-menu-submenu-title:hover {
  background: ${props => props.theme.primaryRgb('8%')} !important;
}

.ant-spin-dot i {
  background-color: ${props => props.theme.primaryColor} !important;
}

.ant-btn-primary {
background-color: ${props => props.theme.primaryColor};
box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;

  :hover {
      background-color: ${props => props.theme.primaryRgb('86%')} !important;
  }
}

.ant-btn-default {
border-color: ${props => props.theme.primaryColor} !important;
color: ${props => props.theme.primaryColor} !important;

  :hover {
    border-color: ${props => props.theme.primaryColor} !important;
    color: ${props => props.theme.primaryColor} !important;
  }
}
`;

export default GlobalStyles;