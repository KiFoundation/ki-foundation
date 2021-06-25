import React from 'react'
import { Text } from 'theme-ui'
import { Flex, Box } from 'rebass'
import { Container } from 'react-bootstrap'
import Footer from '@shared/Layout/Footer'
import CardTeam from '@shared/Cards/CardTeam'

import { team } from '@views/Team/data'

import './team.scss'

interface TeamProps {}

const Team: React.FC<TeamProps> = ({}) => {
    return (
        <Flex className="team" alignItems="center" flexDirection="column">
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
            <Flex mt={5}>
                <Text as="h1" variant="h1" style={{ textAlign: 'center' }}>
                    Team
                </Text>
            </Flex>
            <Container style={{ maxWidth: 1200, marginTop: '7%' }}>
                <Box
                    sx={{
                        display: 'grid',
                        gridGap: '1rem',
                        rowGap: '2.5rem',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(275px, 1fr))',
                        margin: '0 auto',
                    }}
                >
                    {team.map((t) => (
                        <CardTeam key={t.name} {...t} />
                    ))}
                </Box>
            </Container>
            <Footer variant="blue" marginTop={80} />
        </Flex>
    )
}

export default Team
