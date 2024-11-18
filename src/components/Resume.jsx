import React from "react";
import { Box, Grid, Heading, Text, VStack } from "@chakra-ui/react";

const Resume = () => {
  return (
    <Box
      bg="purple.50"
      py={10}
      px={{ base: 4, sm: 6, md: 10 }} // Responsive padding
      display="flex"
      justifyContent="center"
    >
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={{ base: 8, md: 20 }} // Adjust gap for smaller screens
        width={{ base: "100%", md: "90%", lg: "80%" }}
        mt={10}
      >
        {/* Experience Section */}
        <VStack align="start" spacing={{ base: 4, md: 6 }} width="100%">
          <Heading
            size={{ base: "lg", md: "2xl" }}
            color="purple.700"
            mb={6}
            bgGradient="linear(to-r, #b18af9, #b18af9, #4b288b, #352063, #1f143d)"
            bgClip="text"
          >
            <Box as="span" mr={2} role="img" aria-label="badge"></Box>
            My Experience
          </Heading>
          {[
            {
              date: "2024 - Present",
              title: "Jr. WEB DEVELOPER",
              place: "Santolan Pasig, City",
              active: true,
            },
            {
              date: "2022 - 2023",
              title: "FREELANCE WEB DEVELOPER",
              place: "Sta.Rosa, Laguna",
            },
            {
              date: "2020 - 2021",
              title: "UI DESIGNER",
              place: "House of Life, Leeds",
            },
          ].map((item, idx) => (
            <Box
              key={idx}
              bg="white"
              p={{ base: 4, md: 8 }} // Responsive padding
              color="black"
              boxShadow="xl"
              borderRadius="lg"
              transition="background 0.3s, color 0.3s"
              _hover={{
                bgGradient:
                  "linear(to-r,#7f3bedff , #693cc2ff,#352063, #1f143d)",
                color: "white",
              }}
              width="100%"
              role="group"
            >
              <Text
                fontSize={{ base: "sm", md: "lg" }} // Responsive text size
                color="purple.500"
                _groupHover={{ color: "white" }}
              >
                {item.date}
              </Text>
              <Text
                fontWeight="bold"
                fontSize={{ base: "lg", md: "2xl" }} // Responsive text size
                _groupHover={{ color: "white" }}
              >
                {item.title}
              </Text>
              <Text
                fontSize={{ base: "sm", md: "lg" }} // Responsive text size
                _groupHover={{ color: "white" }}
              >
                {item.place}
              </Text>
            </Box>
          ))}
        </VStack>

        {/* Education Section */}
        <VStack align="start" spacing={{ base: 4, md: 6 }} width="100%">
          <Heading
            size={{ base: "lg", md: "2xl" }}
            color="purple.700"
            mb={6}
            bgGradient="linear(to-r, #b18af9, #b18af9, #4b288b, #352063, #1f143d)"
            bgClip="text"
          >
            <Box as="span" mr={2} role="img" aria-label="graduation cap"></Box>
            My Education
          </Heading>
          {[
            {
              date: "2020-2024",
              title: "BS INFORMATION TECHNOLOGY",
              place: "URS Binangonan",
            },
            {
              date: "2018-2020",
              title: "INFORMATION TECHNOLOGY",
              place: "AMA SHS",
            },
            {
              date: "2014-2018",
              title: "WEB DESIGN COURSE",
              place: "MISMNHS",
            },
          ].map((item, idx) => (
            <Box
              key={idx}
              p={{ base: 4, md: 8 }} // Responsive padding
              bg="white"
              boxShadow="xl"
              borderRadius="lg"
              transition="background 0.3s, color 0.3s"
              _hover={{
                bgGradient:
                  "linear(to-r,#7f3bedff , #693cc2ff,#352063, #1f143d)",
                color: "white",
              }}
              width="100%"
              role="group"
            >
              <Text
                fontSize={{ base: "sm", md: "lg" }} // Responsive text size
                color="purple.500"
                _groupHover={{ color: "white" }}
              >
                {item.date}
              </Text>
              <Text
                fontWeight="bold"
                fontSize={{ base: "lg", md: "2xl" }} // Responsive text size
                _groupHover={{ color: "white" }}
              >
                {item.title}
              </Text>
              <Text
                fontSize={{ base: "sm", md: "lg" }} // Responsive text size
                _groupHover={{ color: "white" }}
              >
                {item.place}
              </Text>
            </Box>
          ))}
        </VStack>
      </Grid>
    </Box>
  );
};

export default Resume;
