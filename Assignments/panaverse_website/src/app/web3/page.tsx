"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  Heading,
  Grid,
  Stack,
  Divider,
  Center
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
            {/* Content section */}
            <Box
              as="section"
              order={{ base: 2, md: 1 }}
              flex="1"
              textAlign={{ base: "center", md: "start" }}
              justifyContent="normal"
            >
              <Text fontWeight={"bold"} fontSize="20px" pt="30px">
                Artificial Intelligence (AI) and Deep Learning Specialization
              </Text>
              <Text
                fontWeight={{ base: "bold", md: "bold", lg: "extrabold" }}
                fontSize={{ base: "3xl", md: "3xl", lg: "5xl" }}
              >
                Artificial Intelligence (AI) and Deep Learning Specialization{" "}
              </Text>
              <Text>
                The AI and Deep Learning specialization focuses on building and
                deploying intelligent APIs using OpenAI models and building
                custom Deep Learning Tensorflow models.
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
              <Text p="10px">
                Artificial intelligence is the simulation of human intelligence
                processes by machines, especially computer systems. The AI and
                Deep Learning Specialization is a foundational program that will
                aid in your comprehension of deep learning's potential,
                difficulties, and effects as well as equip you to take part in
                the creation of cutting-edge AI technology.
              </Text>
              <Text p="10px">
                We will start this course by understanding the fundamentals and
                use cases for AI and move on to building next-gen intelligent
                apps using OpenAI’s powerful models and Next.js 13.
              </Text>
            </Box>
            <Box as="section" order={{ base: 1, md: 2 }} flex="1">
              <Box
                mx={{ base: "30px", md: "auto" }}
                minW={{ base: "600px", md: "600px", lg: "500px", sm: "400px" }}
              >
                <Text mt="20px">
                  We'll conclude the course by learning about basic programming
                  concepts using Python, such as lists, dictionaries, classes,
                  functions, and loops, and practice writing clean and readable
                  code with exercises for each topic. We'll also learn how to
                  make your programs interactive and how to test your code
                  safely before adding it to a project. It is a fast-paced,
                  thorough introduction to programming with Python 3.10+ that
                  will have you writing programs, solving problems, and making
                  things that work in no time. In this quarter we will also
                  learn Git, the distributed version control system. We will
                  also review Git-based GitHub services.
                </Text>
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
            textAlign={{ base: "center" }}
            justifyContent="normal"
          >
            
            <Grid
              templateColumns={{
                base: "repeat(1,1fr)",
                sm: "repeat(1,1fr)",
                md: "repeat(3,1fr)",
              }}
              gap={6}
              maxW={"8xl"}
              mx="auto"
            >
              <Link href="Quater1" target="_blank">
                <Card maxW="sm">
                  <CardBody>
                    <Stack mt="6" spacing="3">
                      <Heading size="md" color="#23918e">
                        Introduction to Machine Learning, Data Science, and AI
                      </Heading>
                      <Link href="https://www.coursera.org/learn/ai-for-everyone">
                        <Text>
                          AI for Everyone :
                          https://www.coursera.org/learn/ai-for-everyone{" "}
                        </Text>
                        <Text>
                          AI for Everyone Quiz in Week 3 Total Questions: 60,
                          Total Time: 75 minutes
                        </Text>
                      </Link>
                    </Stack>
                  </CardBody>
                  <Divider />
                </Card>
              </Link>
              <Link href="Quater2" target="_blank">
                <Card maxW="sm">
                  <CardBody>
                    <Stack mt="6" spacing="3">
                      <Heading size="md" color="#23918e">
                        Building Next-Gen Intelligent Apps with OpenAI’s
                        Powerful Models
                      </Heading>
                      <Text>
                        We will cover GPT-4, ChatGPT, etc. and Next.js 13
                      </Text>
                      <Link
                        color="black"
                        href="https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45"
                      >
                        https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45
                      </Link>
                    </Stack>
                  </CardBody>
                  <Divider />
                </Card>
              </Link>
              <Link href="Quater3" target="_blank">
                <Card maxW="sm">
                  <CardBody>
                    <Stack mt="6" spacing="3">
                      <Heading size="md" color="#23918e">
                        Python Crash Course for TypeScript Developers
                      </Heading>
                      <Text>
                        Python Crash Course, 2nd Edition: A Hands-On,
                        Project-Based Introduction to Programming 2nd Edition
                      </Text>
                      <Link href="https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5">
                        https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5
                      </Link>
                    </Stack>
                  </CardBody>
                  <Divider />
                </Card>
              </Link>
            </Grid>
          </Flex>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
