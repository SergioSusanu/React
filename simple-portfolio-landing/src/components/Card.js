import { Heading, HStack, Image, Text, VStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack bg="white" borderRadius="10px">
      <Image src={imageSrc} alt={title} borderRadius="10px" />
      <VStack px="12px" pb="15px">
        <Heading as="h2" color="black" fontSize="18px" alignSelf="start">
          {title}
        </Heading>
        <Text fontSize="16px" color="GrayText">
          {description}
        </Text>
        <Link alignSelf="start" color="black">
          <span>See more </span>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Link>
      </VStack>
    </VStack>
  );
};

export default Card;
