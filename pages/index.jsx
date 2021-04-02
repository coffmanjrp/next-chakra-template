import Head from 'next/head';
import {
  Container,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from '@chakra-ui/react';
import ColorModeSwitcher from '../components/ColorModeSwitcher';
import Logo from '../components/Logo';

export default function Home() {
  return (
    <Container maxW="container.xl">
      <Head>
        <title>Next Chakra UI Template</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvent="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              href="https://chakra-ui.com"
              color="telegram.500"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box>
    </Container>
  );
}
