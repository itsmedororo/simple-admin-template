import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useOptions from './options';
import {
    Menu,
    Sider,
    MenuWrapper,
    MobileMenuIcon,
} from './Sidebar.style';

const Sidebar = () => {
    const navigate = useNavigate();
    const {
        options,
        defaultSelectedKeys,
    } = useOptions();
    const [collapsed, setCollapsed] = useState(false);
    const [forcedcollapsed, setForcedCollapsed] = useState(true);

    const handleClicked = (item) => {
        navigate(item.key);
        setForcedCollapsed(true);
    }

    return (
        <Sider
            collapsible
            collapsed={collapsed}
            forcedcollapsed={forcedcollapsed}
            onCollapse={collapsed => {
                setCollapsed(collapsed);
                setForcedCollapsed(false);
            }}
        >
            <MenuWrapper>
                <Menu
                    mode="inline"
                    items={options}
                    defaultSelectedKeys={defaultSelectedKeys}
                    onClick={handleClicked}
                />
            </MenuWrapper>
            <MobileMenuIcon onClick={() => {
                setCollapsed(false);
                setForcedCollapsed(false);
            }} />
        </Sider>
    );
}

export default Sidebar;