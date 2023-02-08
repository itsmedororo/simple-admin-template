import React from 'react';
import {
    StyledBreadcrumb,
} from './Breadcrumb.style';
import { Space } from 'antd';
import useOptions from '../Sidebar/options';

const Breadcrumb = () => {
    const { icon, path, subpath, } = useOptions();

    return (
        <StyledBreadcrumb subpath={subpath}>
            <StyledBreadcrumb.Item>
                <Space>
                    {icon}
                    {path}
                </Space>
            </StyledBreadcrumb.Item>
            <StyledBreadcrumb.Item>
                {subpath}
            </StyledBreadcrumb.Item>
        </StyledBreadcrumb>
    );
}

export default Breadcrumb;