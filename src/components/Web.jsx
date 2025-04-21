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
import pandora from "../assets/images/pandora.png";
import strix from "../assets/images/strix.png";
import sweetpaw from "../assets/images/sweetpaw.png";
import freelance from "../assets/images/Freelance.png";
import library from "../assets/images/library.png";
import ndd from "../assets/images/ndd.png";
import tlous from "../assets/images/Last of us 2.png";
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

const Web = () => {
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 }) || 1;

  const posts = [
    {
      category: "WEB",
      date: "May 10, 2024",
      title: "Pandora",
      image: pandora,
      links: "",
      comments: "No Comments",
    },
    {
      category: "WEB",
      date: "May 10, 2024",
      title: "Freelance site",
      image: freelance,
      comments: "No Comments",
    },
    {
      category: "WEB",
      date: "May 10, 2024",
      title: "Sweetpaw",
      image: sweetpaw,
      comments: "No Comments",
    },
    {
      category: "WEB",
      date: "May 10, 2024",
      title: "The last of us",
      image: tlous,
      links: "https://the-last-of-us-5n1j.vercel.app/",
      comments: "No Comments",
    },
    {
      category: "WEB",
      date: "May 10, 2024",
      title: "Strix",
      image: strix,
      comments: "No Comments",
    },

    {
      category: "WEB",
      date: "May 10, 2024",
      title: "Online Library",
      image: library,
      comments: "No Comments",
    },
    {
      category: "WEB",
      date: "May 10, 2024",
      title: "NDDTECH",
      image: ndd,
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

export default Web;
