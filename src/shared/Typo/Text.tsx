import * as React from 'react'
import { Heading, HeadingProps, Text as RebassText, TextProps as RebassTextProps } from 'rebass'
import { useThemeUI } from 'theme-ui'

interface TextProps {
    bold?: boolean
    className?: string
    children: any
    medium?: boolean
    onClick?: () => void
}

export type CustomTextProps = TextProps & HeadingProps & RebassTextProps

const Text: React.FC<CustomTextProps> = ({ bold, className, children, medium, onClick, ...rest }) => {
    const {theme } = useThemeUI()
    const headingLevel = String(rest.as).match(/h([1-6])/)
    return new RegExp('h([1-6])').test(String(rest.as)) ? (
        <Heading
            fontSize={6 - (headingLevel !== null ? +headingLevel[1] + 1 : 0)}
            onClick={onClick}
            className={className}
            {...rest}
        >
            {children}
        </Heading>
    ) : (
        <RebassText
            variant={bold ? 'bold' : medium ? 'medium' : 'default'}
            fontSize={theme.fontSizes[0]}
            onClick={onClick}
            className={className}
            {...rest}
        >
            {children}
        </RebassText>
    )
}

export default Text
