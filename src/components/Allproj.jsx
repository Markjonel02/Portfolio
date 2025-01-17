import React from "react";
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
import ltd from "../assets/images/Love to dream.png";
import library from "../assets/images/library.png";
import ndd from "../assets/images/ndd.png";
import mamas from "../assets/images/mamas.png";
import wonderhome from "../assets/images/wonderhome.png";
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
const AllProj = () => {
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 }) || 1;

  const posts = [
    {
      category: "WEB",
      date: "May 10, 2024",
      title: "Pandora",
      image: pandora,
      links: "https://padoras-s-treasure.vercel.app/",
      comments: "No Comments",
    },
    {
      category: "WEB",
      date: "May 10, 2024",
      title: "Freelance site",
      image: freelance,
      links: "https://projecthub-realtimechat.web.app/",
      comments: "No Comments",
    },
    {
      category: "WEB",
      date: "May 10, 2024",
      title: "Sweetpaw",
      image: sweetpaw,
      links: "https://sweetpaw.netlify.app/",
      comments: "No Comments",
    },
    {
      category: "WEB",
      date: "May 10, 2024",
      title: "Strix",
      image: strix,
      links: "https://strix-virid.vercel.app/",
      comments: "No Comments",
    },

    {
      category: "WEB",
      date: "May 10, 2024",
      title: "Online Library",
      image: library,
      links: "",
      comments: "No Comments",
    },
    {
      category: "WEB",
      date: "May 10, 2024",
      title: "NDDTECH",
      image: ndd,
      links: "https://example.com/ndd",
      comments: "No Comments",
    },
    {
      category: "WORDPRESS",
      date: "May 10, 2024",
      title: "Love to dream",
      image: ltd,
      links: "",
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
