import React from 'react';
import { Layout, Avatar, Menu, SubMenu } from 'antd';
import "./Profile.css"
import { Button } from '@material-ui/core';
import Authenticate from './Authenticate';

const { Header } = Layout;

const handleClick = (e) => {
    console.log('click ', e);
};

function Profile(props) {
    return (
        <div className="container">
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

                </Header>
            </Layout>
            <Button onClick={() => {
                Authenticate.logout(() => {
                    props.history.push('/');
                })
            }}>Logout</Button>
        </div>
    )
}

export default Profile;