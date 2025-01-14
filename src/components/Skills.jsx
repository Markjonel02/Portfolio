import React from "react";
import { Box, Flex, Text, keyframes, Icon, VStack } from "@chakra-ui/react";
import { TiHtml5, TiCss3 } from "react-icons/ti";
import { RiJavascriptFill } from "react-icons/ri";
import { FaWordpress } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiChakraui, SiTypescript } from "react-icons/si";

const scrolling = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-100% / 3)); }
`;

const SkillsSection = () => {
  const skills = [
    { name: "Html5", icon: TiHtml5, color: "#E34F26" },
    { name: "Css3", icon: TiCss3, color: "#1572B6" },
    { name: "JavaScript", icon: RiJavascriptFill, color: "#F7DF1E" },
    { name: "WordPress", icon: FaWordpress, color: "#21759B" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Bootstrap", icon: BsBootstrapFill, color: "#7952B3" },
    { name: "TailwindCss", icon: BiLogoTailwindCss, color: "#06B6D4" },
    { name: "ChakraUI", icon: SiChakraui, color: "#319795" },
    { name: "Typescript", icon: SiTypescript, color: "#3178C6" },
  ];

  const repeatedSkills = [...skills, ...skills, ...skills];

  return (
    <Box overflow="hidden" py={8} bg="gray.50" mb={20} mt={20} id="skills">
      <Box display="flex" flexDirection="column" alignItems="center" mb={10}>
        <Text
          fontSize={{ base: "5xl", sm: "2xl", md: "2xl", lg: "2xl", xl: "5xl" }}
          fontWeight="bold"
          bgGradient="linear(to-r, #b18af9, #b18af9, #4b288b, #352063, #1f143d)"
          bgClip="text" // Clip the background gradient to the text
          zIndex={2}
        >
          My Skills
        </Text>
        <Text fontSize="md" color="gray.600" fontWeight={400}>
          Here are some of the technologies I've worked with
        </Text>
      </Box>
      <Flex
        animation={`${scrolling} 30s linear infinite`}
        _hover={{ animationPlayState: "paused" }}
        width="fit-content"
        gap={10}
      >
        {repeatedSkills.map((skill, index) => (
          <VStack
            key={`${skill.name}-${index}`}
            bg="#f6f2fcff"
            p={8}
            borderRadius="xl"
            width="200px"
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
            />
            <Text
              fontSize="lg"
              color="gray.700"
              _groupHover={{
                color: "white",
              }}
            >
              {skill.name}
            </Text>
          </VStack>
        ))}
      </Flex>
    </Box>
  );
};

export default SkillsSection;
