import {
  Box,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
  Icon,
  VStack,
  HStack,
  Circle,
} from "@chakra-ui/react";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactForm = () => {
  return (
    <Flex
      direction={{ base: "flex", xl: "row", md: "column", sm: "column" }} // Change flex direction on md and above
      align="center"
      justify="center"
      p={10}
      bg="purple.50"
    >
      {/* Left Side: Form */}
      <Box
        bg="white"
        p={10}
        rounded="lg"
        shadow="md"
        w={{ base: "100%", xl: "50%", md: "80%" }}
        mb={{ base: 8, md: 0 }}
        marginTop={20}
      >
        <Heading as="h2" fontSize={45} mb={4} color="purple.700">
          Let’s work together!
        </Heading>
        <Text mb={6} color="gray.600">
          I Create a project that satisfies the clients and provides them
          quality services.
        </Text>
        <VStack spacing={4}>
          {/* First Name and Last Name */}
          <HStack spacing={4} w="100%">
            <FormControl id="first-name" isRequired>
              <FormLabel>First name</FormLabel>
              <Input
                type="text"
                placeholder="First name"
                padding="25px"
                border="1px"
                borderColor={"purple.500"}
                focusBorderColor="purple.500"
              />
            </FormControl>
            <FormControl id="last-name" isRequired>
              <FormLabel>Last name</FormLabel>
              <Input
                type="text"
                placeholder="Last name"
                padding="25px"
                border="1px"
                borderColor={"purple.500"}
                focusBorderColor="purple.500"
              />
            </FormControl>
          </HStack>
          {/* Email Address and Phone Number */}
          <HStack spacing={4} w="100%">
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Email address"
                padding="25px"
                border="1px"
                borderColor={"purple.500"}
                focusBorderColor="purple.500"
              />
            </FormControl>
            <FormControl id="phone">
              <FormLabel>Phone number</FormLabel>
              <Input
                type="tel"
                placeholder="Phone number"
                padding="25px"
                border="1px"
                borderColor={"purple.500"}
                focusBorderColor="purple.500"
              />
            </FormControl>
          </HStack>
          <FormControl id="option">
            <FormLabel>Select an option</FormLabel>
            <Select
              placeholder="— Please choose an option —"
              border="1px"
              borderColor={"purple.500"}
              height="50px"
              focusBorderColor="purple.500"
            >
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </Select>
          </FormControl>
          <FormControl id="message">
            <FormLabel>Message</FormLabel>
            <Textarea
              placeholder="Message"
              rows={5}
              border="1px"
              borderColor={"purple.500"}
              focusBorderColor="purple.500"
            />
          </FormControl>
        </VStack>
        <Button
          size="sm"
          marginTop="20px"
          bgGradient="linear(to-r, #824cedff,rgb(39, 39, 41))"
          color="white"
          borderRadius="full"
          px={[4, 4, 10]} // Adjust padding for button responsiveness
          py={[4, 4, 8]}
          transition="background 0.8s ease"
          _hover={{
            bgGradient: "linear(to-l, #824cedff, #311961ff)",
            transitionDuration: "0.8s",
          }}
        >
          Send a message
        </Button>
      </Box>

      {/* Right Side: Contact Info */}
      <Box p={8} rounded="lg" w={{ base: "100%", md: "40%" }} ml={{ md: 8 }}>
        <VStack spacing={6} align="start">
          {/* Phone Section */}
          <HStack align="center">
            <Circle size="10" bg="purple.500">
              <Icon as={FaPhoneAlt} boxSize={5} color="white" />
            </Circle>
            <VStack align="start" spacing={0}>
              <Text fontSize="sm" color="gray.500">
                Phone
              </Text>
              <Text fontSize="md" color="gray.800">
                <a href="tel:09260447220">09260447220</a>
              </Text>
            </VStack>
          </HStack>

          {/* Email Section */}
          <HStack align="center">
            <Circle size="10" bg="purple.500">
              <Icon as={FaEnvelope} boxSize={5} color="white" />
            </Circle>
            <VStack align="start" spacing={0}>
              <Text fontSize="sm" color="gray.500">
                Email
              </Text>
              <Text fontSize="md" color="gray.800">
                <a href="mailto:markjoneldaeprelles@gmail.com">
                  markjoneldaeprelles@gmail.com
                </a>
              </Text>
            </VStack>
          </HStack>

          {/* Address Section */}
          <HStack align="center">
            <Circle size="10" bg="purple.500">
              <Icon as={FaMapMarkerAlt} boxSize={5} color="white" />
            </Circle>
            <VStack align="start" spacing={0}>
              <Text fontSize="sm" color="gray.500">
                Address
              </Text>
              <Text fontSize="md" color="gray.800">
                Warne Park Street Pine, FL 33157, New York
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </Box>
    </Flex>
  );
};

export default ContactForm;
