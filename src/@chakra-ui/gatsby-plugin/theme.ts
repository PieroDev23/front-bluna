import { extendTheme } from "@chakra-ui/react";

import '@fontsource/inter';
import '@fontsource/heebo';

const theme = extendTheme({
    colors: {
        white: "#F7FAFC",
        black: "#1A202C",
        primary: "#3182CE",
        secondary: "#4299E1",
        tertiary: "#2B6CB0",
        success: "#68D391",
        warning: "#F6E05E",
        error: "#E53E3E"
    },
    fonts: {
        heading: "Heebo",
        body: "Inter"
    },
    containers: {
        lg: '1200px'
    }
});

export default theme;