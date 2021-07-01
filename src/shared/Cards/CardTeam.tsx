import React from 'react'
import { Flex, Box, BoxProps, Image } from 'rebass'
import { Text } from 'theme-ui'

interface CardTeamProps extends BoxProps {
    image: string
    name: string
    job: string
}

const CardTeam: React.FC<CardTeamProps> = ({ image, name, job, ...boxProps }) => {
    return (
        <Flex flexDirection="column">
            <Box className="card-team" {...boxProps}>
                <Image src={image} width="100%" height="100%" />
            </Box>
            <Text color="primary" marginTop={20} sx={{ fontWeight: 'heading', fontSize: 2 }}>
                {name}
            </Text>
            <Text variant="body" marginTop={10} color="primary">
                {job}
            </Text>
        </Flex>
    )
}
export default CardTeam
