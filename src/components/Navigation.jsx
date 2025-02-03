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
import Logo from "../assets/images/LOGO.svg";

export default function ResponsiveNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isDesktop = useBreakpointValue({ base: false, lg: false, xl: true });

  // Smooth scroll function
  const scrollToSection = (e, sectionId) => {
    e.preventDefault(); // Prevent default link behavior
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      onClose(); // Close drawer when a link is clicked
    }
  };

  return (
    <Box
      py={6}
      color="white"
      bgGradient="linear(to-r, #ffffff 70%, purple.50 100%)"
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
          <img src={Logo} alt="" />
          <Link
            href="mailto:markjoneldaeprelles@gmail.com"
            fontSize={["sm", "md", "lg"]}
            fontWeight="500"
            fontFamily="sora"
            color="purple.700"
            display={{ base: "none", md: "inline", lg: "inline", xl: "inline" }}
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
                  <Box key={text} position="relative">
                    <Link
                      href={`#${text.toLowerCase()}`}
                      onClick={(e) => scrollToSection(e, text.toLowerCase())} // Smooth scroll on click
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
                  onClick={(e) => scrollToSection(e, text.toLowerCase())} // Smooth scroll on click
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
