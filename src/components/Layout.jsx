import React from 'react';
import { Container } from 'reactstrap';
import NavMenu from 'components/NavMenu';
import Footer from 'components/Footer';

const Layout = ({ children }) => (
    <div>
        <NavMenu />
        <Container>
            {children}
        </Container>
        <Footer />
    </div>
);

export default Layout;