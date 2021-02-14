import React from 'react';
import Layout from './src/components/Layout';
import { ColorModeScript } from '@chakra-ui/react';
import customTheme from './src/@chakra-ui/gatsby-plugin/theme';

// wrapping all pages with layout
export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;

export const onRenderBody = ({ setPreBodyComponents }) => {
    setPreBodyComponents([
        <ColorModeScript
            initialColorMode={customTheme.config.initialColorMode}
            key="chakra-ui-no-flash"
        />
    ]);
};
