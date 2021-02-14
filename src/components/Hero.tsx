import { Flex, Heading, Stack } from '@chakra-ui/react';
import React from 'react';

export default function Hero({
    title,
    description
}: {
    title: string | null | undefined;
    description: string | null | undefined;
}): React.ReactElement {
    return (
        <Flex
            align="center"
            justify={{
                base: 'center',
                md: 'space-around'
            }}
            direction={{ base: 'column', md: 'row' }}
            wrap="nowrap"
            minH="100px"
            pb={4}
            mb={8}
        >
            <Stack
                spacing={4}
                w={{ base: '100%', md: '100%' }}
                align={['center', 'center', 'flex-start', 'flex-start']}
            >
                <Heading
                    as="h1"
                    size="xl"
                    fontWeight="bold"
                    textAlign={['center', 'center', 'left', 'left']}
                >
                    {title}
                </Heading>
                <Heading
                    as="h2"
                    size="md"
                    opacity="0.8"
                    fontWeight="normal"
                    lineHeight={1.5}
                    textAlign={['center', 'center', 'left', 'left']}
                >
                    {description}
                </Heading>
            </Stack>
        </Flex>
    );
}
