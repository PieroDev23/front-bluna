import React from 'react';
import { Box, BoxProps, Container, Heading, HeadingProps, ContainerProps } from '@chakra-ui/react';
import { DesktopNav } from '../Navigation';


type HeaderProps = {
    someVar?: boolean;
    someFn?: (param: boolean) => void;
};

function Header(props: HeaderProps) {
    /**
     * Initializers
     */

    const HeaderProps: BoxProps = {
        as: 'header',
        position: 'sticky',
        top: '0',
        backgroundColor: 'primary',
        color: 'white',
        paddingY: '15px'
    }

    const NavContainerProps: ContainerProps = {
        maxW: {
            md: '1200px',
        },
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

    const HeadingLogoProps: HeadingProps = {
        as: 'h1',
        fontSize: { base: '1.5rem', md: '2.7rem' }
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
        <Box {...HeaderProps}>
            <Container {...NavContainerProps}>
                <Heading {...HeadingLogoProps}>Bluna</Heading>
                <Box>
                    <DesktopNav />
                </Box>
            </Container>
        </Box>
    );
}

export { Header };