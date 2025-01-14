import {
  Box,
  Text,
  Image,
  Button,
  Icon,
  keyframes,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaLinkedin,
  FaDribbble,
  FaGithub,
  FaDownload,
} from "react-icons/fa";
import { useState } from "react";

import Mark from "../assets/images/Mark.png";
import Greet from "../assets/images/Greet.svg";
import StatsSection from "./StatsSection";

const Header = () => {
  const shrink = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
    xl: true,
  });

  const [rotate, setRotate] = useState(7);
  const [border, setBorder] = useState("none");

  // Pulse Keyframe for Animation
  const pulse = keyframes`
    0% {
      transform: scale(1);
      opacity: 0.2;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.2;
    }
    100% {
      transform: scale(1);
      opacity: 0.2;
    }
  `;

  // GSAP Scroll Effect for Parallax

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        height="100vh"
        px={{ base: "4%", md: "6%" }}
        paddingX={{ base: "4%", md: "6%" }}
        bgGradient="linear(to-r, #ffffff 70%, purple.50 100%)"
        flexDirection={{ base: "column", md: "row" }}
      >
        {/* Left Side Text Content */}
        <Box flex="1" maxW="xl" mb={{ base: "4", md: "0" }}>
          <Text
            fontSize={{
              base: "3xl",
              sm: "3xl",
              md: "4xl",
              lg: "5xl",
              xl: "5xl",
            }}
            fontWeight="900"
            zIndex={2}
            color="hoverColor"
          >
            I am Mark
          </Text>
          <Text
            fontSize={{
              base: "5xl",
              sm: "5xl",
              md: "5xl",
              lg: "6xl",
              xl: "7xl",
            }}
            fontWeight="bold"
            lineHeight="1.1"
            mt={2}
            bgGradient="linear(to-r, purple.500, purple.700)"
            bgClip="text"
            zIndex={2}
          >
            Web Developer
          </Text>

          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            color="gray.600"
            mt={4}
            zIndex={2}
          >
            a passionate web developer based in Pasig, Philippines. With a
            strong background in WordPress and React, I specialize in creating
            dynamic and responsive websites.
          </Text>

          {/* Buttons Section */}
          <Box
            mt={{ base: "6", md: "8" }}
            display="flex"
            flexDirection={{ base: "column", sm: "row" }}
            gap={4}
            alignItems="center"
          >
            <Button
              variant="outline"
              colorScheme="purple"
              rightIcon={<FaDownload />}
              size="xl"
              onClick={() => window.open("link-to-your-cv", "_blank")}
              borderRadius="full"
              px={{ base: "20px", md: "40px" }}
              py={{ base: "20px", md: "25px" }}
              fontSize={{ base: "lg", md: "xl" }}
              _hover={{ bg: "purple.500", color: "white" }}
            >
              Download CV
            </Button>

            {shrink && (
              <Box
                position="absolute"
                zIndex={0}
                top="10%"
                left="32%"
                transform="translate(-70%, -50%)"
                opacity={0.5}
                animation={`${pulse} 2s infinite`}
              >
                <img src={Greet} alt="" />
              </Box>
            )}

            {/* Social Media Buttons */}
            <Box display="flex" gap={2} justifyContent="center">
              {[FaFacebook, FaLinkedin, FaDribbble, FaGithub].map(
                (IconComponent, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    colorScheme="purple"
                    size="lg"
                    onClick={() =>
                      window.open("https://social-link.com", "_blank")
                    }
                    borderRadius="full"
                    width="50px"
                    height="50px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    _hover={{ bg: "purple.500", color: "white" }}
                  >
                    <Icon as={IconComponent} boxSize={6} />
                  </Button>
                )
              )}
            </Box>
          </Box>
        </Box>

        {/* Right Side Image with Parallax Effect */}
        <Box
          flex="1"
          display="flex"
          justifyContent="center"
          alignItems="center"
          px={{ base: 4, md: 0 }}
          order={{ base: 2, md: 1 }} // Image moves to the bottom for smaller screens
        >
          <Image
            className="parallax-image"
            src={Mark}
            alt="Mark"
            mt={8}
            boxSize={{ base: "350px", md: "300px", lg: "400px", xl: "450px" }} // Adjust the size dynamically
            ml={{ base: 0, md: "60px" }}
            objectFit="cover"
            boxShadow="inset 0 0 10px purple.700"
            borderRadius="20px"
            style={{
              transform: `rotate(${rotate}deg)`,
              transition: "transform 0.2s ease-out",
            }}
            border={border}
            borderColor="purple.300"
            onMouseEnter={() => {
              setRotate(0);
              setBorder("3px solid");
            }}
            onMouseLeave={() => {
              setRotate(7);
              setBorder("none");
            }}
          />
        </Box>
      </Box>
      <Box>
        <StatsSection />
      </Box>
    </>
  );
};

export default Header;
