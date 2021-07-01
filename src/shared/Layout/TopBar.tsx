import React, { useState } from 'react'
import { Box, Image } from 'rebass'
import { Navbar, Nav } from 'react-bootstrap'
import { Text } from 'theme-ui'
import logo from '@assets/logos/kifoundation.svg'
import { Link } from 'react-router-dom'

interface TopBarProps {}

const TopBar: React.FC<TopBarProps> = ({}) => {
    const [expanded, setExpanded] = useState(false)

    const toggleMenu = () => {
        setExpanded((prev) => !prev)
    }

    const closeMenu = () => {
        setExpanded(false)
    }

    return (
        <Navbar expand="sm" expanded={expanded} id="navbar">
            <Navbar.Brand>
                <Link to="/">
                    <Image src={logo} />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                id="hamburger-icon"
                className={expanded ? ' active' : ''}
                onClick={toggleMenu}
            >
                <span className="line line-1"></span>
                <span className="line line-2"></span>
                <span className="line line-3"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Box className="background-blur" />
                <Nav>
                    <Nav.Link>
                        <Link to="/" onClick={closeMenu}>
                            <Text variant="menuLink" sx={{ fontSize: [2, 1] }}>
                                Home
                            </Text>
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/ecosystem" onClick={closeMenu}>
                            <Text variant="menuLink" sx={{ fontSize: [2, 1] }}>
                                Ecosystem
                            </Text>
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/team" onClick={closeMenu}>
                            <Text variant="menuLink" sx={{ fontSize: [2, 1] }}>
                                Team
                            </Text>
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/media" onClick={closeMenu}>
                            <Text variant="menuLink" sx={{ fontSize: [2, 1] }}>
                                Media
                            </Text>
                        </Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default TopBar
