import Image from "next/image";
import {
  Box,
  Text,
  Heading,
  Stack,
  Divider,
  ButtonGroup,
  Button,
  Flex,
  Grid,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function Specialized() {
  return (
    <>
     <Flex
        flexDir={{ base: "column", md: "row" }}
        align="center"
        maxW={"1440px"}
        mx="auto"
        pt={{ base: "5", md: "10" }}
        px={{ base: "10", md: "20" }}
      >

        <Grid 
            templateColumns={{
                base:'repeat(1,1fr)',
                sm:'repeat(1,1fr)',
                md:'repeat(3,1fr)',
            }}
            gap={6}
            maxW={'8xl'}
            mx='auto'
        >
          <Card maxW="sm">
            <CardBody>
              <Image
                src={"/images/meta.webp"}
                alt="metaverse"
                width={350}
                height={60}
                
              ></Image>
              <Stack mt="6" spacing="3">
                <Heading size="md">Web 3.0 (Blockchain) and Metaverse Specialization</Heading>
              
              </Stack>
            </CardBody>
            <Divider />
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src={"/images/meta.webp"}
                alt="metaverse"
                width={350}
                height={60}
              ></Image>
              <Stack mt="6" spacing="3">
                <Heading size="md">Artificial Intelligence (AI) and Deep Learning Specialization</Heading>
          
              </Stack>
            </CardBody>
            <Divider />
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src={"/images/meta.webp"}
                alt="metaverse"
                width={350}
                height={60}
              ></Image>
              <Stack mt="6" spacing="3">
                <Heading size="md">Cloud-Native Computing Specialization</Heading>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        </Grid>
        
      </Flex>

      {/* 2nd section  */}
      <Flex
        flexDir={{ base: "column", md: "row" }}
        align="center"
        maxW={"1440px"}
        mx="auto"
        pt={{ base: "5", md: "10" }}
        px={{ base: "10", md: "20" }}
      >

        <Grid 
            templateColumns={{
                base:'repeat(1,1fr)',
                sm:'repeat(1,1fr)',
                md:'repeat(3,1fr)',
            }}
            gap={6}
            maxW={'8xl'}
            mx='auto'
        >
          <Card maxW="sm">
            <CardBody>
              <Image
                src={"/images/meta.webp"}
                alt="metaverse"
                width={350}
                height={60}
                
              ></Image>
              <Stack mt="6" spacing="3">
                <Heading size="md">Ambient Computing and IoT Specialization</Heading>
              
              </Stack>
            </CardBody>
            <Divider />
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src={"/images/meta.webp"}
                alt="metaverse"
                width={350}
                height={60}
              ></Image>
              <Stack mt="6" spacing="3">
                <Heading size="md">Genomics and Bioinformatics Specialization</Heading>
          
              </Stack>
            </CardBody>
            <Divider />
          </Card>
          <Link href='https://panaverse-mk.vercel.app/'>
          <Card maxW="sm">
            <CardBody>
              <Image
                src={"/images/meta.webp"}
                alt="metaverse"
                width={350}
                height={60}
              ></Image>
              <Stack mt="6" spacing="3">
                <Heading size="md">Network Programmability and Automation Specialization</Heading>
              </Stack>
            </CardBody>
            <Divider />
          </Card> 
          </Link>
        </Grid>
        
      </Flex>
    </>
  );
}
