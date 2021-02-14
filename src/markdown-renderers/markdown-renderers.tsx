/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/display-name */

import { Box, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
// @ts-ignore
import { defaults } from 'chakra-ui-markdown-renderer';

const renderers = () => {
    return {
        ...defaults,
        code: ({
            language,
            value
        }: {
            language: string;
            value: React.ReactNode | string;
        }): React.ReactElement => {
            return (
                <Box p="10px">
                    <SyntaxHighlighter
                        style={dracula}
                        language={language}
                        children={value}
                    />
                </Box>
            );
        },
        image: ({ src, alt }: { src: string; alt: string }) => {
            return (
                <Box mb={10}>
                    <Image
                        src={src}
                        size="100%"
                        alt={alt}
                        rounded="1rem"
                        shadow="2xl"
                    />
                </Box>
            );
        },
        paragraph: ({
            children
        }: {
            children: React.ReactNode;
        }): React.ReactElement => {
            return (
                <Box p={3}>
                    <Heading
                        as="p"
                        size="md"
                        opacity="0.8"
                        fontWeight="normal"
                        lineHeight={1.5}
                        textAlign={['center', 'center', 'left', 'left']}
                    >
                        {children}
                    </Heading>
                </Box>
            );
        }
    };
};

export default renderers;
