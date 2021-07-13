import React from 'react'
import { Flex, Box, BoxProps } from 'rebass'

interface CardProps extends BoxProps {
    children: React.ReactNode
    color: 'blue' | 'pink'
}

const Card: React.FC<CardProps> = ({ children, color, ...boxProps }) => {
    return (
        <Flex className={`card-${color}`} paddingX={20} paddingY={['40px', '50px', '60px']} {...boxProps}>
            <Flex flex={1} justifyContent="space-between" alignItems="center" height="100%" flexDirection="column">
                {children}
            </Flex>
        </Flex>
    )
}
export default Card
