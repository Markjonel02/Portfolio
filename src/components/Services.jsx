import { Box, Text, VStack, Flex } from "@chakra-ui/react";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building dynamic and interactive web applications using modern technologies like React, TypeScript, Vue.js, PHP, Django, HTML5, Tailwind CSS, Bootstrap, and Chakra UI.",
  },
  {
    id: 2,
    title: "Responsive Design",
    description:
      "Ensuring that websites are fully functional and visually appealing on all devices, including desktops, tablets, and smartphones.",
  },
  {
    id: 3,
    title: "Maintenance and Support",
    description:
      "Providing ongoing website maintenance, updates, and technical support to ensure optimal performance and security.",
  },
  {
    id: 4,
    title: "E-commerce Solutions",
    description:
      "Setting up and customizing WooCommerce stores, including product listings, payment gateways, and inventory management.",
  },
];

const Services = () => {
  const [activeServiceId, setActiveServiceId] = useState(null); // Default to no active service

  const handleToggle = (id) => {
    setActiveServiceId(activeServiceId === id ? null : id); // Toggle active state
  };

  return (
    <Box textAlign="center" mt={20} mb={20} px={{ base: 4, md: 10 }}>
      <Box className="title">
        <Text
          fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
          fontWeight="bold"
          lineHeight="1.2"
          mt={2}
          bgGradient="linear(to-r, #b18af9, #b18af9, hoverColor, purple.700, purple.800)"
          bgClip="text"
          id="services"
        >
          My Quality Services
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} mt={4} color="gray.600">
          I offer a wide range of services to help you achieve your goals.
        </Text>

        <VStack spacing={6} align="stretch" maxW="100%" mx="auto" mt={10}>
          {services.map((service) => (
            <Box
              key={service.id}
              onClick={() => handleToggle(service.id)}
              cursor="pointer"
              bg={activeServiceId === service.id ? "purple.800" : "gray.50"}
              color={activeServiceId === service.id ? "white" : "purple.700"}
              p={{ base: 6, md: 8 }}
              borderRadius="lg"
              border="1px solid"
              borderColor="gray.200"
              transition="background-color 0.3s ease, transform 0.2s"
              _hover={{
                bg:
                  activeServiceId === service.id ? "purple.700" : "purple.100",
                transform: "scale(1.02)",
              }}
            >
              <Flex
                direction={{ base: "column", sm: "row" }}
                align="center"
                justify="space-between"
                gap={{ base: 4, sm: 8 }}
              >
                <Flex
                  align="center"
                  flexShrink={0}
                  minW={{ base: "100%", sm: "40%" }}
                  direction={{ base: "column", sm: "row" }}
                  textAlign={{ base: "center", sm: "left" }}
                >
                  <Text fontSize="2xl" fontWeight="bold" mr={{ sm: 3 }}>
                    {service.id < 10 ? `0${service.id}` : service.id}
                  </Text>
                  <Text
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="bold"
                    maxW={{ base: "100%", sm: "300px" }}
                  >
                    {service.title}
                  </Text>
                </Flex>

                <Text
                  fontSize={{ base: "sm", md: "lg" }}
                  flex={1}
                  color={
                    activeServiceId === service.id ? "white" : "purple.700"
                  }
                  textAlign="left"
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
