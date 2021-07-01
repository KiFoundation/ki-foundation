import React from 'react'
import { Box, Flex, Image, BoxProps } from 'rebass'
import { Text } from 'theme-ui'
import Card from '@shared/Cards/Card'

import arrowRight from '@assets/icons/arrow-right.svg'
import bridge from '@assets/logos/bridge.svg'
import klub from '@assets/logos/klub.svg'
import kichain from '@assets/logos/kichain.svg'

interface OurMissionProps extends BoxProps {}

const OurMission: React.FC<OurMissionProps> = ({ style, ...boxProps }) => {
    return (
        <Box style={{ position: 'relative', ...style }} {...boxProps}>
            <Box
                style={{
                    position: 'absolute',
                    width: '20%',
                    height: '20%',
                    right: '24%%',
                    left: '40%',
                    top: 0,
                    zIndex: 2,
                    background: 'rgba(0, 180, 168, 0.4)',
                    filter: 'blur(525.466px)',
                }}
            />
            <Box
                style={{
                    position: 'absolute',
                    width: '20%',
                    height: '20%',
                    right: '24%%',
                    left: '40%',
                    top: 0,
                    zIndex: 3,
                    background: 'rgba(56, 95, 171, 0.2)',
                    filter: 'blur(620px)',
                }}
            />
            <Box
                style={{
                    position: 'relative',
                    zIndex: 9,
                    bottom: '6rem',
                }}
            >
                <Flex justifyContent="center" flexDirection="column" alignItems="center">
                    <Text variant="capture">OUR MISSION</Text>
                    <Text variant="h2">Building the crypto</Text>
                    <Text variant="body" marginTop={20} style={{ textAlign: 'center' }}>
                        Deploying a new currency with a sustainable business model. <br />
                        For a better world. Block by block.
                    </Text>
                    <Text marginTop={25} variant="link" color="primary">
                        See more <Image src={arrowRight} marginLeft="5px" />
                    </Text>
                </Flex>
                <Box
                    justifyContent="center"
                    marginTop={40}
                    sx={{
                        display: 'grid',
                        gridGap: '1rem',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        maxWidth: 1020,
                        margin: '0 auto',
                    }}
                >
                    <Card color="blue" flexDirection="column" alignItems="center">
                        <Image src={klub} />
                        <Text variant="body" style={{ textAlign: 'center' }}>
                            Exclusive wealth club, reimagined.
                        </Text>
                        <Text marginTop={25} variant="link" color="primary">
                            Discover
                        </Text>
                    </Card>
                    <Card color="blue" flexDirection="column" alignItems="center">
                        <Image src={kichain} />
                        <Text variant="body" style={{ textAlign: 'center' }}>
                            The Ki Token is the backbone of value-sharing in the Ki Ecosystem.
                        </Text>
                        <Text marginTop={25} variant="link" color="primary">
                            Discover
                        </Text>
                    </Card>
                    <Card color="blue" flexDirection="column" alignItems="center">
                        <Image src={bridge} />
                        <Text marginTop={20} variant="body" style={{ textAlign: 'center' }}>
                            Exclusive wealth club, reimagined.
                        </Text>
                        <Text marginTop={40} variant="link" color="primary">
                            Discover
                        </Text>
                    </Card>
                </Box>
            </Box>
        </Box>
    )
}

export default OurMission
