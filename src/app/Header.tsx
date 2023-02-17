import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
export default function Header() {
  return (
    <Box textAlign="center" bg="#6B46C1" color="white" pt="90px" pb="250px">
      <Heading>Simple Pricing for your business</Heading>
      <Text pt="10px">Plans that are carefully carfted to suits your business.</Text>
    </Box>
  );
}
