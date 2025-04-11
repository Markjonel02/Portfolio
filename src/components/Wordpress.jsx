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
import ltd from "../assets/images/Love to dream.png";
import mamas from "../assets/images/mamas.png";
import wonderhome from "../assets/images/wonderhome.png";
import Bsi from "../assets/images/Bullseye.png";
// BlogCard Component
const BlogCard = ({ post }) => {
  return (
    <Box
      position="relative"
      borderRadius="xl"
      overflow="hidden"
      transition="transform 0.3s"
      _hover={{ transform: "scale(1.02)" }}
    >
      <Box position="relative" paddingTop="75%">
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
        <Box
          position="absolute"
          bottom="4"
          left="4"
          right="4"
          bg="purple.500"
          color="white"
          p="4"
          borderRadius="xl"
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
            <a href="">{post.title}</a>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
const AllProj = () => {
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 }) || 1;

  const posts = [
    {
      category: "WORDPRESS",
      date: "May 10, 2024",
      title: "Love to dream",
      image: ltd,
      links: "https://lovetodream.ph/",
      comments: "No Comments",
    },
    {
      category: "WORDPRESS",
      date: "May 10, 2024",
      title: "MAMAS & PAPAS",
      image: mamas,
      links: "https://mamasandpapas.ph/",
      comments: "No Comments",
    },
    {
      category: "WORDPRESS",
      date: "May 10, 2024",
      title: "WONDERHOME PH",
      image: wonderhome,
      links: "https://wonderhomenaturals.com/",
      comments: "No Comments",
    },
    {
      category: "WORDPRESS",
      date: "May 10, 2024",
      title: "Bullseye Solutions Inc.",
      image: Bsi,
      links: "https://bullseyeph.com/",
      comments: "No Comments",
    },
  ];

  return (
    <Grid
      templateColumns={`repeat(${columns}, 1fr)`}
      gap={6}
      p={6}
      mx="auto"
      maxW="1200px"
      className="proj"
    >
      {posts.map((post, index) => (
        <BlogCard key={index} post={post} />
      ))}
    </Grid>
  );
};

export default AllProj;
