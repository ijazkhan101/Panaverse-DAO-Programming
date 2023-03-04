"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";

import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  Heading,
  Grid,
} from "@chakra-ui/react";
export default function Home() {
  return (
    <>
      <Box as="main">
        {/* 1st section */}
        <Header />
        <Container maxW={"8xl"}>
          <Flex
            flexDir={{ base: "column", md: "row" }}
            align="center"
            maxW={"1440px"}
            mx="auto"
            pt={{ base: "5", md: "10" }}
            px={{ base: "10", md: "20" }}
            textAlign={{ base: "center" }}
            justifyContent="normal"
          >
            <Box
              as="section"
              order={{ base: 2, md: 1 }}
              flex="1"
              maxW={{ base: "150px", md: "30%", lg: "30%" }}
            >
              <Box
                maxW={{ base: "150px", md: "60%", lg: "60%" }}
                mx={{ base: "0", md: "auto" }}
                minW="100px"
                display={"block"}
              >
                <Image
                  src={"/images/PanaverseLogo.png"}
                  alt="president"
                  width={500}
                  height={500}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                ></Image>
              </Box>
            </Box>
            {/* Content section */}
            <Box
              as="section"
              order={{ base: 2, md: 1 }}
              flex="1"
              textAlign={{ base: "center", md: "start" }}
              justifyContent="normal"
              pb={{ base: "5", md: "5", lg: "10" }}
            >
              <Text fontWeight={"bold"} fontSize="20px" pt="30px">
              Panaverse mission is to train Cutting-Edge Technologies Developers in Pakistan.
              </Text>
              <Text
                fontWeight={{ base: "bold", md: "bold", lg: "extrabold" }}
                fontSize={{ base: "3xl", md: "3xl", lg: "5xl" }}
              >
                Panaverse
              </Text>
            

              <Text mb="10px">
              The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.
              </Text>
            </Box>
          </Flex>
        </Container>
        {/*2nd section */}

        <Container maxW={"8xl"}>
          <Flex
            flexDir={{ base: "column", md: "row" }}
            align="center"
            maxW={"1440px"}
            mx="auto"
            pt={{ base: "5", md: "10" }}
            px={{ base: "10", md: "20" }}
          >
            {/* Content section */}
            <Box
              mx={{ base: "30px", md: "auto" }}
              minW={{ base: "600px", md: "600px", lg: "500px", sm: "400px" }}
            >
              <VStack spacing={8}>
                <Heading>Contact Us</Heading>
                <FormControl id="name" isRequired>
                  <FormLabel>Your Name</FormLabel>
                  <Input type="text" />
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel>Your Email</FormLabel>
                  <Input type="email" />
                </FormControl>
                <FormControl id="message" isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea />
                </FormControl>
                <Button colorScheme="blue">Submit</Button>
              </VStack>
            </Box>
            <Box as="section" order={{ base: 1, md: 2 }} flex="1">
              <Box ml={"40px"}>
                <Heading p="10px" mt="-230px">
                  Contact US for your Queries
                  <br />
                  Enroll Now
                </Heading>
                <Text p="10px">
                  Certified Web 3.0 and Metaverse Developer: A Nationwide
                  Program in Karachi, Lahore, Islamabad, and Peshawar
                </Text>
                <Heading fontSize={"20px"}>
                  PIAIC Helpline
                  <br />
                  +92-308-2220203 (WhatsApp as well)
                </Heading>
                <Heading fontSize={"20px"}>
                Panaverse DAO Membership Form (Quarter 2)
                </Heading>
                <Link href={'https://docs.google.com/forms/d/e/1FAIpQLSdE4PQnyd3pv1lAFG9JeIb5l4ecIMiRWkZsCtc9E2sJ6wR-4A/viewform'}>Quarter 2 link </Link>
              </Box>
              <Box />
            </Box>
          </Flex>
        </Container>
        {/* 3rd section */}
      </Box>
      <Footer />
    </>
  );
}
