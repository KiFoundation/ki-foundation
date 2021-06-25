import React from 'react'
import { Box, Flex, Image, BoxProps } from 'rebass'
import { Container, Row, Col } from 'react-bootstrap'
import { Text } from 'theme-ui'
import checkerboardPink from '@assets/ui/checkerboard-sm-pink.svg'
import logo from '@assets/logos/kifoundation.svg'

import twitterBlue from '@assets/logos/twitter-blue.svg'
import telegramBlue from '@assets/logos/telegram-blue.svg'
import githubBlue from '@assets/logos/github-blue.svg'
import mediumBlue from '@assets/logos/medium-blue.svg'
import linkedinBlue from '@assets/logos/linkedin-blue.svg'

import twitterPink from '@assets/logos/twitter-pink.svg'
import telegramPink from '@assets/logos/telegram-pink.svg'
import githubPink from '@assets/logos/github-pink.svg'
import mediumPink from '@assets/logos/medium-pink.svg'
import linkedinPink from '@assets/logos/linkedin-pink.svg'

interface FooterProps extends BoxProps {
    variant: 'blue' | 'pink'
}

const Footer: React.FC<FooterProps> = ({ variant, style, ...boxProps }) => {
    const logos = {
        blue: {
            twitter: twitterBlue,
            telegram: telegramBlue,
            github: githubBlue,
            medium: mediumBlue,
            linkedin: linkedinBlue,
        },
        pink: {
            twitter: twitterPink,
            telegram: telegramPink,
            github: githubPink,
            medium: mediumPink,
            linkedin: linkedinPink,
        },
    }
    return (
        <Box
            className=""
            style={{
                position: 'relative',
                width: '100%',
                borderTop: variant === 'blue' ? '1px solid #0CF6FC' : 0,
                ...style,
            }}
            {...boxProps}
        >
            {variant === 'pink' ? <Image src={checkerboardPink} /> : null}
            <Container className="footer">
                <Row>
                    <Col md={3} className="d-none d-md-block">
                        <Flex flexDirection="column">
                            <Image src={logo} width={210} paddingTop={'7px'} />
                            <Text variant="body" marginTop={15}>
                                © Copyright 2021 Ki Foundation
                                <br />
                                All rights reserved.
                            </Text>
                        </Flex>
                    </Col>
                    <Col xs={6} md={3}>
                        <Flex flexDirection="column">
                            <Text variant="subhead">Legal</Text>
                            <Text variant="body" marginTop={10}>
                                Cookie policy
                            </Text>
                            <Text variant="body" marginTop={'5px'}>
                                Terms and conditions
                            </Text>
                            <Text variant="body" marginTop={'5px'}>
                                Privacy policy
                            </Text>
                        </Flex>
                    </Col>
                    <Col xs={6} md={3}>
                        <Flex flexDirection="column">
                            <Text variant="subhead">Company</Text>
                            <Text variant="body" marginTop={10}>
                                White paper
                            </Text>
                            <Text variant="body" marginTop={'5px'}>
                                Team
                            </Text>
                            <Text variant="body" marginTop={'5px'}>
                                Ecosystem
                            </Text>
                            <Text variant="body" marginTop={'5px'}>
                                Media
                            </Text>
                        </Flex>
                    </Col>
                    <Col md={3} className="d-none d-md-block">
                        <Flex flexDirection="column">
                            <Text variant="subhead">Follow us</Text>
                            <Flex marginTop={10} flexDirection="row">
                                <Image src={logos[variant].twitter} marginRight={20} />
                                <Image src={logos[variant].telegram} marginRight={20} />
                                <Image src={logos[variant].github} marginRight={20} />
                                <Image src={logos[variant].medium} marginRight={20} />
                                <Image src={logos[variant].linkedin} marginRight={20} />
                            </Flex>
                        </Flex>
                    </Col>
                </Row>

                {/* FOR MOBILE */}
                <Row className="d-block d-md-none mt-5 ">
                    <Col>
                        <Flex flexDirection="column">
                            <Text variant="subhead">Follow us</Text>
                            <Flex marginTop={10} flexDirection="row">
                                <Image src={logos[variant].twitter} marginRight={20} />
                                <Image src={logos[variant].telegram} marginRight={20} />
                                <Image src={logos[variant].github} marginRight={20} />
                                <Image src={logos[variant].medium} marginRight={20} />
                                <Image src={logos[variant].linkedin} marginRight={20} />
                            </Flex>
                        </Flex>
                    </Col>
                </Row>
                <Row className="d-block d-md-none mt-5 ">
                    <Col>
                        <Flex flexDirection="column">
                            <Image src={logo} width={210} paddingTop={'7px'} />
                            <Text variant="body" marginTop={15}>
                                © Copyright 2021 Ki Foundation
                                <br />
                                All rights reserved.
                            </Text>
                        </Flex>
                    </Col>
                </Row>
            </Container>
        </Box>
    )
}

export default Footer
