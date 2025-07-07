import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  keyframes,
  Icon,
  VStack,
  Button,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { TiHtml5, TiCss3 } from "react-icons/ti";
import { RiJavascriptFill } from "react-icons/ri";
import { FaWordpress } from "react-icons/fa6"; // Keep import if WordPress skill is still in allSkills
import { FaReact } from "react-icons/fa"; // Keep import if React skill is still in allSkills
import { BsBootstrapFill } from "react-icons/bs";
import { BiLogoTailwindCss, BiLogoRedux } from "react-icons/bi";
import { SiChakraui, SiTypescript } from "react-icons/si";
import { DiNodejsSmall, DiPython, DiGit, DiPhp, DiNpm } from "react-icons/di";
import {
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiMaterialdesign,
} from "react-icons/si";

const scrolling = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-100% / 3)); }
`;

const SkillsSection = () => {
  const allSkills = [
    {
      name: "Html5",
      icon: TiHtml5,
      color: "#E34F26",
      categories: ["All", "Frontend"],
    },
    {
      name: "Css3",
      icon: TiCss3,
      color: "#1572B6",
      categories: ["All", "Frontend"],
    },
    {
      name: "JavaScript",
      icon: RiJavascriptFill,
      color: "#F7DF1E",
      categories: ["All", "Frontend", "Backend"],
    },
    {
      name: "WordPress",
      icon: FaWordpress,
      color: "#21759B",
      categories: ["All", "Backend", "Frontend", "CMS"],
    },
    {
      name: "React",
      icon: FaReact,
      color: "#61DAFB",
      categories: ["All", "Frontend"],
    },
    {
      name: "Bootstrap",
      icon: BsBootstrapFill,
      color: "#7952B3",
      categories: ["All", "Frontend"],
    },
    {
      name: "TailwindCss",
      icon: BiLogoTailwindCss,
      color: "#06B6D4",
      categories: ["All", "Frontend"],
    },
    {
      name: "ChakraUI",
      icon: SiChakraui,
      color: "#319795",
      categories: ["All", "Frontend"],
    },
    {
      name: "Redux",
      icon: BiLogoRedux,
      color: "purple.500",
      categories: ["All", "Frontend"],
    },
    {
      name: "Typescript",
      icon: SiTypescript,
      color: "#3178C6",
      categories: ["All", "Frontend", "Backend"],
    },
    {
      name: "Node.js",
      icon: DiNodejsSmall,
      color: "#339933",
      categories: ["All", "Backend"],
    },
    {
      name: "Python",
      icon: DiPython,
      color: "#3776AB",
      categories: ["All", "Backend"],
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "#47A248",
      categories: ["All", "Backend"],
    },
    {
      name: "MySQL",
      icon: SiMysql,
      color: "#4479A1",
      categories: ["All", "Backend"],
    },
    {
      name: "Firebase",
      icon: SiFirebase,
      color: "#FFCA28",
      categories: ["All", "Backend"],
    },
    {
      name: "Php",
      icon: DiPhp,
      color: "purple.600",
      categories: ["All", "Backend"],
    },

    {
      name: "Git",
      icon: DiGit,
      color: "#F05032",
      categories: ["All", "Tools"],
    },
    {
      name: "Npm",
      icon: DiNpm,
      color: "red.500",
      categories: ["All", "Tools"],
    },
  ];

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSkillsForGrid = allSkills.filter((skill) =>
    skill.categories.includes(activeFilter)
  );

  const repeatedAllSkills = [...allSkills, ...allSkills, ...allSkills];

  return (
    <Box overflow="hidden" py={8} bg="purple.50" mb={20} mt={20} id="skills">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mb={10}
        textAlign="center"
      >
        <Text
          fontSize={{ base: "5xl", sm: "2xl", md: "2xl", lg: "2xl", xl: "5xl" }}
          fontWeight="bold"
          bgGradient="linear(to-r, #b18af9, #b18af9, #4b288b, #352063, #1f143d)"
          bgClip="text"
          zIndex={2}
        >
          My Skills
        </Text>

        <Text fontSize="md" color="gray.600" fontWeight={400}>
          Here are some of the technologies I've worked with
        </Text>
      </Box>
      {/* Animated Skills Section */}
      <Flex
        animation={`${scrolling} 30s linear infinite`}
        _hover={{ animationPlayState: "paused" }}
        width="fit-content"
        gap={10}
        mb={10}
      >
        {repeatedAllSkills.map((skill, index) => (
          <VStack
            textAlign="center"
            key={`animated-${skill.name}-${index}`}
            bg="#f6f2fcff"
            p={8}
            borderRadius="xl"
            width="200px" /* Keep fixed width for animated items */
            transition="all 0.3s ease"
            shadow="md"
            spacing={4}
            mb={10}
            cursor="pointer"
            _hover={{
              bg: "purple.900",
              shadow: "lg",
              color: "white",
            }}
            className="group"
          >
            {" "}
            <Icon
              as={skill.icon}
              boxSize={10}
              color="gray.600"
              filter="grayscale(100%)"
              transition="all 0.3s ease"
              _groupHover={{
                transform: "scale(1.2)",
                filter: "grayscale(0%)",
                color: skill.color,
              }}
            />{" "}
            <Text
              fontSize="lg"
              color="gray.700"
              textAlign="center"
              _groupHover={{
                color: "white",
              }}
            >
              {skill.name}
            </Text>{" "}
          </VStack>
        ))}{" "}
      </Flex>
      {/* Filter Buttons for the Grid */}
      <HStack spacing={2} justify="center" mb={10}>
        <Button
          onClick={() => setActiveFilter("All")}
          colorScheme={activeFilter === "All" ? "purple" : "gray"}
          borderRadius="full"
          px={6}
          py={2}
          fontSize="sm"
          _hover={{ bg: activeFilter === "All" ? "purple.600" : "gray.200" }}
        >
          All
        </Button>
        <Button
          onClick={() => setActiveFilter("Frontend")}
          colorScheme={activeFilter === "Frontend" ? "purple" : "gray"}
          borderRadius="full"
          px={6}
          py={2}
          fontSize="sm"
          _hover={{
            bg: activeFilter === "Frontend" ? "purple.600" : "gray.200",
          }}
        >
          Frontend
        </Button>
        <Button
          onClick={() => setActiveFilter("Backend")}
          colorScheme={activeFilter === "Backend" ? "purple" : "gray"}
          borderRadius="full"
          px={6}
          py={2}
          fontSize="sm"
          _hover={{
            bg: activeFilter === "Backend" ? "purple.600" : "gray.200",
          }}
        >
          Backend
        </Button>
        {/* WordPress and React buttons removed */}
      </HStack>
      {/* Static Skills Grid */}
      <SimpleGrid
        columns={{ base: 2, sm: 2, md: 3, lg: 5 }}
        spacing={4}
        margin={20}
      >
        {filteredSkillsForGrid.map((skill, index) => (
          <VStack
            key={`grid-${skill.name}-${index}`}
            bg="#f6f2fcff"
            p={10} /* Reduced padding for smaller box */
            px={4}
            borderRadius="lg" /* Slightly smaller border radius */
            transition="all 0.3s ease"
            shadow="sm"
            /* Reduced spacing between icon and text */
            cursor="pointer"
            _hover={{
              bg: "purple.900",
              shadow: "lg",
              color: "white",
            }}
            className="group"
          >
            <Icon
              as={skill.icon}
              boxSize={8} /* Smaller icon size */
              color="gray.600"
              filter="grayscale(100%)"
              transition="all 0.3s ease"
              _groupHover={{
                transform: "scale(1.2)",
                filter: "grayscale(0%)",
                color: skill.color,
              }}
            />
            <Text
              fontSize="md" /* Smaller font size for skill name */
              color="gray.700"
              _groupHover={{
                color: "white",
              }}
            >
              {skill.name}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default SkillsSection;
