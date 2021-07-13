import React from 'react'
import { Text } from 'theme-ui'
import { Flex, Box } from 'rebass'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '@shared/Layout/Footer'
import CardTeam from '@shared/Cards/CardTeam'
import gradientXL from '@assets/ui/gradient-xl-blue.png'

import { team } from '@views/Team/data'

import './team.scss'

interface TeamProps {}

const Team: React.FC<TeamProps> = ({}) => {
    return (
        <Flex className="team" alignItems="center" flexDirection="column">
            <Box
                style={{
                    position: 'absolute',
                    width: ' 100%',
                    height: '100%',
                    left: '0%',
                    top: '-60%',
                    background: `center / cover no-repeat url(${gradientXL})`,
                }}
            />
            <Flex mt={5}>
                <Text as="h1" variant="h1" style={{ textAlign: 'center' }}>
                    Team
                </Text>
            </Flex>
            <Container style={{ maxWidth: 1200, marginTop: '7%' }}>
                <Row>
                    {team.map((t) => (
                        <Col xs={12} md={3} key={t.name} style={{ marginBottom: '3rem' }}>
                            <CardTeam {...t} />
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer variant="blue" marginTop={'15%'} />
        </Flex>
    )
}

export default Team
