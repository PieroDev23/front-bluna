import { ChakraProvider, ChakraProviderProps } from "@chakra-ui/react";
import theme from './src/@chakra-ui/gatsby-plugin/theme';
import React from "react";
import { WrapRootElementBrowserArgs } from "gatsby";


export const wrapRootElement = ({ element }: WrapRootElementBrowserArgs) => {

    return (
        <ChakraProvider theme={theme}>{element}</ChakraProvider>
    )

}