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

import Mark from "../assets/images/500_RELLOS_MARK_JONEL13092.png";
import Greet from "../assets/images/Greet.svg";
import StatsSection from "./StatsSection";
import pdf from "../assets/pdf/Resume- Mark Jonel Relles.pdf";
const Header = () => {
  const socialLinks = [
    { icon: FaFacebook, link: "https://www.facebook.com/Markjonel02" },
    { icon: FaLinkedin, link: "https://linkedin.com/in/yourprofile" },
    { icon: FaGithub, link: "https://github.com/Markjonel02" },
  ];
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
            bgGradient="linear(to-r, purple.700,purple.500,purple.300)"
            bgClip="text"
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
            bgGradient="linear(to-r, purple.300, purple.500,purple.700,purple.800)"
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
            strong background in WordPress and React, Node Js, Express js, and
            Mongodb, I specialize in creating dynamic and responsive websites.
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
              borderRadius="full"
              px={{ base: "20px", md: "40px" }}
              py={{ base: "20px", md: "25px" }}
              fontSize={{ base: "lg", md: "xl" }}
              _hover={{ bg: "purple.500", color: "white" }}
            >
              <a href={pdf} download="Resume-Relles Markjondel D. ">
                Download CV
              </a>
            </Button>

            {shrink && (
              <Box
                position="absolute"
                zIndex={0}
                top="5%"
                left="45%"
                transform="translate(-70%, -50%)"
                opacity={0.5}
                animation={`${pulse} 2s infinite`}
              >
                <img
                  src={Greet}
                  alt=""
                  width={{ base: "300px", lg: "500px" }}
                  height="auto"
                />
              </Box>
            )}

            {/* Social Media Buttons */}
            <Box display="flex" gap={2} justifyContent="center">
              {socialLinks.map(({ icon: IconComponent, link }, index) => (
                <Button
                  key={index}
                  variant="outline"
                  colorScheme="purple"
                  size="lg"
                  onClick={() => window.open(link, "_blank")}
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
              ))}
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
          data-aos="fade-left"
          data-aos-durations="300ms"
        >
          <Image
            className="parallax-image"
            src={Mark}
            alt="Mark"
            mt={0}
            mb={{ base: 10, md: 0 }} // Adds bottom margin only on smaller screens
            boxSize={{
              base: "280px",
              sm: "320px",
              md: "300px",
              lg: "400px",
              xl: "600px",
            }} // Adjusts size dynamically
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
