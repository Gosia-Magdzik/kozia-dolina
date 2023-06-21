import styled from "styled-components";
import { NavLink, Navbar } from "react-bootstrap";


export const StyledNavBar = styled(Navbar).attrs({
    expand: "lg",
    fixed: "top",
})`
    padding: 15px;
    min-width: 80px;
    min-height: 80px;
    position: fixed;
`;

export const Img = styled.img`
    border-radius: 50%;
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
`;

export const StyledNavLink = styled(NavLink)`
`;