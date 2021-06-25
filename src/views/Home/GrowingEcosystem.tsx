import React from 'react'
import { Flex, Image, FlexProps } from 'rebass'
import { Text } from 'theme-ui'

import reload from '@assets/icons/reload.svg'
import locked from '@assets/icons/locked.svg'
import transaction from '@assets/icons/transaction.svg'
import waves from '@assets/icons/waves.svg'

import checkerboard from '@assets/ui/checkerboard-sm.svg'

interface GrowingEcosystemProps extends FlexProps {
    children: React.ReactNode
}

const GrowingEcosystem: React.FC<GrowingEcosystemProps> = ({ children, ...flexProps }) => {
    return (
        <Flex flexDirection="column" maxWidth={980} style={{ margin: '0 auto', marginTop: 50 }} {...flexProps}>
            <Flex
                alignItems="center"
                flexDirection="column"
                style={{
                    border: '1px solid rgba(12, 246, 252, 0.5)',
                    overflow: 'hidden',
                }}
            >
                <Flex flexDirection="column" justifyContent="center" alignItems="center">
                    {children}
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
                width="100%"
                alignItems="center"
                justifyContent="center"
                style={{
                    background: 'linear-gradient(90.14deg, #06EDF7 -26.27%, rgba(16, 21, 51, 0) 105.32%)',
                    border: '1px solid rgba(12, 246, 252, 0.5)',
                    borderTop: 0,
                }}
                paddingX={20}
                paddingY={10}
            >
                <Text variant="capture">SEE MORE</Text>
            </Flex>
        </Flex>
    )
}

export default GrowingEcosystem
