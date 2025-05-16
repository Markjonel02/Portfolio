import { useState, useEffect, useRef } from "react";
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import AllProj from "./Allproj";
import Web from "./Web";
import Wordpress from "./Wordpress";
// Individual Components for Tabs

const Works = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [sliderStyle, setSliderStyle] = useState({});
  const navRef = useRef(null);

  const navItems = ["All", "React", "Wordpress"];
  const tabComponents = {
    All: <AllProj />,
    React: <Web />,
    Wordpress: <Wordpress />,
  };

  useEffect(() => {
    updateSliderPosition(activeTab);
    window.addEventListener("resize", () => updateSliderPosition(activeTab));
    return () =>
      window.removeEventListener("resize", () =>
        updateSliderPosition(activeTab)
      );
  }, [activeTab]);

  const updateSliderPosition = (tab) => {
    const element = document.getElementById(`tab-${tab}`);
    if (element && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const tabRect = element.getBoundingClientRect();

      setSliderStyle({
        left: `${tabRect.left - navRect.left}px`,
        width: `${tabRect.width}px`,
      });
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt={20}
      mb={20}
      id="works"
    >
      {/* Header */}
      <Text
        fontWeight="bold"
        fontSize={{
          base: "5xl",
          sm: "2xl",
          md: "3xl",
          lg: "4xl",
          xl: "5xl",
        }}
        bgGradient="linear(to-r, #b18af9, #b18af9, hoverColor, hoverColor, hoverColor)"
        bgClip="text"
        textAlign="center"
      >
        My Recent Works
      </Text>

      {/* Navigation Tabs */}
      <Box
        ref={navRef}
        position="relative"
        bg="purple.50"
        p="2"
        borderRadius="full"
        width="fit-content"
        mt="4"
      >
        {/* Sliding background */}
        <Box
          position="absolute"
          bgGradient="linear(to-r, #b18af9, #b18af9, headerColor, hoverColor)"
          borderRadius="full"
          height="8"
          transition="all 0.3s ease-in-out"
          {...sliderStyle}
        />

        {/* Navigation Buttons */}
        <HStack
          spacing="2"
          position="relative"
          zIndex="1"
          alignItems="center"
          justifyContent="center"
        >
          {navItems.map((item) => (
            <Button
              key={item}
              id={`tab-${item}`}
              onClick={() => setActiveTab(item)}
              variant="ghost"
              size="sm"
              px="4"
              py="1"
              borderRadius="full"
              color={activeTab === item ? "white" : "purple.500"}
              _hover={{
                color: activeTab === item ? "white" : "purple.700",
              }}
              _active={{
                bg: "transparent",
              }}
              height="8"
            >
              {item}
            </Button>
          ))}
        </HStack>
      </Box>

      {/* Dynamic Component Rendering */}
      <Box mt="8" width="100%" p="4" bg="purple.100" borderRadius="md">
        {tabComponents[activeTab]}
      </Box>
    </Box>
  );
};

export default Works;
