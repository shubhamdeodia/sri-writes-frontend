import { extendTheme } from '@chakra-ui/react';

const colors = {
    primary: {
        100: '#E5FCF1',
        200: '#27EF96',
        300: '#10DE82',
        400: '#0EBE6F',
        500: '#0CA25F',
        600: '#0A864F',
        700: '#086F42',
        800: '#075C37',
        900: '#064C2E'
    }
};

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false
};

const fonts = {
    body: 'system-ui, source sans pro',
    heading: 'source sans pro',
    mono: 'Menlo, monospace'
};

const styles = {
    global: (props) => ({
        'html, body,  #___gatsby': {
            margin: 0,
            padding: 0,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            color: props.colorMode === 'dark' ? 'gray.400' : 'gray.600'
        },
        '#gatsby-focus-wrapper': {
            height: '100%'
        },
        a: {
            cursor: 'pointer',
            color: props.colorMode === 'dark' ? '#0EBE6F' : '#0CA25F'
        },
        button: {
            svg: {
                color: props.colorMode === 'dark' ? '#0EBE6F' : '#0CA25F'
            }
        }
    })
};

const customTheme = extendTheme({ colors, config, styles, fonts });

export default customTheme;
