import { Box, Text, VStack, Image, HStack } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaWordpress } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BsBootstrapFill } from "react-icons/bs";
import { ImHtmlFive2 } from "react-icons/im";
import { SiChakraui } from "react-icons/si";
// Define the skills data
const skills = [
  { name: "Tailwind Css", icon: <BiLogoTailwindCss />, percentage: 92 },
  { name: "Bootstrap", icon: <BsBootstrapFill />, percentage: 80 },
  { name: "Html5", icon: < ImHtmlFive2/>, percentage: 85 },
  { name: "Chakraui", icon: < />, percentage: 85 },
  { name: "", icon: < />, percentage: 85 },
  { name: "", icon: < />, percentage: 85 },

  { name: "WordPress", icon: <FaWordpress />, percentage: 99 },
  { name: "React", icon: <FaReact />, percentage: 89 },
  { name: "JavaScript", icon: <TbBrandJavascript />, percentage: 93 },
];

export const Skills = ({ skill }) => {
  return (
    <VStack
      w="150px"
      h="150px"
      p="4"
      bg="gray.100"
      borderRadius="lg"
      transition="all 0.3s ease"
      _hover={{ bg: "purple.800", color: "white" }}
    >
      <Image src={skill.icon} boxSize="50px" alt={`${skill.name} icon`} />
      <Text fontSize="2xl" fontWeight="bold">
        {skill.percentage}%
      </Text>
      <Text fontSize="md">{skill.name}</Text>
    </VStack>
  );
};

export default function SkillsCarousel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const skillCards = gsap.utils.toArray(".skill-card");
      const anim = gsap.to(skillCards, {
        xPercent: -100 * (skillCards.length / 2),
        ease: "none",
        duration: 30,
        repeat: -1,
        modifiers: {
          xPercent: gsap.utils.wrap(-100, 0),
        },
      });

      const container = carouselRef.current;

      // Pause animation on hover
      container.addEventListener("mouseenter", () => anim.pause());
      container.addEventListener("mouseleave", () => anim.play());

      return () => {
        container.removeEventListener("mouseenter", () => anim.pause());
        container.removeEventListener("mouseleave", () => anim.play());
        ctx.revert();
      };
    }, carouselRef);
  }, []);

  return (
    <Box ref={carouselRef} overflow="hidden" whiteSpace="nowrap">
      <HStack spacing="8" className="skill-cards-container">
        {skills.concat(skills).map((skill, index) => (
          <Box key={index} className="skill-card">
            <Skills skill={skill} />
          </Box>
        ))}
      </HStack>
    </Box>
  );
}
