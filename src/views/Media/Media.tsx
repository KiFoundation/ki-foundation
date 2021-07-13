import React, { useEffect, useState } from 'react'
import { Text } from 'theme-ui'
import { Flex, Box, Image } from 'rebass'
import { Col, Container, Row } from 'react-bootstrap'
import { ResponsiveContainer, AreaChart, Area } from 'recharts'
import Footer from '@shared/Layout/Footer'
import axios from 'axios'

import checkerboard from '@assets/ui/test2.png'
import lineBlue from '@assets/ui/line-blue.svg'
import gradientXL from '@assets/ui/gradient-xl-blue.png'

import { exchanges, ExchangeType } from '@views/Media/data'
import './media.scss'
import CardExchange from '@shared/Cards/CardExchange'

interface MediaProps {}

const Media: React.FC<MediaProps> = ({}) => {
    const [data, setData] = useState(null)
    const [chartColor, setChartColor] = useState(null)

    useEffect(() => {
        axios
            .get('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=10&aggregate=3&e=Kraken')
            .then((res) => {
                setData(res.data['Data'])
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    useEffect(() => {
        if (data && data.length >= 2) {
            if (data[data.length - 1].close > data[data.length - 2].close) {
                setChartColor('#09FAA3')
            } else {
                setChartColor('#EA1051')
            }
        }
    }, [data])

    return (
        <Flex className="media" alignItems="center" flexDirection="column">
            <Box
                style={{
                    position: 'absolute',
                    width: ' 100%',
                    height: '100%',
                    left: '0%',
                    top: '-60%',
                    background: `center / cover no-repeat url(${gradientXL})`,
                }}
            />
            <Flex mt={5}>
                <Text
                    as="h1"
                    variant="h1"
                    style={{ textAlign: 'center' }}
                    sx={{ marginBottom: [4, 0], paddingX: '0.5rem' }}
                >
                    A growing <br />
                    ecosystem of value
                </Text>
            </Flex>
            <Container style={{ maxWidth: 1200, marginTop: '7%' }}>
                <Flex className="chart animate__animated animate__fadeIn animate__delay-1s">
                    <Box style={{ position: 'absolute' }}>
                        <Text variant="body" sx={{ fontSize: 5 }}>
                            $1,54
                        </Text>
                    </Box>
                    {data ? (
                        <Box mt={5} width="100%" height="100%">
                            <ResponsiveContainer>
                                <AreaChart data={data}>
                                    <defs>
                                        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor={chartColor} stopOpacity={0.6} />
                                            <stop offset="65%" stopColor={chartColor} stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <Area
                                        isAnimationActive={false}
                                        dataKey="close"
                                        stroke={chartColor}
                                        strokeWidth={2}
                                        fill="url(#color)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </Box>
                    ) : null}
                </Flex>
            </Container>
            <Box style={{ position: 'relative', overflow: 'hidden' }}>
                <Image src={checkerboard} width="100%" />
            </Box>
            <Container style={{ maxWidth: 1200, marginTop: '4rem' }}>
                <Flex style={{ zIndex: 10, position: 'relative' }}>
                    <Box className="ellipse" />
                    <Flex
                        className="buy-module"
                        alignItems="center"
                        justifyContent="center"
                        style={{ position: 'relative', zIndex: 10 }}
                    >
                        <Text variant="subhead" color="primary">
                            PAYMENT MODULE
                        </Text>
                    </Flex>
                </Flex>

                {/* TRANSITION LINE */}
                <Flex justifyContent="center" alignItems="center" flex={1} style={{ position: 'relative' }}>
                    <Image src={lineBlue} className="d-none d-md-block" />
                </Flex>

                <Box
                    sx={{
                        marginTop: [5],
                        maxWidth: 1200,
                    }}
                >
                    <Text as="h2" variant="h2" style={{ textAlign: 'center' }}>
                        Exchanges decentralized
                    </Text>
                    <Box sx={{ marginTop: [4, 5] }}>
                        <Row className="justify-content-center align-items-center">
                            {exchanges
                                .filter((ex) => ex.type === ExchangeType.DECENTRELIZED)
                                .map((ex) => (
                                    <Col xs={12} sm={12} md={4} key={ex.title} className="mb-3">
                                        <CardExchange exchange={ex} variant="blue" />
                                    </Col>
                                ))}
                            <Col xs={12} sm={12} md={4} className="mb-3">
                                <CardExchange key="decentralized-coming-soon" variant="blue" isComingSoon />
                            </Col>
                        </Row>
                    </Box>
                </Box>

                <Box
                    sx={{
                        marginTop: [5],
                        maxWidth: 1200,
                    }}
                >
                    <Text as="h2" variant="h2" style={{ textAlign: 'center' }}>
                        Exchanges centralized
                    </Text>
                    <Box sx={{ marginTop: [4, 5] }}>
                        <Row className="justify-content-center align-items-center">
                            {exchanges
                                .filter((ex) => ex.type === ExchangeType.CENTRELIZED)
                                .map((ex) => (
                                    <Col xs={12} sm={12} md={4} key={ex.title} className="mb-3">
                                        <CardExchange exchange={ex} variant="pink" />
                                    </Col>
                                ))}
                            <Col xs={12} sm={12} md={4} className="mb-3">
                                <CardExchange key="centralized-coming-soon" variant="pink" isComingSoon />
                            </Col>
                        </Row>
                    </Box>
                </Box>
            </Container>
            <Footer variant="blue" marginTop={80} />
        </Flex>
    )
}

export default Media
