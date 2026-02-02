import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";

// 🔹 Reusable Counter Component
const Counter = ({ target, suffix = "", duration = 2000, fontSize, color }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 50); // step size
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <Text fontSize={fontSize} fontWeight="bold" color={color}>
      {count}
      {suffix}
    </Text>
  );
};

export default function StatsSection() {
  const fontSize = useBreakpointValue({ base: "2xl", md: "4xl", lg: "5xl" });
  const labelSize = useBreakpointValue({ base: "md", md: "lg", lg: "xl" });

  const stats = [
    { value: 2, label: "Years of Experience" },
    { value: 50, label: "Project Completed", suffix: "+" },
    { value: 5, label: "Happy Clients" },
  ];

  return (
    <Flex
      justify="space-around"
      align="center"
      wrap="wrap"
      py={8}
      bgGradient="linear(to-r, white 70%, purple.50 100%)"
    >
      {stats.map((stat, index) => (
        <Box key={index} textAlign="center">
          <Counter
            target={stat.value}
            suffix={stat.suffix || ""}
            fontSize={fontSize}
            color="purple.500"
          />
          <Text fontSize={labelSize} color="purple.500">
            {stat.label}
          </Text>
        </Box>
      ))}
    </Flex>
  );
}
