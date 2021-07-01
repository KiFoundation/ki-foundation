import paraswap from '@assets/exchanges/paraswap-blue.svg'
import uniswap from '@assets/exchanges/uniswap-blue.svg'
import liquid from '@assets/exchanges/liquid-pink.svg'

export enum ExchangeType {
    CENTRELIZED,
    DECENTRELIZED,
}

export type Exchange = {
    icon: string
    title: string
    subtitle: string
    type: ExchangeType
}

export const exchanges: Exchange[] = [
    {
        icon: paraswap,
        title: 'Paraswap',
        subtitle: 'Trading: BTC, ETH, FIAT',
        type: ExchangeType.DECENTRELIZED,
    },
    {
        icon: uniswap,
        title: 'Uniswap',
        subtitle: 'Trading: BTC, ETH, FIAT',
        type: ExchangeType.DECENTRELIZED,
    },
    {
        icon: liquid,
        title: 'Liquid',
        subtitle: 'Trading: BTC, ETH, FIAT',
        type: ExchangeType.CENTRELIZED,
    },
]
