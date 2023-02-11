"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
                President of the Islamic Republic of Pakistan
              </Text>
              <Text
                fontWeight={{ base: "bold", md: "bold", lg: "extrabold" }}
                fontSize={{ base: "3xl", md: "3xl", lg: "5xl" }}
              >
                Dr Arif Alvi
              </Text>
              <Text mb="5px">
                Dr. Arif Alvi was sworn in as the 13th President of Islamic
                Republic of Pakistan on 9th September 2018.
              </Text>

              <Text mb="10px">
                Dr. Arif Alvi was born in 1949 and completed his early education
                in Karachi. He did his Bachelor of Dental Surgery (BDS) from De’
                Montmorency College of Dentistry, Lahore where he was declared
                the “Best Graduate”. He completed his Masters of Science in the
                field of Prosthodontics from University of Michigan (1975) and
                in Orthodontics from University of Pacific, San Francisco
                (1982). He was awarded fellowship ‘Diplomatic American Board of
                Orthodontists (1995)’.
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
              <Text mt="20px" p="10px">
                President Dr. Arif Alvi has been a renowned professional and has
                held many important positions in the field of Dentistry. He
                remained Dean of Orthodontics, College of Physicians and
                Surgeons of Pakistan, President, Pakistan Dental Association
                (1997-2001), Pakistan Association of Orthodontists (2005), Asia
                Pacific Dental Federation (2006-07) and Councilor of the World
                Dental Federation (2007-2013). Through his sheer hard work in
                the World Dental Federation, he was able to get the declaration
                of 20th March as World Oral Health Day. He is also an author of
                a book, theses, and many articles.
              </Text>
              <Text p="10px">
                Dr. Arif Alvi’s political career commenced with his
                pro-democracy struggle against the dictatorship of General Ayub
                Khan. He is a founding member of Pakistan Tehreek-e-Insaf (PTI)
                that came into being in 1996. He remained a member of the PTI’s
                Central Executive Committee since its inception and has held the
                offices of PTI President of Sindh (1997-2001), Central Vice
                President (2001-2006) and Secretary General (2006-2013). In line
                with Constitution of Pakistan, he resigned from all the
                positions of PTI before assuming the prestigious office of the
                President.
              </Text>
            </Box>
            <Box as="section" order={{ base: 1, md: 2 }} flex="1">
              <Box
                mx={{ base: "30px", md: "auto" }}
                minW={{ base: "600px", md: "600px", lg: "500px", sm: "400px" }}
              >
                <Text p="10px">
                  During his tenure as the Secretary General of the party, Dr.
                  Arif Alvi introduced social media platform in the politics of
                  Pakistan. He was instrumental in holding intra-party election
                  (2012-2013) and enabled millions of party members to digitally
                  participate in the election process. He was elected as member
                  of National Assembly from Karachi in 2013 and 2018 and was
                  instrumental in drafting and the passage of many bills
                  including one on Alternate Dispute Resolution.{" "}
                </Text>
                <Text p="10px">
                  He also chaired the sub-committee of EVM’s, Digital
                  Identification of voters and voting of overseas Pakistanis.
                  The latter has finally come to fruition. Dr. Arif Alvi has
                  keen interest in education and health sectors. Provision of
                  basic facilities to the common man and uplifting the country’s
                  image are very close to his heart. He considers people of
                  Pakistan as the most precious asset and, therefore, accords
                  special focus to human resource development in the country. He
                  is happily married and has four children.
                </Text>
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
