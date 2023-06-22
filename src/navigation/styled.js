import styled from "styled-components";
import { NavLink, Navbar } from "react-bootstrap";
import { ReactComponent as BarnSvg } from "../images/barn.svg"


export const StyledNavBar = styled(Navbar).attrs({
    expand: "lg",
    fixed: "top",
})`
    min-height: 170px;
    position: fixed;
    background: #22221a21;
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
    height: 150px;
    border: none;
`;

export const StyledNavLink = styled(NavLink)`
    font-size: 40px;
    margin-right: 15px;
    color: white;
`;

export const Barn = styled(BarnSvg)`
    height: 60px;
`;