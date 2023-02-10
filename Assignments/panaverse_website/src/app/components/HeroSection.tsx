"use client";
import React from "react";
import Image from "next/image";
import { Box, Button, Container, Flex, Text, VStack } from "@chakra-ui/react";

export default function HeroSection() {
  return (
    <>
      <Box as="main">
        {/* 1st section */}
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
            {/* Content section */}
            <Box
              as="section"
              order={{ base: 1, md: 2 }}
              flex="1"
              textAlign={{ base: "center", md: "start" }}
              justifyContent="normal"
              pb={{ base: "5", md: "5", lg: "10" }}
            >
              <Text fontWeight={"bold"}>
                Presidential Initiative for Artificial Intelligence and
                Computing (PIAIC)
              </Text>
              <Text
                fontWeight={{ base: "bold", md: "bold", lg: "extrabold" }}
                fontSize={{ base: "3xl", md: "3xl", lg: "5xl" }}
              >
                Certified Web 3.0 and Metaverse Developer
              </Text>
              <Text>
                A One and Quarter Years Panaverse DAO Earn as you Learn Program
                Getting Ready for the Next Generation of the Internet
                Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
                Cloud, Edge, Ambient Computing/IoT, Network Automation, and
                Bioinformatics Technologies
              </Text>
              <Button
                as="a"
                href="https://portal.piaic.org/signup"
                colorScheme={"teal"}
              >
                {" "}
                Apply Now
              </Button>
            </Box>
            <Box as="section" order={{ base: 1, md: 2 }} flex="1">
              <Box
                maxW={{ base: "150px", md: "50%", lg: "50%" }}
                mx={{ base: "0", md: "auto" }}
                minW="150px"
                display={"block"}
              >
                <Image
                  src={"/images/president.png"}
                  alt="president"
                  width={500}
                  height={500}
                ></Image>
              </Box>
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
              as="section"
              flex="1"
              order={{ base: 2, md: 1 }}
              textAlign={{ base: "left", md: "start" ,}}
              justifyContent="normal"
              padding={{ base: "5", md: "5", lg: "10" }}
            >
              <Text fontWeight={"bold"}>
                The Panaverse Community and Syllabus
              </Text>
              <Text>
                The internet is without a doubt the most important technological
                development in human history. Web3, 3D Metaverse, AI, IoT,
                Cloud, and Edge technologies expand the internet as we know it
                by introducing novel features and advancements. Metaverse will
                make use of all aspects of modern technology, including 3D, VR,
                AR, AI, blockchain, cloud and edge computing, voice computing,
                ambient computing, and more.
              </Text>
              <br />
              <Text>
                Citi is the latest Wall Street business to give a positive
                prognosis for Web 3.0 and the Metaverse, terms used to depict a
                future internet vision centered on decentralized technologies
                and virtual worlds. Citi stated in a March 2022 research paper
                that the metaverse economy might have a total addressable market
                of up to $13 trillion and five billion people by 2030.
              </Text>
            </Box>
            <Box as="section" order={{ base: 1, md: 2 }} flex="1">
              <Box
                maxW={{ base: "150px", md: "50%", lg: "50%" }}
                mx={{ base: "30px", md: "auto" }}
                minW="600px"
                
              >
                <Image
                  src={"/images/meta.webp"}
                  alt="metaverse"
                  width={1000}
                  height={700}
                ></Image>
              </Box>
              <Box />
            </Box>

          </Flex>
        </Container>
        {/* 3rd section */}
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
              as="section"
              flex="1"
              order={{ base: 1, md: 2 }}
              textAlign={{ base: "left", md: "start" ,}}
              justifyContent="normal"
              padding={{ base: "5", md: "5", lg: "10" }}
            >
              <Text fontWeight={"semibold"} fontSize="25px" textAlign={{sm:'left'}}>
              Program of Studies:
              </Text>
              <Text>
              This curriculum is intended for beginners who want to learn software development from the ground up. The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.
              </Text>
            </Box>
            <Box as="section" order={{ base: 2, md: 1 }} flex="1">
              <Box
                maxW={{ base: "150px", md: "50%", lg: "50%" }}
                mx={{ base: "30px", md: "auto" }}
                minW="600px"
                
              >
                <Image
                  src={"/images/web.jpg"}
                  alt="metaverse"
                  width={1000}
                  height={700}
                ></Image>
              </Box>
              <Box />
            </Box>
          </Flex>
        </Container>
        {/* 4th section */}
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
              as="section"
              flex="1"
              order={{ base: 2, md: 1 }}
              textAlign={{ base: "left", md: "start" ,}}
              justifyContent="normal"
              padding={{ base: "5", md: "5", lg: "10" }}
              maxW={{ base: "150px", md: "70%", lg: "70%" }}
            >
              <Text fontWeight={"semibold"} fontSize="25px" textAlign={{sm:'left'}}>
              The Program in a Nutshell: Earn While You Learn
              </Text>
              <Text>
              In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project.  </Text>
            </Box>
            <Box as="section" order={{ base: 1, md: 2 }} flex="1">
              <Box
                maxW={{ base: "150px", md: "30%", lg: "30%" }}
                mx={{ base: "30px", md: "auto" }}
                minW="400px"
                
              >
                <Image
                  src={"/images/degree.jpg"}
                  alt="metaverse"
                  width={1000}
                  height={700}
                ></Image>
              </Box>
              <Box />
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
