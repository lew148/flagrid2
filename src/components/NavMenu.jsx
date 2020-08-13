import React from 'react';
import { Container, Navbar } from 'reactstrap';
import DarkModeToggle from 'components/DarkModeToggle';

const NavMenu = () => (
    <header>
        <Navbar className="border-bottom box-shadow mb-3">
            <Container>
                <h1>Flagrid</h1>
                <DarkModeToggle />
            </Container>
        </Navbar>
    </header>
);

export default NavMenu;