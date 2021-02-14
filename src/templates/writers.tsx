import { Box, Button, Flex, Heading, Image, Stack } from '@chakra-ui/react';
import { graphql, Link } from 'gatsby';
import React, { ReactElement } from 'react';
import { StrapiWriter } from '../types';

export const query = graphql`
    query WriterQuery($slug: String!) {
        strapiWriter(slug: { eq: $slug }) {
            strapiId
            name
            email
            description
            picture {
                publicURL
                childImageSharp {
                    fixed {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    }
`;

export default function AboutMe({ data }): ReactElement {
    const writer: StrapiWriter = data.strapiWriter;

    return (
        <Flex
            align="center"
            justify={{
                base: 'center',
                md: 'space-around',
                xl: 'space-between'
            }}
            direction={{ base: 'column-reverse', md: 'row' }}
            wrap="nowrap"
            minH="70vh"
            px={8}
            mb={16}
        >
            <Stack
                spacing={4}
                w={{ base: '80%', md: '40%' }}
                align={['center', 'center', 'flex-start', 'flex-start']}
            >
                <Heading
                    as="h1"
                    size="xl"
                    fontWeight="bold"
                    textAlign={['center', 'center', 'left', 'left']}
                >
                    {`Hi! I am ${writer.name}`}
                </Heading>
                <Heading
                    as="h2"
                    size="md"
                    opacity="0.8"
                    fontWeight="normal"
                    lineHeight={1.5}
                    textAlign={['center', 'center', 'left', 'left']}
                >
                    {writer.description}
                </Heading>
                <a href={`mailto:${writer.email}`}>
                    <Button
                        colorScheme="primary"
                        borderRadius="8px"
                        py="4"
                        px="4"
                        lineHeight="1"
                        size="md"
                    >
                        Contact me
                    </Button>
                </a>
            </Stack>
            <Box
                w={{ base: '80%', sm: '60%', md: '50%' }}
                mb={{ base: 12, md: 0 }}
            >
                <Image
                    src={writer.picture?.publicURL || ''}
                    alt={writer.name || 'no picture'}
                    size="100%"
                    rounded="1rem"
                    shadow="2xl"
                />
            </Box>
        </Flex>
    );
}
