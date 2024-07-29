import { Heading, VStack, Image, Text, Box, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      bg="white"
      borderRadius="md"
      boxShadow="md"
      overflow="hidden"
      _hover={{ boxShadow: "lg", transform: "translateY(-2px)" }}
      transition="all 0.2s"
    >
      <Image src={imageSrc} alt={title} width="100%" height="200px" objectFit="cover" />
      <VStack p={4} align="start" spacing={2} color = "black">
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text fontSize="sm">{description}</Text>
        <HStack spacing={1}>
          <Text as="span" fontSize="sm">
            See more
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
