import { FC, useContext } from 'react'
import { Layout, Menu } from 'antd';
import {
    InfoCircleOutlined,
    CarOutlined,
    HomeOutlined,
    LaptopOutlined,
    UserOutlined,
    FundProjectionScreenOutlined,
    BarChartOutlined,
    UserAddOutlined,
    SketchOutlined
} from '@ant-design/icons';

import logo from '../../images/logo.png';
import { ISidebar } from '../../types/dashboard';
import { DashboardContext } from '../../contexts';

const { Sider } = Layout;
const { SubMenu } = Menu;

export const Sidebar: FC<ISidebar> = ({ userRole }) => {
    const { setActiveMenuItem } = useContext(DashboardContext);
    return (
        <Sider collapsible > {/* collapsed={collapsed} onCollapse={this.onCollapse} */}
            <div className="logo" ><img src={logo} style={{ width: "100%" }} alt="Portalo"></img></div>
            <Menu theme="dark" defaultSelectedKeys={[ 'sub1' ]} mode="inline" onClick={e => setActiveMenuItem(e.key)}>
                <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                    {userRole === 'admin' ? <Menu.Item key="1" icon={<UserAddOutlined />}>New User</Menu.Item> : ''}
                    <Menu.Item key="2" icon={<InfoCircleOutlined />}>Info</Menu.Item>
                    <Menu.Item key="3" icon={<CarOutlined />}>Vacation</Menu.Item>
                    <Menu.Item key="4" icon={<BarChartOutlined />}>Finances</Menu.Item>
                    <Menu.Item key="5" icon={<LaptopOutlined />}>Devices</Menu.Item>
                </SubMenu>
                <Menu.Item key="6" icon={<HomeOutlined />}>Rooms</Menu.Item>
                <Menu.Item key="7" icon={<FundProjectionScreenOutlined />}>Projects</Menu.Item>
                <Menu.Item key="8" icon={<SketchOutlined />}>Benefits</Menu.Item>
            </Menu>
        </Sider>
    )
}