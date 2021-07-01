import React, { useEffect, useState } from 'react'
import { Text } from 'theme-ui'
import { Flex, Box, Image } from 'rebass'
import { Container } from 'react-bootstrap'
import { ResponsiveContainer, AreaChart, Area } from 'recharts'
import Footer from '@shared/Layout/Footer'
import axios from 'axios'

import checkerboard from '@assets/ui/checkerboard-md.svg'
import lineBlue from '@assets/ui/line-blue.svg'

import { exchanges, ExchangeType } from '@views/Media/data'
import './media.scss'
import CardExchange from '@shared/Cards/CardExchange'

interface MediaProps {}

const Media: React.FC<MediaProps> = ({}) => {
    const [data, setData] = useState(null)
    const [chartColor, setChartColor] = useState(null)

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
                    width: ' 50vw',
                    height: '150vh',
                    left: '23vw',
                    top: '-150vh',
                    background: 'rgba(0, 180, 168, 0.4)',
                    filter: 'blur(670px)',
                }}
            />
            <Flex mt={5}>
                <Text as="h1" variant="h1" style={{ textAlign: 'center' }} sx={{ marginBottom: [4, 0] }}>
                    A growing <br />
                    ecosystem of value
                </Text>
            </Flex>
            <Container style={{ maxWidth: 1200, marginTop: '7%' }}>
                <Flex className="chart" style={{ position: 'relative', zIndex: 10 }}>
                    <Box style={{ position: 'absolute' }}>
                        <Text variant="body" sx={{ fontSize: 5 }}>
                            $1,54
                        </Text>
                    </Box>
                    {data ? (
                        <ResponsiveContainer>
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor={chartColor} stopOpacity={0.6} />
                                        <stop offset="65%" stopColor={chartColor} stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <Area dataKey="close" stroke={chartColor} strokeWidth={2} fill="url(#color)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    ) : null}
                </Flex>
            </Container>
            <Box style={{ position: 'relative' }}>
                <Box
                    style={{
                        position: 'absolute',
                        borderRadius: '80%',
                        width: '150%',
                        height: '57%',
                        background: 'rgb(15, 15, 23)',
                        opacity: 1,
                        filter: 'blur(20px)',
                        transform: 'translate(-15%, 0px)',
                    }}
                />
                <Image src={checkerboard} width="100%" />
            </Box>
            <Container style={{ maxWidth: 1200, marginTop: '4rem', position: 'relative' }}>
                <Flex style={{ position: 'relative', zIndex: 10 }}>
                    <Box
                        style={{
                            position: 'absolute',
                            zIndex: 2,
                            width: '50%',
                            height: '140%',
                            left: '50%',
                            borderRadius: '40%',
                            transform: 'translate(-50%, 0px)',
                            top: '-1rem',
                            background: 'rgba(0, 180, 168, 0.4)',
                            filter: 'blur(670px)',
                        }}
                    />
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

                <Flex
                    justifyContent="center"
                    flexDirection="column"
                    sx={{
                        marginTop: [5, 0],
                    }}
                >
                    <Text as="h2" variant="h2" style={{ textAlign: 'center' }}>
                        Exchanges decentralized
                    </Text>
                    <Box
                        sx={{
                            display: 'grid',
                            gridGap: '1rem',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(375px, 1fr))',
                            margin: '0 auto',
                            marginTop: [4],
                        }}
                    >
                        {exchanges
                            .filter((ex) => ex.type === ExchangeType.DECENTRELIZED)
                            .map((ex) => (
                                <CardExchange key={ex.title} exchange={ex} variant="blue" />
                            ))}
                        <CardExchange key="decentralized-coming-soon" variant="blue" isComingSoon />
                    </Box>
                </Flex>

                <Flex
                    justifyContent="center"
                    sx={{
                        marginTop: [5],
                    }}
                    flexDirection="column"
                >
                    <Text as="h2" variant="h2" style={{ textAlign: 'center' }}>
                        Exchanges centralized
                    </Text>
                    <Box
                        sx={{
                            display: 'grid',
                            gridGap: '1rem',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(375px, 1fr))',
                            margin: '0 auto',
                            marginTop: [4],
                        }}
                    >
                        {exchanges
                            .filter((ex) => ex.type === ExchangeType.CENTRELIZED)
                            .map((ex) => (
                                <CardExchange key={ex.title} exchange={ex} variant="pink" />
                            ))}
                        <CardExchange key="centralized-coming-soon" variant="pink" isComingSoon />
                    </Box>
                </Flex>
            </Container>
            <Footer variant="blue" marginTop={80} />
        </Flex>
    )
}

export default Media
