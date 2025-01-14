import { Box, Text, VStack, Flex } from "@chakra-ui/react";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building dynamic and interactive web applications using modern technologies like React, typescript, or Vue.js, Php, Django, Html5, Tailwind Css, Bootstrap, Chakra ui.",
  },
  {
    id: 2,
    title: "Responsive Design",
    description:
      "Ensuring that websites are fully functional and visually appealing on all devices, including desktops, tablets, and smartphones",
  },
  {
    id: 3,
    title: "Maintenance and  Support",
    description:
      "Providing ongoing website maintenance, updates, and technical support to ensure optimal performance and security.",
  },
  {
    id: 4,
    title: "E-commerce ",
    description:
      "Setting up and customizing WooCommerce stores, including product listings, payment gateways, and inventory management.",
  },
];

const Services = () => {
  const [activeServiceId, setActiveServiceId] = useState(1); // Set the initial active service to 1

  const handleToggle = (id) => {
    setActiveServiceId(activeServiceId === id ? null : id); // Toggle active state
  };

  return (
    <Box textAlign="center" mt={20} mb={20}>
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
        <VStack
          spacing={5}
          align="stretch"
          maxW="100%"
          mx="auto"
          mt={10}
          marginInline={{ base: "10", md: "20" }}
        >
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
                  <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    wordBreak="1"
                    width="300px"
                  >
                    {service.title}
                  </Text>
                </Flex>
                <Text
                  fontSize="lg"
                  flex={1}
                  color={
                    activeServiceId === service.id ? "white" : "purple.700"
                  } // Change description color when active
                  textAlign="left"
                  whiteSpace="normal"
                >
                  {service.description}
                </Text>
              </Flex>
            </Box>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default Services;
