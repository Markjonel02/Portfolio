// App.jsx
import React, { lazy, Suspense } from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Routes, Route, Outlet } from "react-router-dom";

/* Lazy load core components */
const ResponsiveNavbar = lazy(() => import("./components/AnimNav")); // Assuming AnimNav is ResponsiveNavbar
const AnimNav = lazy(() => import("./components/Navigation")); // Assuming Navigation is the main desktop nav
const Header = lazy(() => import("./components/Header"));
const Services = lazy(() => import("./components/Services"));
const Works = lazy(() => import("./components/Works"));
const Resume = lazy(() => import("./components/Resume"));
const SkillsSection = lazy(() => import("./components/Skills"));
const Contact = lazy(() => import("./components/Contact"));
const ScrollTop = lazy(() => import("./components/ScrollTop"));

/* Lazy load project components */
/*  const ProjectsPage = lazy(() => import("./components/ProjectsPage")); // New component for banner + AllProj */
const PostDetail = lazy(() => import("./components/PostDetail")); // Re-used for individual project details

const MotionBox = motion(Box);

// Loading Spinner Component for Suspense fallback
const LoadingSpinner = () => (
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
);

// MainLayout Component: Contains common elements like Navbar and ScrollTop
const MainLayout = () => {
  return (
    <>
      <header>
        <Suspense fallback={null}>
          {" "}
          {/* Fallback for navigation components */}
          <AnimNav />
          <ResponsiveNavbar />
        </Suspense>
      </header>
      <Box as="main" display="flex" flexDirection="column" minHeight="100vh">
        {/* Outlet renders the matched child route component */}
        <Outlet />
      </Box>
      <Suspense fallback={null}>
        {" "}
        {/* Fallback for ScrollTop if it's lazy loaded */}
        <ScrollTop />
      </Suspense>
      <footer></footer>
    </>
  );
};

// HomePage Component: Your main portfolio page with sections
const HomePage = () => {
  return (
    <>
      <MotionBox
        bgGradient="linear(to-r, #ffffff, #e9e1fcff)"
        flex="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
      </MotionBox>

      <Box bg="purple.50" data-aos="fade-up" py={8}>
        {" "}
        {/* Added py for vertical padding */}
        <Services />
      </Box>

      <Box data-aos="fade-up" py={8}>
        <Works />
      </Box>

      <Box data-aos="fade-up" py={8}>
        <Resume />
      </Box>

      <Box data-aos="fade-up" py={8}>
        <SkillsSection />
      </Box>

      <Box data-aos="fade-up" py={8}>
        <Contact />
      </Box>
    </>
  );
};

// Main App Component with Routes
const App = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* MainLayout wraps all routes that share the same header/footer/scrollTop */}
        <Route path="/" element={<MainLayout />}>
          {/* Default route for the homepage/portfolio */}
          <Route index element={<HomePage />} />

          {/* Dedicated route for the projects listing page */}

          <Route path=":projectId" element={<PostDetail />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
