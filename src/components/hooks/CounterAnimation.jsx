import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";

const Counter = ({
  target,
  duration = 2000,
  fontSize = "3xl",
  color = "purple.600",
}) => {
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
    </Text>
  );
};

export default Counter;
