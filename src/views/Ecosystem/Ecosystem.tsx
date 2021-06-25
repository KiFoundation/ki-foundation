import React from 'react'
import { Text } from 'theme-ui'
import { Flex, Box, Image } from 'rebass'
import { Container } from 'react-bootstrap'
import OurBrands from '@views/Ecosystem/OurBrands'
import OurInvestors from '@shared/OurInvestors'
import OurPartners from '@shared/OurPartners'
import Footer from '@shared/Layout/Footer'

import circlesMd from '@assets/ui/ecosystem-header-md.svg'
import circlesXs from '@assets/ui/ecosystem-header-xs.svg'
import unionPink from '@assets/ui/union-three-pink.svg'
import lineBlueToPink from '@assets/ui/line-blue-to-pink-straight.svg'

import './ecosystem.scss'

interface TeamProps {}

const Team: React.FC<TeamProps> = ({}) => {
    return (
        <Flex className="ecosystem" alignItems="center" flexDirection="column">
            <Box
                style={{
                    position: 'absolute',
                    width: ' 50vw',
                    height: '150vh',
                    left: '23vw',
                    top: '-150vh',
                    background: 'rgba(234, 16, 120, 0.4)',
                    filter: 'blur(670px)',
                    zIndex: 1,
                }}
            />
            <Box
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 2,
                }}
            >
                <Image src={circlesMd} />
            </Box>
            <Flex flexDirection="column" style={{ position: 'relative', zIndex: 10 }}>
                <Flex justifyContent="center" mt={5}>
                    <Text as="h1" variant="h1" style={{ textAlign: 'center' }}>
                        Ecosystem
                    </Text>
                </Flex>
                <Container style={{ maxWidth: 1200, marginTop: '7%' }}>
                    {/* OUR BRANDS BLOCK */}
                    <OurBrands />

                    {/* TRANSITION LINE */}
                    <Flex
                        justifyContent="center"
                        alignItems="center"
                        flex={1}
                        marginTop={40}
                        style={{ position: 'relative' }}
                    >
                        <Image src={unionPink} className="d-none d-md-block" />
                    </Flex>

                    <Flex justifyContent="center" mt={5} mb={5}>
                        <Text as="h2" variant="h1" style={{ textAlign: 'center' }}>
                            We invest and <br />
                            collaborate
                        </Text>
                    </Flex>

                    {/* INVESTORS BLOCK */}
                    <OurInvestors displayBgGrid={false} />

                    {/* TRANSITION LINE */}
                    <Flex justifyContent="center" alignItems="center" flex={1} style={{ position: 'relative' }}>
                        <Image src={lineBlueToPink} className="d-none d-md-block" />
                    </Flex>

                    {/* PARTNERS BLOCK */}
                    <OurPartners displayBgGrid={false} mt={5} />
                </Container>
            </Flex>
            <Footer variant="pink" marginTop={80} />
        </Flex>
    )
}

export default Team
