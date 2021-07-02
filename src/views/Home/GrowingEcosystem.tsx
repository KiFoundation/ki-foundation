import React from 'react'
import { Flex, Image, FlexProps, Box } from 'rebass'
import { Text } from 'theme-ui'
import CardBuy from '@shared/Cards/CardBuy'
import Card from '@shared/Cards/Card'

import reload from '@assets/icons/reload.svg'
import locked from '@assets/icons/locked.svg'
import transaction from '@assets/icons/transaction.svg'
import waves from '@assets/icons/waves.svg'

import checkerboard from '@assets/ui/checkerboard-sm.svg'

interface GrowingEcosystemProps extends FlexProps {
    data: any
}

const GrowingEcosystem: React.FC<GrowingEcosystemProps> = ({ data, ...flexProps }) => {
    return (
        <>
            <Flex
                className="d-none d-md-flex grid-blue"
                flexDirection="column"
                maxWidth={980}
                style={{ margin: '0 auto', marginTop: 50 }}
                {...flexProps}
            >
                <Flex
                    alignItems="center"
                    flexDirection="column"
                    style={{
                        border: '1px solid rgba(12, 246, 252, 0.5)',
                        overflow: 'hidden',
                    }}
                >
                    <Flex flexDirection="column" justifyContent="center" alignItems="center">
                        <Box marginTop={60} marginBottom={20}>
                            <CardBuy data={data} />
                        </Box>
                        <Image src={checkerboard} />
                    </Flex>

                    {/* RELOAD */}
                    <Flex justifyContent="space-between" width="100%" paddingX={20} paddingY={15} paddingTop={10}>
                        <Flex>
                            <Image src={reload} width={20} />
                            <Text variant="body" color="primary" sx={{ fontSize: 2 }} marginLeft={20}>
                                Circulating supply
                            </Text>
                        </Flex>
                        <Text variant="subhead" color="primary">
                            $75,353,655 XKI
                        </Text>
                    </Flex>

                    {/* LOCKED  */}
                    <Flex
                        justifyContent="space-between"
                        width="100%"
                        paddingX={20}
                        paddingY={15}
                        sx={{
                            borderTop: '1px solid rgba(12, 246, 252, 0.5)',
                            borderBottom: '1px solid rgba(12, 246, 252, 0.5)',
                        }}
                    >
                        <Flex>
                            <Image src={locked} width={20} />
                            <Text variant="body" color="primary" sx={{ fontSize: 2 }} marginLeft={20}>
                                Locked supply
                            </Text>
                        </Flex>
                        <Text variant="subhead" color="primary">
                            $12,653,755 XKI
                        </Text>
                    </Flex>

                    {/* DELEGATED */}
                    <Flex
                        justifyContent="space-between"
                        width="100%"
                        paddingX={20}
                        paddingY={15}
                        sx={{
                            borderBottom: '1px solid rgba(12, 246, 252, 0.5)',
                        }}
                    >
                        <Flex>
                            <Image src={transaction} width={20} />
                            <Text variant="body" color="primary" sx={{ fontSize: 2 }} marginLeft={20}>
                                Delegated supply
                            </Text>
                        </Flex>
                        <Text variant="subhead" color="primary">
                            $40,653,600 XKI
                        </Text>
                    </Flex>

                    {/* LIQUID */}
                    <Flex justifyContent="space-between" width="100%" paddingX={20} paddingY={15}>
                        <Flex>
                            <Image src={waves} width={20} />
                            <Text variant="body" color="primary" sx={{ fontSize: 2 }} marginLeft={20}>
                                Liquid supply
                            </Text>
                        </Flex>
                        <Text variant="subhead" color="primary">
                            $18,665,600 XKI
                        </Text>
                    </Flex>
                </Flex>
                <Flex
                    className="footer"
                    width="100%"
                    alignItems="center"
                    justifyContent="center"
                    style={{
                        // background: 'linear-gradient(90.14deg, #06EDF7 -26.27%, rgba(16, 21, 51, 0) 105.32%)',
                        border: '1px solid rgba(12, 246, 252, 0.5)',
                        borderTop: 0,
                    }}
                    paddingX={20}
                    paddingY={10}
                >
                    <Text variant="capture">SEE MORE</Text>
                </Flex>
            </Flex>
            <Flex
                className="growing-ecosystem d-flex d-md-none"
                flexDirection="column"
                style={{ width: '100%', marginTop: 40 }}
            >
                <CardBuy data={data} fullWidth />
                <Flex
                    className="neon-border-blue full-opacity"
                    flexDirection="column"
                    paddingX={20}
                    style={{ borderTop: 0 }}
                >
                    <Flex paddingY={20} flexDirection="column">
                        <Text variant="subhead">Circulating supply</Text>
                        <Text variant="body">$75,353,655 XKI</Text>
                    </Flex>
                    <Box width="100%" height={1} className="neon-border-blue full-opacity" />
                    <Flex paddingY={20} flexDirection="column">
                        <Text variant="subhead">Locked circulating</Text>
                        <Text variant="body">$12,653,755 XKI</Text>
                    </Flex>
                    <Box width="100%" height={1} className="neon-border-blue full-opacity" />
                    <Flex paddingY={20} flexDirection="column">
                        <Text variant="subhead">Delegated circulating</Text>
                        <Text variant="body">$40,653,600 XKI</Text>
                    </Flex>
                    <Box width="100%" height={1} className="neon-border-blue full-opacity" />
                    <Flex paddingY={20} flexDirection="column">
                        <Text variant="subhead">Liquid supply</Text>
                        <Text variant="body">$18,665,600 XKI</Text>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}

export default GrowingEcosystem
