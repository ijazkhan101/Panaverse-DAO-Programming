import React from "react";
import { ChakraProvider, Heading, Text, Box } from "@chakra-ui/react";
import Head from "./head";

export default function Header() {
  return (
    <>
    <Box
      textAlign={{ base: "center",md:'left' , lg:'center' }}
      pl='10px'
      bg="black"
      pt="20px"
      pb="50px"
      color="white"
    >
      <Heading> Panaverse DAO (Quarter 2)</Heading>
      <Heading> 3A: Price UI with Next.js 13/Chakra UI </Heading>
     
      <Heading> Name : Ijaz Ullah</Heading>
      <Text pt="10px">
      Roll No	PIAIC181277 and Batch 37
      </Text>
    </Box>
    <Box
      textAlign={{ base: "center",md:'left' , lg:'center' }}
      pl='10px'
      bg="#6B46C1"
      pt="90px"
      pb="250px"
      color="white"
    >
      <Heading> Simple pricing for your business</Heading>
      <Text pt="10px">
        Plans that are carefully crafted to suit your business.
      </Text>
    </Box>
    </>
   
  );
}
