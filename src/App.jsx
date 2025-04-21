import React, { lazy, Suspense,memo } from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ScrollTop from "./components/ScrollTop";

/* Lazy load components */
const ResponsiveNavbar = lazy(() => import("./components/AnimNav"));
const Header = lazy(() => import("./components/Header"));
const Services = lazy(() => import("./components/Services"));
const Works = lazy(() => import("./components/Works"));
const AnimNav = lazy(() => import("./components/Navigation"));
const Resume = lazy(() => import("./components/Resume"));
const SkillsSection = lazy(() => import("./components/Skills"));
const Contact = lazy(() => import("./components/Contact"));

const MotionBox = motion(Box);

const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <>
            <div
              id="wifi-loader"
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <svg className="circle-outer" viewBox="0 0 86 86">
                <circle className="back" cx="43" cy="43" r="40"></circle>
                <circle className="front" cx="43" cy="43" r="40"></circle>
                <circle className="new" cx="43" cy="43" r="40"></circle>
              </svg>
              <svg className="circle-middle" viewBox="0 0 60 60">
                <circle className="back" cx="30" cy="30" r="27"></circle>
                <circle className="front" cx="30" cy="30" r="27"></circle>
              </svg>
              <svg className="circle-inner" viewBox="0 0 34 34">
                <circle className="back" cx="17" cy="17" r="14"></circle>
                <circle className="front" cx="17" cy="17" r="14"></circle>
              </svg>
              <div
                className="text"
                data-text="LOADING..."
                style={{
                  marginTop: "20px",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              ></div>
            </div>
          </>
        }
      >
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
      </Suspense>

      <footer></footer>
    </>
  );
};

export default App;
