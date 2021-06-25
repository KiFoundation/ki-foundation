import React, { useEffect, useState } from 'react'
import { Text } from 'theme-ui'
import { Flex, Box, Image } from 'rebass'
import { Container } from 'react-bootstrap'
import axios from 'axios'

import checkerboard from '@assets/ui/checkerboard-xl.svg'
import checkerboardMd from '@assets/ui/checkerboard-md.svg'

import unionThree from '@assets/ui/union-three.svg'
import lineBlueToPink from '@assets/ui/line-blue-to-pink.svg'
import linePink from '@assets/ui/line-pink.svg'
import lineBlue from '@assets/ui/line-blue.svg'

import OurMission from '@views/Home/OurMission'
import OurInvestors from '@shared/OurInvestors'
import OurPartners from '@shared/OurPartners'
import GrowingEcosystem from '@views/Home/GrowingEcosystem'
import TalkAboutUs from '@views/Home/TalkAboutUs'
import Footer from '@shared/Layout/Footer'
import CardBuy from '@shared/Cards/CardBuy'

import './home.scss'

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios
            .get('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=50&aggregate=3&e=Kraken')
            .then((res) => {
                setData(res.data['Data'])
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <Flex className="home" flexDirection="column">
            <Box
                style={{
                    position: 'absolute',
                    width: ' 50vw',
                    height: '150vh',
                    left: '23vw',
                    top: '-150vh',
                    background: 'rgba(0, 180, 168, 0.4)',
                    filter: 'blur(670px)',
                }}
            />
            <Flex justifyContent="center" mt={5}>
                <Text as="h1" variant="h1" style={{ textAlign: 'center' }}>
                    Bridging cefi with DeFi
                    <br />
                    Block by Block
                </Text>
            </Flex>
            <Flex style={{ position: 'relative', paddingTop: '7rem' }}>
                <Box
                    style={{
                        position: 'absolute',
                        left: '50%',
                        top: '10%',
                        zIndex: 4,
                        transform: 'translate(-50%, 0)',
                    }}
                >
                    <CardBuy data={data} />
                </Box>
                <Flex className="d-none d-md-flex">
                    <Box
                        style={{
                            position: 'absolute',
                            width: '20%',
                            height: '6%',
                            left: '50%',
                            top: '31%',
                            zIndex: 4,
                            transform: 'translate(-50%, 0)',
                            background: 'radial-gradient(ellipse, #081223 30%, rgba(9, 24, 44, 0.4) 100%)',
                            filter: 'blur(30px)',
                        }}
                    />
                    <Box
                        style={{
                            position: 'absolute',
                            width: '50%',
                            height: '7%',
                            left: '50%',
                            top: '32%',
                            zIndex: 3,
                            transform: 'translate(-50%, 0)',
                            background:
                                'radial-gradient(ellipse, rgba(8, 18, 35, 0.6) 30%, rgba(9, 24, 44, 0) 100%)',
                            filter: 'blur(20px)',
                        }}
                    />
                    <Box
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '25%',
                            left: '50%',
                            top: '27%',
                            transform: 'translate(-50%, 0)',
                            background:
                                'radial-gradient(73.86% 50.99% at 50.03% 54.51%, rgba(12, 246, 252, 0.6) 0%, rgba(12, 246, 252, 0) 58.03%)',
                            filter: 'blur(40px)',
                        }}
                    />
                    <Image src={checkerboard} />
                </Flex>
                <Flex className="d-flex d-md-none mt-3">
                    <Image src={checkerboardMd} />
                </Flex>
            </Flex>
            <Container className="home-content-wrapper" style={{ maxWidth: 1200 }}>
                {/* MISSION BLOCK */}
                <OurMission />

                {/* TRANSITION LINE */}
                <Flex justifyContent="center" alignItems="center" flex={1}>
                    <Image src={unionThree} className="d-none d-md-block" />
                </Flex>

                {/* INVESTORS BLOCK */}
                <OurInvestors />

                {/* TRANSITION LINE */}
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    flex={1}
                    style={{ position: 'relative', left: '4%' }}
                >
                    <Image src={lineBlueToPink} className="d-none d-md-block" />
                </Flex>

                {/* PARTNERS BLOCK */}
                <OurPartners />

                {/* TRANSITION LINE */}
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    flex={1}
                    style={{ position: 'relative', left: '6%' }}
                >
                    <Image src={linePink} className="d-none d-md-block" />
                </Flex>

                {/* GROWING ECOSYSTEM */}
                <Flex className="mt-5 mt-md-0" justifyContent="center" flexDirection="column" alignItems="center">
                    <Text variant="h2" style={{ textAlign: 'center' }}>
                        A growing <br />
                        ecosystem of value
                    </Text>
                    <Text variant="body" marginTop={20} style={{ textAlign: 'center' }}>
                        Deploying a new currency with a sustainable business model. <br />
                        For a better world. Block by block.
                    </Text>
                </Flex>
                <GrowingEcosystem>
                    <Box marginTop={60} marginBottom={20}>
                        <CardBuy data={data} />
                    </Box>
                </GrowingEcosystem>

                {/* TRANSITION LINE */}
                <Flex justifyContent="center" alignItems="center" flex={1} style={{ position: 'relative' }}>
                    <Image src={lineBlue} className="d-none d-md-block" />
                </Flex>

                {/* TALK ABOUT US */}
                <Flex className="mt-5 mt-md-0" justifyContent="center" flexDirection="column" alignItems="center">
                    <TalkAboutUs />
                </Flex>
            </Container>
            <Footer variant="blue" marginTop={80} />
        </Flex>
    )
}

export default Home
