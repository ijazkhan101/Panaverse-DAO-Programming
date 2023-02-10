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

export default function CardFunctions() {
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
                src={"/images/typescript.jpeg"}
                alt="metaverse"
                width={200}
                height={60}
                
              ></Image>
              <Stack mt="6" spacing="3">
                <Heading size="md">Quarter I (Core)</Heading>
                <Text>
                  CS-101: Object-Oriented Programming using TypeScript
                </Text>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src={"/images/next.png"}
                alt="metaverse"
                width={300}
                height={60}
              ></Image>
              <Stack mt="6" spacing="3">
                <Heading size="md">Quarter II (Core)</Heading>
                <Text>
                W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform
                </Text>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src={"/images/fullstack.png"}
                alt="metaverse"
                width={250}
                height={60}
              ></Image>
              <Stack mt="6" spacing="3">
                <Heading size="md">Quarter III (Core)</Heading>
                <Text>
                $-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development </Text>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        </Grid>
      </Flex>
    </>
  );
}
