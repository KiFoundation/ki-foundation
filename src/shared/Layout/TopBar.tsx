import React from 'react'
import { Image } from 'rebass'
import { Navbar, Nav } from 'react-bootstrap'
import { Text } from 'theme-ui'
import logo from '@assets/logos/kifoundation.svg'
import burgerIcon from '@assets/icons/burger.svg'
import { Link } from 'react-router-dom'

interface TopBarProps {}

const TopBar: React.FC<TopBarProps> = ({}) => {
    return (
        <Navbar collapseOnSelect expand="sm">
            <Navbar.Brand href="#home">
                <Link to="/">
                    <Image src={logo} />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav">
                <span>
                    <Image src={burgerIcon} />
                </span>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link>
                        <Link to="/">
                            <Text variant="menuLink">Home</Text>
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/ecosystem">
                            <Text variant="menuLink">Ecosystem</Text>
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/team">
                            <Text variant="menuLink">Team</Text>
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/media">
                            <Text variant="menuLink">Media</Text>
                        </Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default TopBar
