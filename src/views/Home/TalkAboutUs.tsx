import React from 'react'
import { Box, BoxProps, Image, Flex } from 'rebass'
import Slider, { Settings } from 'react-slick'
import { Text, useThemeUI } from 'theme-ui'

import forbes from '@assets/logos/forbes-white.svg'
import { hexToRgb } from '@helpers/color'

interface TalkAboutUsCardProps {
    articleBrand: string | React.ReactNode
    articleTitle: string
    articleSubtitle: string
    link: string
}

const TalkAboutUsCard: React.FC<TalkAboutUsCardProps> = ({
    articleBrand,
    articleTitle,
    articleSubtitle,
    link,
}) => {
    return (
        <Flex
            flexDirection="column"
            paddingTop={15}
            paddingX={25}
            paddingBottom={35}
            style={{
                border: '1px solid #0CF6FC',
                boxSizing: 'border-box',
            }}
        >
            {typeof articleBrand === 'string' ? <Text>{articleBrand}</Text> : articleBrand}
            <Text variant="subhead" marginTop={0}>
                {articleTitle}
            </Text>
            <Text variant="body" marginTop={15}>
                {articleSubtitle}
            </Text>
            <Box marginTop={30}>
                <a href={link} target="_blank">
                    <Text variant="link" color="primary">
                        Discover
                    </Text>
                </a>
            </Box>
        </Flex>
    )
}

interface TalkAboutUsProps extends BoxProps {}

const TalkAboutUs: React.FC<TalkAboutUsProps> = ({ ...boxProps }) => {
    const { theme } = useThemeUI()

    const backgroundRGB = hexToRgb(String(theme.rawColors.background))

    console.log(backgroundRGB)

    const sliderSettings: Settings = {
        arrows: false,
        autoplay: true,
        centerMode: true,
        dots: false,
    }
    return (
        <Box
            width={[1]}
            justifyContent="center"
            style={{
                position: 'relative',
            }}
            {...boxProps}
        >
            <Flex justifyContent="center">
                <Text variant="h2">They talk about us</Text>
            </Flex>
            {/* <Slider {...sliderSettings}> */}
            <Box
                marginTop={70}
                sx={{
                    width: '100%',
                    display: 'grid',
                    gridGap: '1rem',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
                    margin: '0 auto',
                }}
            >
                <TalkAboutUsCard
                    articleBrand={<Image src={forbes} width={125} />}
                    articleTitle={'Ki foundation lève 8,3 Millions'}
                    articleSubtitle={
                        'Le projet en question, c’est Klub. Derrière ce nom, se cache une plateforme d’investissement'
                    }
                    link="https://google.com"
                />
                <TalkAboutUsCard
                    articleBrand={<Image src={forbes} width={125} />}
                    articleTitle={'Ki foundation lève 8,3 Millions'}
                    articleSubtitle={
                        'Le projet en question, c’est Klub. Derrière ce nom, se cache une plateforme d’investissement'
                    }
                    link="https://google.com"
                />
                <TalkAboutUsCard
                    articleBrand={<Image src={forbes} width={125} />}
                    articleTitle={'Ki foundation lève 8,3 Millions'}
                    articleSubtitle={
                        'Le projet en question, c’est Klub. Derrière ce nom, se cache une plateforme d’investissement'
                    }
                    link="https://google.com"
                />
            </Box>
            {/* </Slider> */}
        </Box>
    )
}

export default TalkAboutUs
