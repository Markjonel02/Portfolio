import React from "react";
import { Box, Grid, Heading, Text, VStack } from "@chakra-ui/react";

const Resume = () => {
  return (
    <Box bg="purple.50" py={10} display="flex" justifyContent="center">
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={20}
        width={{ base: "100%", md: "90%", lg: "80%" }}
        mt={20}
      >
        {/* Experience Section */}
        <VStack align="start" spacing={6} width="100%">
          <Heading
            size="2xl"
            color="purple.700"
            mb={10}
            bgGradient="linear(to-r, #b18af9, #b18af9, hoverColor, hoverColor, hoverColor)"
            bgClip="text"
          >
            <Box as="span" mr={2} role="img" aria-label="badge"></Box>
            My Experience
          </Heading>
          {[
            {
              date: "2022 - Present",
              title: "LEAD DEVELOPER",
              place: "Blockdots, London",
              active: true,
            },
            {
              date: "2021 - 2022",
              title: "FULL STACK WEB DEVELOPER",
              place: "Parsons, The New School",
            },
            {
              date: "2020 - 2021",
              title: "UI DESIGNER",
              place: "House of Life, Leeds",
            },
          ].map((item, idx) => (
            <Box
              key={idx}
              p={8} // Increased padding for larger card size
              boxShadow="xl" // Slightly stronger shadow
              borderRadius="lg"
              transition="background 0.3s, color 0.3s"
              width="100%"
              role="group"
              _hover={{
                bgGradient:
                  "linear(to-r, #693cc2ff, #693cc2ff, #693cc2ff, #352063, #1f143d)",
                color: "white",
              }}
            >
              <Text
                fontSize="lg"
                color={item.active ? "whiteAlpha.800" : "purple.500"}
                _groupHover={{ color: "white" }}
              >
                {item.date}
              </Text>
              <Text
                fontWeight="bold"
                fontSize="2xl"
                _groupHover={{ color: "white" }}
              >
                {item.title}
              </Text>
              <Text fontSize="lg" _groupHover={{ color: "white" }}>
                {item.place}
              </Text>
            </Box>
          ))}
        </VStack>

        {/* Education Section */}
        <VStack align="start" spacing={6} width="100%">
          <Heading
            size="2xl"
            color="purple.700"
            mb={10}
            bgGradient="linear(to-r, #b18af9, #b18af9, hoverColor, hoverColor, hoverColor)"
            bgClip="text"
          >
            <Box as="span" mr={2} role="img" aria-label="graduation cap"></Box>
            My Education
          </Heading>
          {[
            {
              date: "2020 - 2023",
              title: "PROGRAMMING COURSE",
              place: "Harvard University",
            },
            {
              date: "2016 - 2020",
              title: "GRAPHIC DESIGN COURSE",
              place: "University of Denmark",
            },
            {
              date: "2012 - 2015",
              title: "WEB DESIGN COURSE",
              place: "University of California",
            },
          ].map((item, idx) => (
            <Box
              key={idx}
              p={8} // Increased padding for larger card size
              bg="white"
              boxShadow="xl"
              borderRadius="lg"
              transition="background 0.3s, color 0.3s"
              _hover={{
                bgGradient: "linear(to-r, #693cc2ff, #352063, #1f143d)",
                color: "white",
              }}
              width="100%"
              role="group"
            >
              <Text
                fontSize="lg"
                color="purple.500"
                _groupHover={{ color: "white" }}
              >
                {item.date}
              </Text>
              <Text
                fontWeight="bold"
                fontSize="2xl"
                _groupHover={{ color: "white" }}
              >
                {item.title}
              </Text>
              <Text fontSize="lg" _groupHover={{ color: "white" }}>
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
//add fading animation for hover
