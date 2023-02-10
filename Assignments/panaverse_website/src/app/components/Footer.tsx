"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/PanaverseLogo.png";
import { Box, Container, SimpleGrid, Grid ,Flex ,Button,Heading,Text } from "@chakra-ui/react";


export default function Footer() {
    return (
    <Box boxShadow={'lg'} background='black'>
      <Container maxW={1400}>
        <SimpleGrid textAlign={{lg:'start',base:'center'}} spacing='30px' py='60px' templateColumns={{base:'repeat(1, 1fr)', lg:'repeat(4, 1fr)'}}>
          <Box>
            <Heading  pb='20px' color='white'> About US</Heading>
            <Image
              src={logo}
              alt="Panaverse Logo"
              width={130}
       
            ></Image> <Text color='white'>The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread</Text>
          </Box>
          <Box>
          <Heading color='white'>Useful links</Heading>
            <Grid  pt='40px' color='white'>
              <Link href=""> Home</Link>
              <Link href=""> Syllabus</Link>
              <Link href=""> Explore </Link>
              <Link href=""> About </Link>
              <Link href=""> Contact </Link>
            </Grid>
          </Box>
          <Box>
           <Heading   color='white'> Floow Us</Heading>
            <Grid  pt='40px' color='white'>
              <Link href=""> Facbook</Link>
              <Link href=""> Linkedin</Link>
              <Link href=""> Twitter </Link>
              <Link href=""> Youtube </Link>
            </Grid>
          </Box>
          <Box>
            <Heading color='white'> Contact US</Heading>
            <Grid  pt='40px' color='white'>
              <Link href='/'>+92-308-2220203 (WhatsApp as well)</Link>
              <Link href='/'>Email   : Ijazkhan19932@gmail.com</Link>
              <Link href='/'>Address : Dir , Pakistan</Link>
            </Grid>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
    );

}