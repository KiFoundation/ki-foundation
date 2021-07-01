import React, { useState } from 'react'
import { Box, BoxProps, Image, Flex } from 'rebass'
import Slider, { Settings } from 'react-slick'
import { Text, useThemeUI } from 'theme-ui'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper.scss'

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
            className="neon-border-blue"
            style={{
                margin: '0 0.5rem',
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
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
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
            <Slider {...sliderSettings}>
                {[...new Array(10)].map((i) => (
                    <TalkAboutUsCard
                        key={`slide-${i}`}
                        articleBrand={<Image src={forbes} width={125} />}
                        articleTitle={'Ki foundation lève 8,3 Millions'}
                        articleSubtitle={
                            'Le projet en question, c’est Klub. Derrière ce nom, se cache une plateforme d’investissement'
                        }
                        link="https://google.com"
                    />
                ))}
            </Slider>
        </Box>
    )
}

export default TalkAboutUs
