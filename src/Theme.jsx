import { extendTheme } from "@chakra-ui/react";

const colors = {
  backgroundColor: "#e8deffff",
  headerColor: "#7947deff",
  headerColor2: "#2b1454ff",
  headerColor3: "#874ff7ff",
  subtextColor: "#736c7aff",
  hoverColor: "#502d96ff",
};

const customTheme = extendTheme({
  fonts: {
    heading: `'Sora', sans-serif`, // Apply Sora to headings
    body: `'Sora', sans-serif`, // Apply Sora to body text
  },
  styles: {
    global: {
      body: {
        scrollBehavior: "smooth",
        fontFamily: `'Sora', sans-serif`,
      },
      "::-webkit-scrollbar": {
        width: "8px",
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: "purple.700",
        borderRadius: "5px",
      },
      "::-webkit-scrollbar-track": {
        backgroundColor: "purple.900",
      },
    },
  },

  colors,
});

export default customTheme;
