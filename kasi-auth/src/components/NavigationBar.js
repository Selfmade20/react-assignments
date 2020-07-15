import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar{
    background-color: black;
}
.navbar-brand, .navbar-nav .nav-link {
    color: white;
    font-size: 22px;
    font-family: Georgia;
    &:hover {
        color: white;
    }   
}
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">
                <img style={{ width:"50px"}} src="//cdn.shopify.com/s/files/1/1958/2177/files/revols_logo_white_90x.png?v=1517017786" alt="Revols" itemprop="logo"></img>
            🏡Kasi Auth🏡
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/signUp">Sign Up</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)