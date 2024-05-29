import { Container, Box, VStack, Text, Image, Button, Flex, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Hero Section */}
      <Box
        as="section"
        bgImage="url('/images/stopwatch-hero.jpg')"
        bgSize="cover"
        bgPosition="center"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        textAlign="center"
      >
        <VStack spacing={4}>
          <Heading as="h1" size="2xl">
            Precision Timing
          </Heading>
          <Text fontSize="xl">The ultimate stopwatch for all your timing needs.</Text>
          <Button colorScheme="teal" size="lg">
            Learn More
          </Button>
        </VStack>
      </Box>

      {/* Features Section */}
      <Box as="section" py={20} textAlign="center">
        <Heading as="h2" size="xl" mb={10}>
          Features
        </Heading>
        <Flex justify="space-around" wrap="wrap">
          <Box maxW="sm" p={5} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Heading as="h3" size="md" mb={4}>
              Split/Reset
            </Heading>
            <Text>Track multiple intervals with ease and reset with a single click.</Text>
          </Box>
          <Box maxW="sm" p={5} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Heading as="h3" size="md" mb={4}>
              Start/Stop
            </Heading>
            <Text>Simple start and stop functionality for accurate timing.</Text>
          </Box>
          <Box maxW="sm" p={5} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Heading as="h3" size="md" mb={4}>
              On/Off
            </Heading>
            <Text>Power on and off to save battery when not in use.</Text>
          </Box>
        </Flex>
      </Box>

      {/* Digital Timer Section */}
      <Box as="section" py={20} bg="gray.100" textAlign="center">
        <Heading as="h2" size="xl" mb={10}>
          Digital Timer
        </Heading>
        <Text fontSize="6xl" fontWeight="bold">
          00:00:00
        </Text>
      </Box>

      {/* Call to Action Section */}
      <Box as="section" py={20} textAlign="center">
        <Heading as="h2" size="xl" mb={10}>
          Ready to Get Started?
        </Heading>
        <Button colorScheme="teal" size="lg">
          Purchase Now
        </Button>
      </Box>
    </Container>
  );
};

export default Index;