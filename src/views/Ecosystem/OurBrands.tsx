import React from 'react'

import { Box, Flex, Image, FlexProps } from 'rebass'
import { Text } from 'theme-ui'
import Card from '@shared/Cards/Card'

import bridge from '@assets/logos/bridge.svg'
import klub from '@assets/logos/klub.svg'
import kichain from '@assets/logos/kichain.svg'

interface OurBrandsProps extends FlexProps {}

const OurBrands: React.FC<OurBrandsProps> = ({ ...flexProps }) => {
    return (
        <div
            style={{
                display: 'grid',
                gridGap: '1rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                maxWidth: 960,
            }}
        >
            <Card color="pink" flexDirection="column" alignItems="center">
                <Image src={klub} />
                <Text variant="body" style={{ textAlign: 'center' }}>
                    Exclusive wealth club, reimagined.
                </Text>
                <Text marginTop={25} variant="link" color="secondary">
                    Discover
                </Text>
            </Card>
            <Card color="pink" flexDirection="column" alignItems="center">
                <Image src={kichain} />
                <Text variant="body" style={{ textAlign: 'center' }}>
                    The Ki Token is the backbone of value-sharing in the Ki Ecosystem.
                </Text>
                <Text marginTop={25} variant="link" color="secondary">
                    Discover
                </Text>
            </Card>
            <Card color="pink" flexDirection="column" alignItems="center">
                <Image src={bridge} />
                <Text marginTop={20} variant="body" style={{ textAlign: 'center' }}>
                    Exclusive wealth club, reimagined.
                </Text>
                <Text marginTop={40} variant="link" color="secondary">
                    Discover
                </Text>
            </Card>
        </div>
    )
}

export default OurBrands
