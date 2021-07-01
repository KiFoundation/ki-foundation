import { Exchange } from '@views/Media/data'
import React from 'react'
import { Flex, Box, BoxProps, Image } from 'rebass'
import { Text } from 'theme-ui'

interface CardExchangeProps extends BoxProps {
    exchange?: Exchange
    variant: 'blue' | 'pink'
    isComingSoon?: boolean
}

const CardExchange: React.FC<CardExchangeProps> = ({ exchange, variant, isComingSoon = false, ...boxProps }) => {
    return (
        <Box
            className={`card-exchange card-exchange-${variant}${isComingSoon ? ' coming-soon' : ''}`}
            paddingX={20}
            paddingY={22}
            {...boxProps}
        >
            <Flex
                flex={1}
                alignItems="center"
                height="100%"
                justifyContent={isComingSoon ? 'center' : 'flex-start'}
                flexDirection="row"
            >
                {isComingSoon ? (
                    <Text color={variant === 'blue' ? 'primary' : 'secondary'} style={{ opacity: 0.2 }}>
                        COMING SOON
                    </Text>
                ) : (
                    <>
                        <Image src={exchange.icon} />
                        <Flex flexDirection="column" marginLeft={17}>
                            <Text variant="subhead" sx={{ fontSize: 3 }}>
                                {exchange.title}
                            </Text>
                            <Text variant="body">{exchange.subtitle}</Text>
                        </Flex>
                    </>
                )}
            </Flex>
        </Box>
    )
}

export default CardExchange
