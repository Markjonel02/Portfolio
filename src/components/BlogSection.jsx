// components/BlogSection.jsx
import React from "react";
import {
  Box,
  Image,
  Text,
  Flex,
  Heading,
  SimpleGrid,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AllProj from "./AllProj"; // Your existing AllProj component
import { posts } from "../data/Allproject"; // Assuming 'posts' data is correctly imported

const BlogSection = () => {
  // For the banner, let's pick the first post or a specific one
  const featuredPost = posts[0]; // Or define a dedicated banner object if it's not a blog post

  return (
    <Box>
      {/* Image Banner Section */}
      <Box
        position="relative"
        height={["300px", "400px", "550px"]} // Responsive height
        overflow="hidden"
        mb={12}
      >
        <Image
          src={
            featuredPost?.image ||
            "https://placehold.co/1500x800/E9D8FD/4A2C7A?text=Blog+Banner"
          } // Fallback image
          alt="Main Blog Banner"
          objectFit="cover"
          width="100%"
          height="100%"
          // Optional: Add a subtle overlay to make text more readable
          _after={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bg: "rgba(0,0,0,0.5)", // Dark overlay for text readability
            zIndex: 1, // Ensure overlay is below text but above image
          }}
        />
        <Flex
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          direction="column"
          justify="center"
          align="center"
          textAlign="center"
          color="white"
          p={4}
          zIndex={2} // Ensure text is above overlay
        >
          <Heading as="h1" size={["xl", "2xl", "4xl"]} mb={[2, 4]}>
            {featuredPost?.title || "Welcome to Our Blog"}
          </Heading>
          <Text fontSize={["md", "lg", "xl"]} maxW="800px" mb={[4, 6]}>
            {featuredPost?.description ||
              "Discover insightful articles, exciting projects, and much more."}
          </Text>
          <ChakraLink
            as={Link}
            to={featuredPost?.links || "/blog"} // Link to the featured post or all posts
            bg="purple.600"
            color="white"
            px={6}
            py={3}
            borderRadius="full"
            fontWeight="bold"
            _hover={{ bg: "purple.700", textDecoration: "none" }}
            transition="background-color 0.3s ease"
          >
            Read More
          </ChakraLink>
        </Flex>
      </Box>

      {/* "All Posts" Section (using your AllProj component) */}
      <Box p={6} mx="auto" maxW="1200px">
        <Heading as="h2" size="xl" textAlign="center" mb={8}>
          Latest Blog Posts
        </Heading>
        <AllProj /> {/* This renders your grid of BlogCards */}
      </Box>

      {/* Another Image Grid (Example - could be "Related Projects" or "Popular Posts") */}
      <Box p={6} mx="auto" maxW="1200px" mt={12}>
        <Heading as="h2" size="xl" textAlign="center" mb={8}>
          Explore More Topics
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          {posts.slice(1, 4).map(
            (
              post,
              index // Displaying next 3 posts as example
            ) => (
              <Box
                key={index}
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                _hover={{ boxShadow: "lg" }}
                transition="box-shadow 0.3s ease"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  objectFit="cover"
                  height="200px"
                  width="100%"
                />
                <Box p={4}>
                  <Text fontSize="lg" fontWeight="semibold" mb={2}>
                    <ChakraLink
                      as={Link}
                      to={post.links}
                      _hover={{
                        textDecoration: "underline",
                        color: "purple.500",
                      }}
                    >
                      {post.title}
                    </ChakraLink>
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    {post.date}
                  </Text>
                </Box>
              </Box>
            )
          )}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default BlogSection;
