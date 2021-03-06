import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
