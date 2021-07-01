import React from 'react'
import { Container } from 'react-bootstrap'
import { Box, Flex, Image, FlexProps } from 'rebass'
import { Text, useThemeUI } from 'theme-ui'

import sixDots from '@assets/icons/six-dots-pink.svg'
import amnis from '@assets/logos/amnis-pink.svg'
import cosmos from '@assets/logos/cosmos-pink.svg'
import domo from '@assets/logos/domo-pink.svg'
import liris from '@assets/logos/liris-pink.svg'
import thegarage from '@assets/logos/thegarage-pink.svg'
import sifu from '@assets/logos/sifu-pink.svg'
import checkerboard2d from '@assets/ui/checkerboard-2d-sm-pink.svg'
import { hexToRgb } from '@helpers/color'

interface PartnerCardProps {
    icon: string
}

const PartnerCard: React.FC<PartnerCardProps> = ({ icon }) => {
    const { theme } = useThemeUI()
    const secRGB = hexToRgb(String(theme.rawColors.secondary))
    return (
        <Box
            minHeight={220}
            sx={{
                position: 'relative',
                background: 'black',
                border: '1px solid #EA1078',
                cursor: 'pointer',
                ':hover': {
                    background: `rgba(${secRGB.r},${secRGB.g}, ${secRGB.b},0.27)`,
                    backdropFilter: 'blur(19px)',
                },
            }}
        >
            <Flex flex={1} justifyContent="center" alignItems="center" height="100%" flexDirection="column">
                <Image src={icon} />
            </Flex>
        </Box>
    )
}

interface OurPartnersProps extends FlexProps {
    displayBgGrid?: boolean
}

const OurPartners: React.FC<OurPartnersProps> = ({ displayBgGrid = true, ...flexProps }) => {
    return (
        <Flex justifyContent="center" alignItems="center" flex={1} style={{ position: 'relative' }} {...flexProps}>
            {displayBgGrid ? (
                <Box
                    style={{
                        position: 'absolute',
                        width: '80%',
                        left: '11%',
                        zIndex: 1,
                    }}
                >
                    <Image src={checkerboard2d} />
                </Box>
            ) : null}
            <Container className="our-partners px-0" style={{ position: 'relative', zIndex: 10, maxWidth: 780 }}>
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    style={{
                        background: 'linear-gradient(90.61deg, #EA1078 -88.84%, rgba(234, 16, 120, 0) 73.17%)',
                        border: '1px solid #EA1078',
                        borderBottom: 0,
                    }}
                    paddingX={20}
                    paddingY={15}
                >
                    <Text variant="subhead">Partners and validations</Text>
                    <Image src={sixDots} />
                </Flex>
                <Box
                    justifyContent="center"
                    sx={{
                        display: 'grid',
                        gridGap: 0,
                        gridTemplateColumns: 'repeat(auto-fit, minmax(245px, 1fr))',
                        maxWidth: 780,
                        margin: '0 auto',
                    }}
                >
                    <PartnerCard icon={amnis} />
                    <PartnerCard icon={cosmos} />
                    <PartnerCard icon={domo} />
                    <PartnerCard icon={thegarage} />
                    <PartnerCard icon={liris} />
                    <PartnerCard icon={sifu} />
                </Box>
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    style={{
                        background: 'linear-gradient(90.04deg, #EA1078 -70.41%, rgba(234, 16, 120, 0) 102.42%)',
                        border: '1px solid #EA1078',
                        backdropFilter: 'blur(23px)',
                        borderTop: 0,
                    }}
                    paddingX={20}
                    paddingY={10}
                >
                    <Text variant="capture" color="secondary">
                        SEE MORE
                    </Text>
                </Flex>
            </Container>
        </Flex>
    )
}

export default OurPartners
