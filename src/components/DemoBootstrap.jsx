import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Carousel from "react-bootstrap/Carousel";

export function DemoBootstrap() {
    return (
        <div>
            {/* Navbar */}
            <Navbar expand='lg' className='bg-body-tertiary'>
                <Container>
                    <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link href='#home'>Home</Nav.Link>
                            <Nav.Link href='#link'>Link</Nav.Link>
                            <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                                <NavDropdown.Item href='#action/3.2'>
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href='#action/3.3'>
                                    Something
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href='#action/3.4'>
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Carousel */}
            <Carousel>
        
                <Carousel.Item>
                    <img
                        src='https://th.bing.com/th/id/OIP.vBomJpcxD_KsRuQj4LG6nwHaEK?w=323&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7'
                        alt='' />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src='https://th.bing.com/th/id/OIP.vBomJpcxD_KsRuQj4LG6nwHaEK?w=323&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7'
                        alt='' />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src='https://th.bing.com/th/id/OIP.vBomJpcxD_KsRuQj4LG6nwHaEK?w=323&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7'
                        alt='' />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Accordion */}
            <Accordion>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}
