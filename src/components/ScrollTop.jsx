import { useEffect, useState } from "react";
import { Button, Box } from "@chakra-ui/react";
import { MdArrowUpward } from "react-icons/md";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {visible && (
        <Box position="fixed" bottom="20px" right="20px" zIndex="1000">
          <Button
            size="md"
            bgGradient="linear(to-r, #824cedff,rgb(39, 39, 41))"
            color="white"
            onClick={scrollToTop}
            borderRadius="md" // This makes it more like a box instead of circular
            p={4} // Adjust padding for a better shape
            transition="background 0.8s ease"
            _hover={{
              bgGradient: "linear(to-l, #824cedff, #311961ff)",
              transitionDuration: "0.8s",
            }}
          >
            <MdArrowUpward size={24} />
          </Button>
        </Box>
      )}
    </>
  );
};

export default ScrollTop;
