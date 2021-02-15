/* eslint-disable max-lines-per-function */
/* eslint-disable sonarjs/no-all-duplicated-branches */
/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react';
import { Link } from 'gatsby';
import {
    Box,
    Flex,
    Text,
    useColorModeValue,
    useColorMode,
    IconButton,
    Tooltip
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgClose } from 'react-icons/cg';

import Logo from './Logo';

interface IMenuItem {
    isLast?: boolean;
    to: string;
    children: React.ReactNode;
}

const MenuItem: React.FC<IMenuItem> = ({
    children,
    isLast,
    to = '/',
    ...rest
}): React.ReactElement => (
    <Text
        mb={{ base: isLast ? 0 : 8, sm: 0 }}
        mr={{ base: 0, sm: isLast ? 0 : 8 }}
        display="block"
        {...rest}
    >
        <Link to={to}>{children}</Link>
    </Text>
);

const CloseIcon = () => (
    <IconButton
        size="md"
        fontSize="lg"
        aria-label={'close menu'}
        variant="ghost"
        ml={{ base: '0', md: '3' }}
        icon={<CgClose />}
    />
);

const MenuIcon = () => (
    <IconButton
        size="md"
        fontSize="lg"
        aria-label={'close menu'}
        variant="ghost"
        color="current"
        ml={{ base: '0', md: '3' }}
        icon={<GiHamburgerMenu />}
    />
);

const Header: React.FC = (props): React.ReactElement => {
    const [show, setShow] = React.useState(false);
    const toggleMenu = () => setShow(!show);
    const { toggleColorMode: toggleMode } = useColorMode();
    const text = useColorModeValue('dark', 'light');
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={8}
            {...props}
        >
            <Flex>
                <Tooltip
                    label={`Switch to ${text} mode`}
                    aria-label={`Switch to ${text} mode`}
                >
                    <IconButton
                        size="md"
                        fontSize="lg"
                        aria-label={`Switch to ${text} mode`}
                        variant="ghost"
                        ml={{ base: '0', md: '3' }}
                        onClick={toggleMode}
                        icon={<SwitchIcon />}
                    />
                </Tooltip>
            </Flex>

            <Flex align="center" order={0}>
                <Logo w="120px" />
            </Flex>

            <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
                {show ? <CloseIcon /> : <MenuIcon />}
            </Box>

            <Box
                display={{ base: show ? 'block' : 'none', md: 'block' }}
                flexBasis={{ base: '100%', md: 'auto' }}
            >
                <Flex
                    align="center"
                    justify={['center', 'flex-end', 'flex-end', 'flex-end']}
                    direction={['column', 'row', 'row', 'row']}
                    fontSize="md"
                    pt={[4, 4, 0, 0]}
                >
                    <MenuItem to="/writers/srinivas-laxman">About Me</MenuItem>
                </Flex>
            </Box>
        </Flex>
    );
};

export default Header;
