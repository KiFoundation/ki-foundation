import React, { useEffect, useState } from 'react'
import { Text } from 'theme-ui'
import { Flex, Box, Image } from 'rebass'
import { Container } from 'react-bootstrap'
import { useSpring, animated, config } from 'react-spring'
import axios from 'axios'
import * as d3 from 'd3'

import checkerboard from '@assets/ui/checkerboard-xl.svg'
import checkerboardMd from '@assets/ui/checkerboard-md.svg'

import unionThree from '@assets/ui/union-three.svg'
import lineBlueToPink from '@assets/ui/line-blue-to-pink.svg'
import linePink from '@assets/ui/line-pink.svg'
import lineBlue from '@assets/ui/line-blue.svg'
import shadow from '@assets/ui/home/shadow.png'
import ellipse from '@assets/ui/home/ellipse.png'

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

    useEffect(() => {
        // In case we use vanilla JS to hanlde the animation
        /* let currentFrame = 0
        const totalFrames = 60
        let handle = 0 */
        //
        d3.xml(checkerboard).then((xml) => {
            const importedNode = document.importNode(xml.documentElement, true)
            const linesGroup = importedNode.querySelector('#lines')
            const linesPath = linesGroup.querySelectorAll('path')

            // const filter = importedNode.querySelector('#filter')

            const containerNode: any = d3.select('#checkerboard').node()
            containerNode.appendChild(importedNode)

            const transition = (path: d3.Selection<SVGPathElement, unknown, null, undefined>) => {
                path.transition()
                    .duration(3000)
                    .attrTween('stroke-dasharray', function () {
                        var l = this.getTotalLength()
                        var i = d3.interpolateString('0,' + l, l + ',' + l)
                        return function (t: number) {
                            return i(t)
                        }
                    })
            }

            linesPath.forEach((path) => {
                const p = d3.select(path)
                transition(p)
            })

            /*
            VANILLA JS - requestAnimationFrame

            const initLines = () => {
                for (const path of linesPath) {
                    const length = path.getTotalLength()
                    path.style.strokeDasharray = length + ' ' + length
                    path.style.strokeDashoffset = `${length}`
                }
            }

            const draw = () => {
                var progress = currentFrame / totalFrames
                if (progress > 1) {
                    window.cancelAnimationFrame(handle)
                } else {
                    currentFrame++
                    for (const path of linesPath) {
                        path.getBoundingClientRect()
                        // Define our transition
                        path.style.transition = 'stroke-dashoffset 3s ease'
                        // Go!
                        path.style.strokeDashoffset = '0'
                    }
                    handle = window.requestAnimationFrame(draw)
                }
            }

            initLines()
            draw()
            */
        })
    }, [])

    const fadeFromTopToBottom = useSpring({
        opacity: data ? 1 : 0,
        transform: `translate3d(-50%,${data ? '0' : '-70'}px,0)`,
        delay: 1000,
        config: config.slow,
    })

    const fadeFromBottomToTop = useSpring({
        opacity: data ? 1 : 0,
        transform: `translate3d(0%,${data ? '-80' : '70'}px, 0)`,
        delay: 1000,
        config: config.slow,
    })

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
                <animated.div
                    style={{
                        position: 'absolute',
                        left: '50%',
                        top: '9%',
                        zIndex: 4,
                        width: '100%',
                        ...fadeFromTopToBottom,
                    }}
                >
                    <CardBuy data={data} style={{ margin: '0 auto' }} />
                </animated.div>
                <Flex className="d-none d-md-flex w-100">
                    <animated.div
                        style={{ position: 'absolute', width: '100%', height: '100%', ...fadeFromBottomToTop }}
                    >
                        <Box
                            style={{
                                position: 'absolute',
                                zIndex: 4,
                                background: `center / contain no-repeat url(${shadow})`,
                                transform: 'translate(-50%, 0)',
                                left: '50%',
                                top: '27%',
                                width: '100%',
                                height: '9%',
                            }}
                        />
                        <Box
                            style={{
                                position: 'absolute',
                                zIndex: 3,
                                background: `center / contain no-repeat url(${ellipse})`,
                                transform: 'translate(-50%, 0)',
                                width: '100%',
                                height: '23%',
                                left: '50%',
                                top: '21%',
                            }}
                        />
                    </animated.div>
                    <Flex id="checkerboard" style={{ width: '100%' }} />
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
                <OurPartners
                    sx={{
                        marginTop: [5, 0],
                    }}
                />

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
                <Flex
                    sx={{
                        marginTop: [6, 0],
                    }}
                    justifyContent="center"
                    flexDirection="column"
                    alignItems="center"
                >
                    <Text variant="h2" style={{ textAlign: 'center' }}>
                        A growing <br />
                        ecosystem of value
                    </Text>
                    <Text variant="body" marginTop={20} style={{ textAlign: 'center' }}>
                        Deploying a new currency with a sustainable business model. <br />
                        For a better world. Block by block.
                    </Text>
                </Flex>
                <GrowingEcosystem data={data} />

                {/* TRANSITION LINE */}
                <Flex justifyContent="center" alignItems="center" flex={1} style={{ position: 'relative' }}>
                    <Image src={lineBlue} className="d-none d-md-block" />
                </Flex>
            </Container>
            <Flex>
                {/* TALK ABOUT US */}
                <Flex
                    justifyContent="center"
                    flexDirection="column"
                    alignItems="center"
                    sx={{
                        marginTop: [6, 0],
                    }}
                >
                    <TalkAboutUs />
                </Flex>
            </Flex>
            <Footer variant="blue" marginTop="6rem" />
        </Flex>
    )
}

export default Home
