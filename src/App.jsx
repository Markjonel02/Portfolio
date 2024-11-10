import ResponsiveNavbar from "./components/AnimNav";
import Header from "./components/Header";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Services from "./components/Services";
import Works from "./components/Works";
import AnimNav from "./components/Navigation";
import Resume from "./components/Resume";
const MotionBox = motion(Box);
const App = () => {
  return (
    <>
      <header>
        <AnimNav />
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
        </MotionBox>
        <Box mt="auto" bg="purple.50">
          <Services />
        </Box>
        {/* Add the Services component with mt="auto" to push it to the bottom */}
        <Box mt="auto">
          <Works />
        </Box>
        <Box mt="auto">
          <Resume />
        </Box>
      </Box>

      <footer></footer>
    </>
  );
};

export default App;
