import React from 'react'
import { Container } from 'react-bootstrap'
import { Box, Flex, Image, FlexProps } from 'rebass'
import { Text, useThemeUI } from 'theme-ui'

import sixDots from '@assets/icons/six-dots.svg'
import amnis from '@assets/logos/amnis.svg'
import cosmos from '@assets/logos/cosmos.svg'
import domo from '@assets/logos/domo.svg'
import liris from '@assets/logos/liris.svg'
import thegarage from '@assets/logos/thegarage.svg'
import sifu from '@assets/logos/sifu.svg'
import checkerboard2d from '@assets/ui/checkerboard-2d-sm-blue.svg'
import { hexToRgb } from '@helpers/color'

interface InvestorCardProps {
    icon: string
}

const InvestorCard: React.FC<InvestorCardProps> = ({ icon }) => {
    const { theme } = useThemeUI()
    const primaryRGB = hexToRgb(String(theme.rawColors.primary))
    return (
        <Box
            minHeight={220}
            sx={{
                position: 'relative',
                background: 'black',
                border: '1px solid rgba(12, 246, 252, 0.5)',
                cursor: 'pointer',
                ':hover': {
                    background: `rgba(${primaryRGB.r},${primaryRGB.g}, ${primaryRGB.b},0.27)`,
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

interface OurInvestorsProps extends FlexProps {
    displayBgGrid?: boolean
}

const OurInvestors: React.FC<OurInvestorsProps> = ({ displayBgGrid = true, ...flexProps }) => {
    return (
        <Flex alignItems="center" flex={1} style={{ position: 'relative' }} {...flexProps}>
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
            <Container className="our-investors px-0" style={{ position: 'relative', zIndex: 10, maxWidth: 780 }}>
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    style={{
                        background: 'linear-gradient(90.14deg, #06EDF7 -26.27%, rgba(16, 21, 51, 0) 105.32%)',
                        border: '1px solid rgba(12, 246, 252, 0.5)',
                        borderBottom: 0,
                    }}
                    paddingX={20}
                    paddingY={15}
                >
                    <Text variant="subhead">Our investors</Text>
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
                    <InvestorCard icon={amnis} />
                    <InvestorCard icon={cosmos} />
                    <InvestorCard icon={domo} />
                    <InvestorCard icon={thegarage} />
                    <InvestorCard icon={liris} />
                    <InvestorCard icon={sifu} />
                </Box>
                <Flex className="footer" justifyContent="center" alignItems="center" paddingX={20} paddingY={10}>
                    <Text variant="capture">SEE MORE</Text>
                </Flex>
            </Container>
        </Flex>
    )
}

export default OurInvestors
