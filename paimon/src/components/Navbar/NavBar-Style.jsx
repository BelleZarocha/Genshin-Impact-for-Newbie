import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

// Component NavBar
export const NavBar = styled.nav `
    background: #000;
    // height: 85px;
    height: ${props => props.showToggle ? 'auto' : '85px'}
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    @media screen and (max-width: 768px) {
        width: auto;
        // height: 85px;
    }    
`

export const NavLogo = styled(Link) `
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    @media screen and (max-width: 768px) {
        padding-left: 20px;
        // position: absolute;
     }
`

export const NavMenu = styled.ul `
     display: flex;
     align-items: center;
     list-style-type: none;
     height: auto;
     @media screen and (max-width: 768px) {
        display: ${props => props.showToggle ? 'block' : 'none'};
        padding-top: 50px;
        // width: 100%;
     }    
`

export const NavList = styled.li `
@media screen and (max-width: 768px) {
    padding: 2rem 0;
`
export const NavLink = styled(Link) `
    color: grey;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;
    &.active {
        color: #fff;
    }
`

export const Bars = styled(FaBars) `
    color: #fff;
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 100%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`