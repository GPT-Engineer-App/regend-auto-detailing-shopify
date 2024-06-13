import { Container, VStack, Box, Heading, Text, Button, Image, SimpleGrid, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Hero Section */}
      <Box bg="gray.800" color="white" py={20} textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>Regend Auto Detailing</Heading>
        <Text fontSize="xl" mb={6}>Premium Auto Detailing Services</Text>
        <Button colorScheme="teal" size="lg">Book Now</Button>
      </Box>

      {/* Services Section */}
      <Box py={20} textAlign="center">
        <Heading as="h2" size="xl" mb={10}>Our Services</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box>
            <Image src="https://via.placeholder.com/300" alt="Service 1" mb={4} />
            <Heading as="h3" size="lg" mb={2}>Exterior Detailing</Heading>
            <Text>High-quality exterior detailing to make your car shine.</Text>
          </Box>
          <Box>
            <Image src="https://via.placeholder.com/300" alt="Service 2" mb={4} />
            <Heading as="h3" size="lg" mb={2}>Interior Detailing</Heading>
            <Text>Comprehensive interior cleaning and detailing.</Text>
          </Box>
          <Box>
            <Image src="https://via.placeholder.com/300" alt="Service 3" mb={4} />
            <Heading as="h3" size="lg" mb={2}>Ceramic Coating</Heading>
            <Text>Protective ceramic coating for long-lasting shine.</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Testimonials Section */}
      <Box bg="gray.100" py={20} textAlign="center">
        <Heading as="h2" size="xl" mb={10}>Testimonials</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Text fontSize="lg" mb={4}>"Regend Auto Detailing did an amazing job on my car. Highly recommend!"</Text>
            <Text fontWeight="bold">- John Doe</Text>
          </Box>
          <Box>
            <Text fontSize="lg" mb={4}>"Professional and thorough service. My car looks brand new!"</Text>
            <Text fontWeight="bold">- Jane Smith</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Contact Form Section */}
      <Box py={20} textAlign="center">
        <Heading as="h2" size="xl" mb={10}>Contact Us</Heading>
        <Box maxW="md" mx="auto">
          <FormControl id="name" mb={4}>
            <FormLabel>Name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="email" mb={4}>
            <FormLabel>Email</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="message" mb={4}>
            <FormLabel>Message</FormLabel>
            <Textarea />
          </FormControl>
          <Button colorScheme="teal" size="lg">Submit</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;