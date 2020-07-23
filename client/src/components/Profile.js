import React from 'react';
import { Layout, Avatar, Menu, SubMenu } from 'antd';
import "./Profile.css"

const { Header } = Layout;

const handleClick = (e) => {
    console.log('click ', e);
  };

function Profile() {
    return (
        <div>
            <Layout>
                <Header style={{ padding: "10px", height: "auto" }}>
                    <Avatar src="https://i.pinimg.com/736x/b7/9d/ef/b79defbf3ffcbb6e7bb1cfb2042122fb.jpg"

                        style={{ float: 'right' }}
                    />
                    <Menu onClick={handleClick}>
                        <Menu.Item key="Profile"> 
                            Profile
                        </Menu.Item>
                        <Menu.ItemGroup title="About us">
                            <Menu.Item key="CapeTown">Capetown</Menu.Item>
                            <Menu.Item key="Johannesburg">Johannesburg</Menu.Item>
                            <Menu.Item key="Durban">Durban</Menu.Item>
                        </Menu.ItemGroup>
                    </Menu>
                    {/* <SubMenu>
                    </SubMenu> */}
                </Header>
                {/* <Layout>
                    <Sider style={{ background: 'black' }}>Sider</Sider>
                    <Layout>
                        <Content>Content</Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout> */}
            </Layout>
        </div>
    )
}

export default Profile;