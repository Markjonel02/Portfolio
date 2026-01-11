import React from "react";
import { Box, Skeleton, SkeletonText, SkeletonCircle, useColorModeValue } from "@chakra-ui/react";

const ImageSkeleton = ({ showText = true }) => {
  const bg = useColorModeValue("white", "gray.800");
  const border = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      bg={bg}
      border="1px solid"
      borderColor={border}
      rounded="md"
      overflow="hidden"
      boxShadow="sm"
      p={4}
      w="full"
    >
      {/* Image placeholder */}
      <Skeleton height="200px" rounded="md" mb={4} />

      {/* Optional avatar + text */}
      {showText && (
        <>
          <SkeletonCircle size="10" mb={3} />
          <SkeletonText noOfLines={2} spacing="3" />
        </>
      )}
    </Box>
  );
};

export default ImageSkeleton;
