/* eslint-disable sonarjs/no-identical-functions */
/* eslint-disable max-lines-per-function */
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
                <Box
                    fontSize={['md', 'md', 'lg', 'xl']}
                    m="0"
                    p={2}
                    w="100%"
                    maxW="1140px"
                    overflow="auto"
                >
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
                <Box p={2} mb={10}>
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
                <Box p={2}>
                    <Heading
                        as="p"
                        fontSize={['md', 'md', 'lg', 'lg']}
                        opacity="0.8"
                        fontWeight="normal"
                        lineHeight={1.5}
                    >
                        {children}
                    </Heading>
                </Box>
            );
        },
        heading: ({
            children
        }: {
            children: React.ReactNode;
        }): React.ReactElement => {
            return <Box p={2}>{children}</Box>;
        },
        html: ({
            children
        }: {
            children: React.ReactNode;
        }): React.ReactElement => {
            return (
                <Box w="100%" p={2}>
                    {children}
                </Box>
            );
        },
        virtualHtml: ({
            children
        }: {
            children: React.ReactNode;
        }): React.ReactElement => {
            return (
                <Box w="100%" p={2}>
                    {children}
                </Box>
            );
        },
        parsedHtml: ({
            children
        }: {
            children: React.ReactNode;
        }): React.ReactElement => {
            return (
                <Box w="100%" p={2}>
                    {children}
                </Box>
            );
        }
    };
};

export default renderers;
