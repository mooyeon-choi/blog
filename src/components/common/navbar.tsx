import React from 'react';
import styled from 'styled-components';

const LogoImage = styled.div`
    width: 100px;
    height: 100px;
    margin-left: 30px;
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
        <LogoImage className="sticker"/>
    </NavWrapper>
)

export default Navbar;