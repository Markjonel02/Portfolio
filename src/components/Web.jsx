import { useState } from "react";
import {
  Box,
  Grid,
  Image,
  Text,
  Badge,
  Flex,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { CalendarIcon, ChatIcon } from "@chakra-ui/icons";
import { posts } from "../data/Allproject";

// BlogCard Component

const BlogCard = ({ post }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Box
      position="relative"
      borderRadius="xl"
      overflow="hidden"
      transition="transform 0.3s"
      _hover={{ transform: "scale(1.02)" }}
    >
      <Box
        position="relative"
        paddingTop="75%"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        <Image
          src={post.image}
          alt={post.title}
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          objectFit="cover"
        />

        {/* Badge */}
        <Badge
          position="absolute"
          top="4"
          left="4"
          bg="purple.500"
          color="white"
          px="4"
          py="1.5"
          borderRadius="full"
          fontSize="sm"
          fontWeight="medium"
        >
          {post.category}
        </Badge>

        {/* Fade-Up Box */}
        <Box
          position="absolute"
          bottom="4"
          left="4"
          right="4"
          bg="purple.500"
          color="white"
          p="4"
          borderRadius="xl"
          opacity={isHovered ? 1 : 0} // Show on hover
          transform={isHovered ? "translateY(0px)" : "translateY(50px)"} // Start below image
          transition="opacity 0.5s ease-in-out, transform 0.5s ease-in-out" // Smooth animation
        >
          <Flex gap="4" mb="2" fontSize="sm">
            <Flex align="center" gap="2">
              <Icon as={CalendarIcon} w="4" h="4" />
              <Text>{post.date}</Text>
            </Flex>
            <Flex align="center" gap="2">
              <Icon as={ChatIcon} w="4" h="4" />
              <Text>{post.comments}</Text>
            </Flex>
          </Flex>
          <Text fontSize={["md", "lg", "xl"]} fontWeight="bold">
            <a href={post.links} target="_blank" rel="noopener noreferrer">
              {post.title}
            </a>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

// AllProj Component
const Web = () => {
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 }) || 1;

  return (
    <Grid
      templateColumns={`repeat(${columns}, 1fr)`}
      gap={6}
      p={6}
      mx="auto"
      maxW="1200px"
      className="proj"
    >
      {posts
        .filter((post) => post.category.toUpperCase() === "WEB")
        .map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
    </Grid>
  );
};

export default Web;
