import React, { PropsWithChildren } from 'react';
import { Container, ContainerProps } from '@chakra-ui/react';
import { Header } from '../../components';

interface BaseLayoutProps extends PropsWithChildren {
    someVar?: boolean;
    someFn?: (param: boolean) => void;
};

function BaseLayout({ children }: BaseLayoutProps) {
    /**
     * Initializers
     */
    const MainContainerProps: ContainerProps = {
        as: 'main',
        maxW: '1200px'
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
        <>
            <Header />
            <Container {...MainContainerProps}>
                {children}
            </Container>
        </>
    );
}

export { BaseLayout };