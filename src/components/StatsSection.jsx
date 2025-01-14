import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

export default function StatsSection() {
  const fontSize = useBreakpointValue({ base: "2xl", md: "4xl", lg: "5xl" });
  const labelSize = useBreakpointValue({ base: "md", md: "lg", lg: "xl" });

  const stats = [
    { value: "2", label: "Years of Experience" },
    { value: "50+", label: "Project Completed" },
    { value: "5", label: "Happy Clients" },
  
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
        <Box key={index} textAlign="center" m={4}>
          <Text fontSize={fontSize} fontWeight="bold" color="purple.500">
            {stat.value}
          </Text>
          <Text fontSize={labelSize} color="purple.500">
            {stat.label}
          </Text>
        </Box>
      ))}
    </Flex>
  );
}
