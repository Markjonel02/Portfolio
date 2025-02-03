import ResponsiveNavbar from "./components/AnimNav";
import Header from "./components/Header";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Services from "./components/Services";
import Works from "./components/Works";
import AnimNav from "./components/Navigation";
import Resume from "./components/Resume";
import SkillsSection from "./components/Skills";
import Contact from "./components/Contact";
import ScrollTop from "./components/ScrollTop";

/* import Aos from "aos"; */

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

        <Box mt="auto" bg="purple.50" data-aos="fade-up">
          <Services />
        </Box>

        <Box mt="auto" data-aos="fade-up">
          <Works />
        </Box>

        <Box mt="auto" data-aos="fade-up">
          <Resume />
        </Box>

        <Box mt="auto" data-aos="fade-up">
          <SkillsSection />
        </Box>

        <Box mt="auto" data-aos="fade-up">
          <Contact />
        </Box>
        <ScrollTop />
      </Box>

      <footer></footer>
    </>
  );
};

export default App;
