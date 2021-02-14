import { Box, Flex, Heading } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Icon } from '@chakra-ui/react';
import { Link } from 'gatsby';

export default function Footer(): ReactElement {
    return (
        <Flex
            width="100%"
            as="footer"
            bottom="0px"
            alignSelf="flex-end"
            alignItems="center"
            justify="space-between"
            textAlign="center"
            margin="90px 0px 16px 0px"
        >
            <Flex>
                <Heading
                    as="p"
                    size="sm"
                    opacity="0.8"
                    fontWeight="normal"
                    lineHeight={1.5}
                >
                    <Link to="/">
                        &copy; {new Date().getFullYear()} sri-writes.in
                    </Link>
                </Heading>
            </Flex>
            <Flex>
                <Box px={15} cursor="pointer">
                    <Link to="https://www.facebook.com/srinivas.laxman01">
                        <Icon as={FaFacebook} w={22} h={22} />
                    </Link>
                </Box>
                <Box px={15} cursor="pointer">
                    <Link to="https://www.instagram.com/srinivas.laxman01/">
                        <Icon as={FaInstagram} w={22} h={22} />
                    </Link>
                </Box>
                <Box px={15} cursor="pointer">
                    <Link to="https://www.linkedin.com/in/srilax01/">
                        <Icon as={FaLinkedinIn} w={22} h={22} />
                    </Link>
                </Box>
            </Flex>
        </Flex>
    );
}
