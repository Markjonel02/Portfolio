// components/PostDetail.jsx
import React from "react";
import {
  Box,
  Image,
  Text,
  Flex,
  Heading,
  Link as ChakraLink,
  Badge, // Import Badge for stacks
  SimpleGrid, // Import SimpleGrid for related projects
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { posts } from "../data/Allproject"; 

const PostDetail = () => {
  const { projectId } = useParams(); // Get the projectId from the URL

  // Find the post based on its 'path' property
  // We need to match the full path, e.g., '/pandora' == '/pandora'
  const post = posts.find((p) => p.path === `/${projectId}`);

  if (!post) {
    return (
      <Box p={6} textAlign="center" pt="100px">
        <Heading>Project Not Found</Heading>
        <Text mt={4}>The project you're looking for doesn't exist.</Text>
        <ChakraLink
          as={Link}
          to="/" // Link back to the /projects page
          color="purple.500"
          mt={4}
          display="inline-block"
        >
          Go back to all projects
        </ChakraLink>
      </Box>
    );
  }

  // Filter out the current project for the "More Projects" section
  const moreProjects = posts
    .filter((p) => p.path !== `/${projectId}`)
    .slice(0, 12); // Get up to 4 other projects

  return (
    <Box p={6} maxW="1200px" mx="auto" pt="80px" pb="80px">
      <ChakraLink
        as={Link}
        to="/" // Link back to the main projects listing
        color="purple.500"
        mb={5} // Increased margin top for separation
        display="inline-block"
        fontWeight="bold"
      >
        &larr; Back to all projects
      </ChakraLink>
      <Image src={post.image} alt={post.title} borderRadius="lg" mb={6} />
      <Heading as="h1" size="xl" mb={4}>
        {post.title}
      </Heading>
      <Text mb="6" fontSize="md" color="purple.500">
        {post.links}
      </Text>
      <Flex gap="4" mb="6" fontSize="md" color="gray.600" wrap="wrap">
        <Flex align="center" gap="2">
          <Text>{post.date}</Text>
        </Flex>
        <Flex align="center" gap="2">
          <Text>{post.comments}</Text>
        </Flex>
      </Flex>

      {/* Project Description */}
      <Text fontSize="lg" lineHeight="tall" color="gray.700" mb={6}>
        <Text fontWeight="bold" mb={2}>
          Project Overview:
        </Text>
        {post.desc}
      </Text>

      {/* Technologies Used (Stacks) */}
      {post.stacks && post.stacks.length > 0 && (
        <Box mb={8}>
          <Heading as="h3" size="md" mb={3}>
            Technologies Used:
          </Heading>
          <Flex wrap="wrap" gap={2}>
            {post.stacks.map((stack, index) => (
              <Badge
                key={index}
                colorScheme="purple"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="sm"
              >
                {stack}
              </Badge>
            ))}
          </Flex>
        </Box>
      )}

      {/* Live Site Link */}
      {post.externalUrl && (
        <ChakraLink
          href={post.externalUrl}
          isExternal
          color="white"
          bg="purple.600"
          px={6}
          py={3}
          borderRadius="full"
          fontWeight="bold"
          _hover={{ bg: "purple.700", textDecoration: "none" }}
          transition="background-color 0.3s ease"
          display="inline-block"
          mb={8} // Margin below the button
        >
          Visit Live Site &rarr;
        </ChakraLink>
      )}

      {/* More Projects Section */}
      {moreProjects.length > 0 && (
        <Box mt={12}>
          <Heading as="h2" size="xl" textAlign="center" mb={8}>
            More Projects
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            {" "}
            {/* 4 columns on desktop */}
            {moreProjects.map((proj, index) => (
              <Box
                key={index}
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                _hover={{ boxShadow: "lg", transform: "scale(1.05)" }} // Scale effect
                transition="all 0.3s ease-in-out" // Smooth transition
                cursor="pointer"
              >
                <ChakraLink
                  as={Link}
                  to={proj.path}
                  _hover={{ textDecoration: "none" }}
                >
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    objectFit="cover"
                    height="180px"
                    width="100%"
                  />
                  <Box p={4}>
                    <Text fontSize="lg" fontWeight="semibold" mb={1}>
                      {proj.title}
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      {proj.category} - {proj.date}
                    </Text>
                  </Box>
                </ChakraLink>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      )}

      <ChakraLink
        as={Link}
        to="/" // Link back to the main projects listing
        color="purple.500"
        mt={12} // Increased margin top for separation
        display="inline-block"
        fontWeight="bold"
      >
        &larr; Back to all projects
      </ChakraLink>
    </Box>
  );
};

export default PostDetail;
