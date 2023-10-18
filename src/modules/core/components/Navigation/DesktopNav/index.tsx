import React from 'react';
import { Box, BoxProps, Link as ChakraLink, LinkProps } from '@chakra-ui/react';
import { Link } from 'gatsby';

function DesktopNav() {
    /**
     * Initializers
     */

    const NavigationProps: BoxProps = {
        as: 'nav',
        display: { base: 'none', md: 'flex' },
        gap: '1.5rem',
        fontWeight: 'bold'
    }

    const LinkProps: LinkProps = {
        as: Link,
        _hover: {
            textDecoration: 'none'
        },
        _activeLink: {
            textDecoration: 'underline',
            textDecorationThickness: '3px',
            textUnderlineOffset: '5px'
        }
    }

    /**
     * Contexts
     */

    /**
     * Functions
     */

    /**
     * Hooks
     */

    /**
     * Renders
     */
    return (
        <Box {...NavigationProps}>
            <ChakraLink {...LinkProps} to="/">Home</ChakraLink>
            <ChakraLink {...LinkProps} to='/login'>Login</ChakraLink>
            <ChakraLink {...LinkProps} to='/register'>Register</ChakraLink>
        </Box>
    );
}

export { DesktopNav };