import { Box, Text, Icon, VStack, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const services = [
  {
    id: 1,
    title: "Web Application and Development",
    description:
      "Building dynamic and interactive web applications using modern technologies like React, Angular, or Vue.js.",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "lorem ipsum dolor sit amet, consectetur adip nonum  soci cup lorem ipsum dolor lorem ipsum dolor",
  },
  {
    id: 3,
    title: "Web Design",
    description:
      "lorem ipsum dolor sit amet, consectetur adip nonum  soci cup lorem ipsum dolor lorem ipsum dolor",
  },
  {
    id: 4,
    title: "App Design",
    description:
      "lorem ipsum dolor sit amet, consectetur adip nonum  soci cup lorem ipsum dolor lorem ipsum dolor",
  },
];
const Services = () => {
  const [activeServiceId, setActiveServiceId] = useState(null);

  const handleToggle = (id) => {
    setActiveServiceId(activeServiceId === id ? null : id); // Toggle active state
  };
  /*   const gradient = {
    bgGradient: "linear(to-r, #b18af9, #b18af9, #4b288b, #352063, #1f143d)",
  }; */
  return (
    <Box textAlign="center" mt={20}>
      <Box className="title">
        <Text
          fontSize={{
            base: "5xl",
            sm: "2xl",
            md: "3xl",
            lg: "4xl",
            xl: "5xl",
          }}
          fontWeight="bold"
          lineHeight="1.1"
          mt={2}
          bgGradient="linear(to-r, #b18af9, #b18af9, #4b288b, #352063, #1f143d)"
          bgClip="text" // Clip the background gradient to the text
          zIndex={2}
        >
          My Quality Services
        </Text>
        <Text fontSize="lg" mt={4} color="gray.600">
          I offer a wide range of services to help you achieve your goals.
        </Text>
        <VStack spacing={4} align="stretch" maxW="80%" mx="auto" mt={10}>
          {services.map((service) => (
            <Box
              key={service.id}
              onClick={() => handleToggle(service.id)}
              cursor="pointer"
              bg={activeServiceId === service.id ? "purple.800" : "gray.50"} // Dark purple when active, gray otherwise
              color={activeServiceId === service.id ? "white" : "purple.700"} // Change text color when active
              p={8}
              borderBottom="2px solid"
              borderColor="gray.200"
              transition="background-color 0.3s ease"
              _hover={{
                bg:
                  activeServiceId === service.id ? "purple.700" : "purple.100", // Different hover effect for active state
              }}
            >
              <Flex
                direction={{ base: "column", md: "row" }}
                align="center"
                justify="space-between"
              >
                <Flex
                  align="center"
                  mb={{ base: 3, md: 0 }}
                  flexShrink={0}
                  minW={{ base: "100%", md: "30%" }}
                >
                  <Text fontSize="2xl" fontWeight="bold" mr={3}>
                    {service.id < 10 ? `0${service.id}` : service.id}
                  </Text>
                  <Text fontSize="2xl" fontWeight="bold">
                    {service.title}
                  </Text>
                </Flex>
                <Text
                  fontSize="lg"
                  flex={1}
                  color={
                    activeServiceId === service.id ? "white" : "purple.700"
                  } // Change description color when active
                  minW={{ base: "100%", md: "60%" }}
                  textAlign="left"
                  whiteSpace="normal"
                >
                  {service.description}
                </Text>
                <Icon as={ArrowForwardIcon} boxSize={6} ml={8} />
              </Flex>
            </Box>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default Services;
