import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Link } from 'gatsby';

export default function Logo(props) {
    return (
        <Box {...props}>
            <Link to="/">
                <Text fontSize="x-large" fontWeight="bold">
                    sri-writes
                </Text>
            </Link>
        </Box>
    );
}
