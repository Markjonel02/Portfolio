import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useBreakpointValue,
  Stack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Logo from "../assets/images/LOGO.svg";

export default function AnimNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isDesktop = useBreakpointValue({ base: false, lg: false, xl: true });
  const navbarRef = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const scrollToSection = (e, sectionId) => {
    e.preventDefault(); // Prevent default link behavior
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      onClose(); // Close drawer when a link is clicked
    }
  };
  // Scroll event to check when reaching 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !hasScrolled) {
        setHasScrolled(true);
      } else if (window.scrollY <= 300 && hasScrolled) {
        setHasScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  // GSAP animation for smooth reveal
  useEffect(() => {
    if (hasScrolled) {
      gsap.to(navbarRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    } else {
      gsap.to(navbarRef.current, {
        opacity: 0,
        y: -50,
        duration: 0.6,
        ease: "power3.out",
      });
    }
  }, [hasScrolled]);

  return (
    <Box
      ref={navbarRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      opacity={0} // Start hidden
      transform="translateY(-50px)" // Initial upward position
      bgGradient="linear(to-r, #ffffff 70%, purple.50 100%)"
      boxShadow={hasScrolled ? "md" : "none"} // Shadow when scrolled
      zIndex="sticky"
      py={6}
      color="white"
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        maxW="1440px"
        mx="auto"
        px={[4, 8, 12]}
      >
        {/* Left Side: Logo and Email */}
        <Flex align="center">
          <img src={Logo} alt="Logo" />
          <Link
            href="mailto:markjoneldaeprelles@gmail.com"
            fontSize={["sm", "md", "lg"]}
            fontWeight="500"
            fontFamily="sora"
            color="purple.700"
            display={{ base: "none", md: "inline" }}
            mr={16}
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
          >
            markjoneldaeprelles@gmail.com
          </Link>
        </Flex>

        {/* Right Side: Links and CTA Button */}
        <HStack spacing={6}>
          {isDesktop ? (
            <HStack spacing={[4, 6, 8]} as="nav">
              {["Services", "Works", "Resume", "Skills", "Contact"].map(
                (text) => (
                  <Box
                    key={text}
                    position="relative"
                    _hover={{
                      "&:after": {
                        transform: "scaleX(1)",
                      },
                    }}
                    _after={{
                      content: '""',
                      position: "absolute",
                      width: "100%",
                      height: "2px",
                      bottom: "-2px",
                      left: 0,
                      backgroundColor: "#6c63ff",
                      transform: "scaleX(0)",
                      transformOrigin: "left",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <Link
                      href={`#${text.toLowerCase()}`}
                      onClick={(e) => scrollToSection(e, text.toLowerCase())}
                      fontSize={["sm", "md", "lg"]}
                      fontWeight={500}
                      color="purple.700"
                      textDecoration="none"
                      _hover={{ textDecoration: "none" }}
                    >
                      {text}
                    </Link>
                  </Box>
                )
              )}
            </HStack>
          ) : (
            <IconButton
              width="60px"
              height="60px"
              icon={<HamburgerIcon />}
              aria-label="Open Menu"
              onClick={onOpen}
              variant="outline"
              color="#6c63ff"
              fontSize="2xl"
              borderRadius="full"
            />
          )}

          {/* CTA Button */}
          {isDesktop && (
            <Button
              size="md"
              bgGradient="linear(to-r, #824cedff, #311961ff)"
              color="white"
              borderRadius="full"
              px={[6, 8, 10]}
              py={[4, 6, 8]}
              transition="background 0.8s ease"
              as="a"
              href="#contact"
              _hover={{
                bgGradient: "linear(to-l, #824cedff, #311961ff)",
                transitionDuration: "0.8s",
              }}
            >
              Hire me!
            </Button>
          )}
        </HStack>
      </Flex>

      {/* Mobile Drawer */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="white">
          <DrawerCloseButton color="#6c63ff" />
          <DrawerHeader borderBottomWidth="1px" color="#6c63ff">
            Menu
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              {[
                "Services",
                "Works",
                "Resume",
                "Skills",
                "Testimonials",
                "Contact",
              ].map((text) => (
                <Link
                  key={text}
                  href={`#${text.toLowerCase()}`}
                  onClick={onClose}
                  fontSize="lg"
                  color="#6c63ff"
                  textDecoration="none"
                  _hover={{ textDecoration: "none", color: "hoverColor" }}
                >
                  {text}
                </Link>
              ))}
              <Button
                bgGradient="linear(to-r, #824cedff, #311961ff)"
                color="white"
                _hover={{ bg: "#6c63ff" }}
                onClick={onClose}
                w="full"
                mt={4}
                as="a"
                href="tel:09260447220"
              >
                Hire me!
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
