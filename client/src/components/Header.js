import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, NavbarText} from 'reactstrap'
import './Header';

function Header() {
    return (
        <div>
        <Navbar className='nav'
            color="light"
            expand="md"
            light
        >
            <NavbarBrand href="/">
            IntlHub
            </NavbarBrand>
            <NavbarToggler onClick={function noRefCheck(){}} />
            <Collapse navbar>
            <Nav
                className="me-auto"
                navbar
            >
            <NavItem>
            <NavLink href="/components/">
                    Components
            </NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
            </NavLink>
            </NavItem>
            </Nav>
            <NavbarText>
                Simple Text
            </NavbarText>
            </Collapse>
        </Navbar>
        </div>
    );
}

export default Header;