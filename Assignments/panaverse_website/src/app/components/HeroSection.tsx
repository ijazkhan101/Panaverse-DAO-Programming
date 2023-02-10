"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Box, Button, Container, Flex, Text, Heading ,Grid} from "@chakra-ui/react";
import CardFunctions from "./Cardfunction";
import Specialized from "./Specialized";
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
                  src={"/images/president.png"}
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
                mt="40px"
              >
                {" "}
                Apply Now
              </Button>
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
              textAlign={{ base: "left", md: "start" }}
              justifyContent="normal"
              padding={{ base: "5", md: "5", lg: "10" }}
            >
              <Text fontWeight={"bold"} fontSize="20px" pb="10px" pt="10px">
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
                minW={{ base: "600px", md: "600px",lg:'600px',sm:'400px' }}
           
              >
                <Image
                  src={"/images/meta.webp"}
                  alt="metaverse"
                  width={1000}
                  height={700}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
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
              textAlign={{ base: "left", md: "start" }}
              justifyContent="normal"
              padding={{ base: "5", md: "5", lg: "10" }}

            >
              <Text
                fontWeight={"bold"}
                fontSize="20px"
                mt="25px"
                pb="10px"
                pt="10px"
                textAlign={{ sm: "left" }}
              >
                Program of Studies:
              </Text>
              <Text>
                This curriculum is intended for beginners who want to learn
                software development from the ground up. The first three
                quarters are shared by all specialties and are dedicated to
                studying Object-Oriented Programming and cutting-edge Full-Stack
                Web 2.0 development. It is going to be a fifteen-month-long
                hybrid program that includes both onsite and online classes and
                is divided into five quarters of 13 weeks each. The emphasis
                will be on hands-on learning by educating students to produce
                projects. To accommodate everyone, courses will be held
                primarily on weekends or after 6:00 p.m. (Pakistan Time) on
                weekdays. It employs a hybrid teaching format, with core onsite
                classes complemented by online Zoom laboratories and recorded
                videos.
              </Text>
            </Box>
            <Box as="section" order={{ base: 2, md: 1 }} flex="1">
              <Box
                maxW={{ base: "150px", md: "50%", lg: "50%" }}
                mx={{ base: "30px", md: "auto" }}
                minW={{ base: "600px", md: "600px",lg:'600px',sm:'400px' }}
              >
                <Image
                  src={"/images/web.jpg"}
                  alt="metaverse"
                  width={1000}
                  height={700}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
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
              order={{ base: 1, md: 2 }}
              textAlign={{ base: "left", md: "start" }}
              justifyContent="normal"
              padding={{ base: "5", md: "5", lg: "10" }}
            >
              <Text
                fontWeight={"bold"}
                fontSize="20px"
                mt="25px"
                pb="10px"
                pt="10px"
                textAlign={{ sm: "left" }}
              >
                The Program in a Nutshell: Earn While You Learn
              </Text>
              <Text>
                In this brand-new type of curriculum, students will learn how to
                make money and boost exports in the classroom and will begin
                doing so within six months of the program's beginning. It
                resembles a cross between a corporate venture and an educational
                project.{" "}
              </Text>
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
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                ></Image>
              </Box>
              <Box />
            </Box>
          </Flex>
          <Box>
            {/* Content section */}
            <Box mx="auto" pt="5" textAlign={"center"}>
              <Heading> Core Courses (Common in All Specializations):</Heading>
              <Text>
                Every participant of the program will start by completing the
                following three core courses:
              </Text>
            </Box>
            <CardFunctions />
          </Box>
          {/* Specialized Task section */}

          <Box>
            {/* Content section */}
            <Box mx="auto" pt="5" textAlign={"center"}>
              <Heading> Specialized Tracks:</Heading>
              <Text>
              After completing the first three quarters the participants will select one or more specializations consisting of two courses each:
              </Text>
            </Box>
            <Specialized />
          </Box>
        </Container>
        {/* last section  : The Outcome for Participants of the Program*/}
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
              textAlign={{ base: "left", md: "start" }}
              justifyContent="normal"
              padding={{ base: "5", md: "5", lg: "5" }}
            >
              <Text
                fontWeight={"bold"}
                fontSize="20px"
                mt="25px"
                pb="10px"
                pt="10px"
                textAlign={{ sm: "left" }}
              >
                The Outcome for Participants of the Program
              </Text>
              <Text>
              The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by expanding software exports.
              </Text>
              <Box>
             <Heading color='black' mt='40px'>Useful blog </Heading>
              <Grid  mb='10px' color='teal.500' mt='40px'>
                <Link   color='teal.500'  href="https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms"> 1.Top 5 'Metaverse' jobs that will rule the future of tech industry</Link>
                <Link  color='teal.500'  href="https://web3.career/web3-salaries/blockchain-developer"> 2.Blockchain Developer Salary - Jun 2022</Link>
                <Link    color='teal.500' href="https://newzoo.com/insights/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022"> 3.Web3 Salaries Soar to $750,000 for Rank-and-File Devs </Link>
                <Link   color='teal.500'  href="https://newzoo.com/insights/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022"> 4.The Metaverse, Blockchain Gaming, and NFTs: Navigating the Internet’s Uncharted Waters </Link>
                <Link    color='teal.500' href="https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/"> 5.How To Become Metaverse Developer: Scope, Skills, and Salary </Link>
              </Grid>
          </Box>
            </Box>
            <Box as="section" order={{ base: 2, md: 1 }} flex="1">
              <Box
                maxW={{ base: "150px", md: "50%", lg: "50%" }}
                mx={{ base: "30px", md: "auto" }}
                width="full" 
                height="full" 
                objectFit="cover" 
                minW={{ base: "600px", md: "600px",lg:'600px',sm:'400px' }}
              >
                <Image
                  src={"/images/sirzia.JPG"}
                  alt="metaverse"
                  width={500}
                  height={700}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                ></Image>
              </Box>
              <Box />
            </Box>
          </Flex>
        </Container>

      {/* last section  : Relevant Information Links:*/}
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
              textAlign={{ base: "left", md: "start" }}
              justifyContent="normal"
              padding={{ base: "5", md: "5", lg: "5" }}
              
            >
              <Text
                fontWeight={"bold"}
                fontSize="20px"
                mt="25px"
                pb="10px"
                pt="10px"
                textAlign={{ base:'center',lg:'center',sm: "left" }}
              >
                The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies.

              </Text>
            
              <Box>
             <Heading color='black' mt='40px'>Relevant Information Links: </Heading>
              <Grid  mb='10px' color='teal.500' mt='40px'>
                <Link   color='teal.500'  href="https://www.piaic.org/"> Admission Website:https://www.piaic.org/</Link>
                <Link  color='teal.500'  href="https://www.panaverse.co/ "> 2.Blockchain Developer Salary - Jun 2022</Link>
                <Link    color='teal.500' href="https://www.facebook.com/groups/panaverse "> Facebook: https://www.facebook.com/groups/panaverse  </Link>
                <Link   color='teal.500'  href="https://www.youtube.com/@panaverse/streams "> YouTube Live Channel: https://www.youtube.com/@panaverse/streams</Link>
                <Link    color='teal.500' href="https://github.com/panaverse"> GitHub Repos: https://github.com/panaverse</Link>
                <Link    color='teal.500' href="https://twitter.com/Panaverse_edu "> Twitter: https://twitter.com/Panaverse_edu </Link>
              </Grid>
          </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
