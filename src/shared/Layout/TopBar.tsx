import React, { useState } from 'react'
import { Box, Flex, Image } from 'rebass'
import { Navbar, Nav, Row, Col } from 'react-bootstrap'
import { Text } from 'theme-ui'
import logo from '@assets/logos/kifoundation.svg'
import { Link, useLocation } from 'react-router-dom'

import twitterBlue from '@assets/logos/twitter-blue.svg'
import telegramBlue from '@assets/logos/telegram-blue.svg'
import githubBlue from '@assets/logos/github-blue.svg'
import mediumBlue from '@assets/logos/medium-blue.svg'
import linkedinBlue from '@assets/logos/linkedin-blue.svg'

interface TopBarProps {}

const TopBar: React.FC<TopBarProps> = ({}) => {
    const location = useLocation()
    console.log(location)
    const [expanded, setExpanded] = useState(false)

    const toggleMenu = () => {
        setExpanded((prev) => !prev)
    }

    const closeMenu = () => {
        setExpanded(false)
    }

    return (
        <Navbar expand="md" expanded={expanded} id={`navbar ${expanded ? 'navbar-expanded' : ''}`}>
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
                <Nav className="d-flex flex-column flex-md-row justify-content-between justify-content-md-end">
                    <Flex className="flex-column flex-md-row justify-content-md-end align-items-md-center">
                        <Nav.Link href="/" onClick={closeMenu} active={location.pathname === '/'}>
                            <Text as="span" variant="body" className="d-inline-block d-md-none mr-2">
                                01
                            </Text>
                            <Text variant="menuLink" sx={{ fontSize: [2, 1] }}>
                                Home
                            </Text>
                        </Nav.Link>
                        <Nav.Link
                            href="/ecosystem"
                            onClick={closeMenu}
                            active={new RegExp('/ecosystem').test(location.pathname)}
                        >
                            <Text as="span" variant="body" className="d-inline-block d-md-none mr-2">
                                02
                            </Text>
                            <Text variant="menuLink" sx={{ fontSize: [2, 1] }}>
                                Ecosystem
                            </Text>
                        </Nav.Link>
                        <Nav.Link
                            href="/team"
                            onClick={closeMenu}
                            active={new RegExp('/team').test(location.pathname)}
                        >
                            <Text as="span" variant="body" className="d-inline-block d-md-none mr-2">
                                03
                            </Text>
                            <Text variant="menuLink" sx={{ fontSize: [2, 1] }}>
                                Team
                            </Text>
                        </Nav.Link>
                        <Nav.Link
                            href="/media"
                            onClick={closeMenu}
                            active={new RegExp('/media').test(location.pathname)}
                        >
                            <Text as="span" variant="body" className="d-inline-block d-md-none mr-2">
                                04
                            </Text>
                            <Text variant="menuLink" sx={{ fontSize: [2, 1] }}>
                                Media
                            </Text>
                        </Nav.Link>
                    </Flex>
                    <Box className="d-flex d-md-none flex-column">
                        <Row>
                            <Col>
                                <Flex flexDirection="column">
                                    <Text variant="subhead">Follow us</Text>
                                    <Flex marginTop={10} flexDirection="row">
                                        <Image src={twitterBlue} marginRight={20} />
                                        <Image src={telegramBlue} marginRight={20} />
                                        <Image src={githubBlue} marginRight={20} />
                                        <Image src={mediumBlue} marginRight={20} />
                                        <Image src={linkedinBlue} marginRight={20} />
                                    </Flex>
                                </Flex>
                            </Col>
                        </Row>
                        <Row className="d-block d-md-none mt-5">
                            <Col>
                                <Flex flexDirection="column">
                                    <Text variant="body">
                                        © Copyright 2021 Ki Foundation
                                        <br />
                                        All rights reserved.
                                    </Text>
                                </Flex>
                            </Col>
                        </Row>
                    </Box>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default TopBar
