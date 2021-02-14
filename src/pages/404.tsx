/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Flex, Heading, Image, Stack } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';

import React, { ReactElement } from 'react';

export default function NotFound(): ReactElement {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "404.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1200) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    console.log(data);
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
                    {`Uh Oh! What you are looking for cannot be found`}
                </Heading>
            </Stack>
            <Box
                w={{ base: '80%', sm: '60%', md: '50%' }}
                mb={{ base: 12, md: 0 }}
            >
                {data?.placeholderImage?.childImageSharp?.fluid ? (
                    <Image
                        src={data?.placeholderImage?.childImageSharp?.fluid.src}
                        alt="sad dog"
                        size="100%"
                        rounded="1rem"
                        shadow="2xl"
                    />
                ) : null}
            </Box>
        </Flex>
    );
}
