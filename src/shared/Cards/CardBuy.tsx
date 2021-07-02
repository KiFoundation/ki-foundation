import React, { useEffect, useState } from 'react'
import { Flex, BoxProps } from 'rebass'
import { Button, Text } from 'theme-ui'
import { ResponsiveContainer, AreaChart, Area } from 'recharts'

interface CardBuyProps extends BoxProps {
    data: any
    fullWidth?: boolean
}

const CardBuy: React.FC<CardBuyProps> = ({ data, fullWidth = false, ...boxProps }) => {
    const [chartColor, setChartColor] = useState(null)

    useEffect(() => {
        if (data && data.length >= 2) {
            if (data[data.length - 1].close > data[data.length - 2].close) {
                setChartColor('#09FAA3')
            } else {
                setChartColor('#EA1051')
            }
        }
    }, [data])

    const handleClickBuy = () => {}

    return (
        <Flex className={`card-buy ${fullWidth ? 'full-width' : ''}`} sx={{ padding: [3, 4] }} {...boxProps}>
            <Flex flex={1} justifyContent="space-between" alignItems="center" flexDirection="row">
                <Flex className="chart" style={{ position: 'relative', zIndex: 10 }}>
                    {data ? (
                        <ResponsiveContainer width={120} height={55}>
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor={chartColor} stopOpacity={0.4} />
                                        <stop offset="75%" stopColor={chartColor} stopOpacity={0.05} />
                                    </linearGradient>
                                </defs>
                                <Area dataKey="close" stroke={chartColor} fill="url(#color)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    ) : null}
                </Flex>
                <Flex>
                    <Text variant="body" sx={{ fontSize: 5 }}>
                        $1,54
                    </Text>
                </Flex>
                <Flex>
                    <Button className="primary" onClick={handleClickBuy}>
                        <Text variant="body" sx={{ fontWeight: 600 }} color="black">
                            Buy
                        </Text>
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}
export default CardBuy
