export const customTheme = {
    breakpoints: ['40em', '52em', '64em'],

    fontSizes: [14, 16, 18, 20, 24, 28, 32, 40, 56, 64],
    colors: {
        text: 'white',
        blue: '#0CF6FC',
        black: '#07071A',
        grey: '#5D6A76',
        pink: '#EA1078',
        primary: '#0CF6FC',
        secondary: '#EA1078',
        background: '#07071A',
    },
    space: [0, 4, 8, 16, 32, 64, 128, 256, 300],
    fonts: {
        body: 'ChakraPetch',
        heading: 'ChakraPetch',
        monospace: 'Menlo, monospace',
    },
    fontWeights: {
        body: 400,
        heading: 700,
        menuLink: 500,
        bold: 700,
        link: 600,
        subhead: 600,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.25,
    },
    shadows: {
        small: '0 0 4px rgba(0, 0, 0, .125)',
        large: '0 0 24px rgba(0, 0, 0, .125)',
    },
    variants: {},
    text: {
        h1: {
            fontSize: [7, 8, 9],
            fontWeight: 'heading',
            fontFamily: 'heading',
            lineHeight: 'heading',
            color: 'text',
        },
        h2: {
            fontSize: [6, 7, 8],
            fontWeight: 'heading',
            fontFamily: 'heading',
            lineHeight: 'heading',
            color: 'text',
        },
        link: {
            fontSize: [2],
            fontWeight: 'link',
            fontFamily: 'body',
            cursor: 'pointer',
        },
        subhead: {
            fontSize: [2],
            fontWeight: 'subhead',
            fontFamily: 'body',
            color: 'text',
        },
        subheadMobile: {
            fontSize: [3],
            fontWeight: 'subhead',
            fontFamily: 'body',
            color: 'text',
        },
        capture: {
            color: 'primary',
            fontFamily: 'body',
            fontSize: [1],
        },
        body: {
            fontSize: [1],
            fontFamily: 'body',
            color: 'text',
        },
        menuLink: {
            fontSize: [1],
            fontWeight: 'menuLink',
            fontFamily: 'body',
            cursor: 'pointer',
        },
    },
    styles: {},
    buttons: {
        primary: {
            bg: 'primary',
            borderRadius: 0,
        },
    },
}
