import ResponsiveNavbar from "./components/Nav";
import Header from "./components/Header";

import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Services from "./components/Services";
const MotionBox = motion(Box);
const App = () => {
  return (
    <>
      <header>
        <ResponsiveNavbar />
      </header>

      <Box
        as="main"
        display="flex"
        flexDirection="column"
        /*  minHeight="100vh" */
      >
        <MotionBox
          bgGradient="linear(to-r, #ffffff, #e9e1fcff)"
          flex="1"
          initial={{ opacity: 0 }} // Start with opacity 0
          animate={{ opacity: 1 }} // Animate to opacity 1
          transition={{ duration: 0.5 }} // Duration of the animation
        >
          <Header />
        </MotionBox>
        <Box mt="auto" bg="purple.50">
          <Services />
        </Box>
        {/* Add the Services component with mt="auto" to push it to the bottom */}
      </Box>

      <footer></footer>
    </>
  );
};

export default App;