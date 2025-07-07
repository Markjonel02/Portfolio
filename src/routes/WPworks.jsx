import {
  Box,
  Image,
  Text,
  Flex,
  Heading,
  SimpleGrid,
  Link as ChakraLink,
} from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import AllProj from "./components/AllProj"; // Adjust path as needed
import { posts } from "./data/Allproject"; // Assuming 'posts' data is correctly imported

// HomePage Component
const HomePage = () => {
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
            "https://via.placeholder.com/1500x800?text=Banner+Image"
          } // Fallback image
          alt="Main Banner"
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

// PostDetail Component (for individual blog posts)
const PostDetail = () => {
  const { postId } = useParams(); // Get the postId from the URL

  // Assuming your 'links' in 'posts' data are unique identifiers,
  // e.g., if a link is "/blog/my-first-post", then postId would be "my-first-post"
  // You might need to adjust how you derive the postId from 'post.links'
  // For simplicity, let's assume post.links directly contains the unique ID part like "/blog/title-of-post"
  const post = posts.find((p) => p.links === `/blog/${postId}`);

  if (!post) {
    return (
      <Box p={6} textAlign="center" pt="100px">
        <Heading>Post Not Found</Heading>
        <Text mt={4}>The post you're looking for doesn't exist.</Text>
        <ChakraLink
          as={Link}
          to="/blog"
          color="purple.500"
          mt={4}
          display="inline-block"
        >
          Go back to all posts
        </ChakraLink>
      </Box>
    );
  }

  return (
    <Box p={6} maxW="1200px" mx="auto" pt="80px" pb="80px">
      {" "}
      {/* Added padding for better spacing */}
      <Image src={post.image} alt={post.title} borderRadius="lg" mb={6} />
      <Heading as="h1" size="xl" mb={4}>
        {post.title}
      </Heading>
      <Flex gap="4" mb="6" fontSize="md" color="gray.600" wrap="wrap">
        {" "}
        {/* Added wrap for responsiveness */}
        <Flex align="center" gap="2">
          <Text>{post.date}</Text>
        </Flex>
        <Flex align="center" gap="2">
          <Text>{post.comments}</Text>
        </Flex>
      </Flex>
      <Text fontSize="lg" lineHeight="tall" color="gray.700">
        {/* This is placeholder text. In a real app, you'd likely have full post content here,
            perhaps fetched from an API or stored in your 'posts' data as a 'content' field. */}
        <Text fontWeight="bold" mb={2}>
          A Deep Dive into {post.title}:
        </Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
        <br />
        <br />
        Further details about this exciting project/topic. This section would
        typically contain more extensive blog content, possibly parsed from
        markdown or rich text. The goal is to provide a comprehensive view of
        the subject matter, including challenges faced, solutions implemented,
        and key takeaways.
        <br />
        <br />
        Feel free to share your thoughts in the comments section below!
      </Text>
      <ChakraLink
        as={Link}
        to="/blog"
        color="purple.500"
        mt={8}
        display="inline-block"
        fontWeight="bold"
      >
        &larr; Back to all posts
      </ChakraLink>
    </Box>
  );
};

