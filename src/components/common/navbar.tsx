import React from 'react';
import styled from 'styled-components';

const LogoImage = styled.img`
    margin-left: 50px;
    height: 80%;
`
const NavWrapper = styled.nav`
    top: 0;
    display: flex;
    height: 20px;
    width: 100vw;
    margin: 15px auto 15px;
    justify-content: space-between;
    position: fixed;
`

const Navbar = () => (
    <NavWrapper>
        <LogoImage src="/logo.png" alt="logo"/>
    </NavWrapper>
)

export default Navbar;