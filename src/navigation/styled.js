import styled from "styled-components";
import { Navbar } from "react-bootstrap";
import { ReactComponent as BarnSvg } from "../images/barn.svg"
import { NavLink } from "react-router-dom";

export const StyledNavBar = styled(Navbar).attrs({
    expand: "lg",
    fixed: "top",
})`
    min-height: 170px;
    position: fixed;
    background: #9c9c9cd6;
`;

export const Img = styled.img`
    border-radius: 50%;
    max-height: 150px;
`;

export const NavBarIcon = styled(Navbar)`
    transition: 0.3s; 

    &:hover {
        scale: 1.05;
        filter: brightness(150%);
    };
`;

export const StyledNavToggle = styled(Navbar)`
    transition: 0.3s;
    height: 100px;
    border: none;

    &:hover {
        border: none;
    };
`;

export const StyledNavLink = styled(NavLink)`
    font-size: 30px;
    margin-right: 15px;
    color: white;

`;

export const Barn = styled(BarnSvg)`
    height: 80px;
`;