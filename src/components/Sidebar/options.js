import { useLocation } from "react-router-dom";
import {
    HomeOutlined,
    BlockOutlined,
} from '@ant-design/icons';
import { PRIVATE_ROUTE } from '../../route.constants';

const {
    DASHBOARD,
    USERS,
} = PRIVATE_ROUTE;

const options = [
    {
        key: DASHBOARD,
        icon: <HomeOutlined />,
        label: "Dashboard",
    },
    {
        key: USERS,
        icon: <BlockOutlined />,
        label: "Users",
        children: [
            {
                key: `${USERS}/special`,
                label: 'Special Users',
            },
            {
                key: `${USERS}/normal`,
                label: 'Normal Users',
            },
        ],
    },
];

const useOptions = () => {
    const { pathname } = useLocation();
    const [, , path1, path2] = pathname.split('/');

    const getOption = (items, path) => {
        return items.filter(opt => opt.key.includes(path));
    }

    const getPath = () => {
        return getOption(options, path1).map(opt => opt.label);
    }

    const getSubpath = () => {
        const children = options
            .filter(opt => opt.key === path1 && opt.children)
            .map(opt => opt.children)[0];
        if (children) {
            return getOption(children, path2).map(subOpt => subOpt.label);
        }
        return '';
    }

    const getIcon = () => {
        return getOption(options, path1).map(opt => opt.icon)[0];
    }

    const defaultOpenKeys = () => {
        return options
            .filter(option => option.children && option.key === path1)
            .map(opt => opt.key);
    }

    const defaultSelectedKeys = () => {
        let openKey = defaultOpenKeys()[0];
        if (openKey) {
            let subOptions = options.filter(opt => opt.key === openKey).map(opt => opt.children)[0];
            return subOptions.filter(opt => opt.key.includes(path2)).map(opt => opt.key);
        }
        else {
            return options.filter(opt => opt.key === path1).map(opt => opt.key);
        }
    }

    return {
        options,
        path: getPath(),
        subpath: getSubpath(),
        icon: getIcon(),
        defaultOpenKeys: defaultOpenKeys(),
        defaultSelectedKeys: defaultSelectedKeys(),
    };
};

export default useOptions;