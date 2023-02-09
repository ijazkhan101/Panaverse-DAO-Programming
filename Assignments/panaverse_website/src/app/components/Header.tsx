"use client";
import React from "react";
import Image from "next/image";
import { Box, Container, SimpleGrid, Flex ,Button} from "@chakra-ui/react";
import logo from "../../../public/images/PanaverseLogo.png";
import Link from "next/link";
export default function Header() {
  return (
    <Box boxShadow={'lg'}>
      <Container maxW={1400}>
        <SimpleGrid templateColumns="repeat(3,1fr)">
          <Box>
            <Image
              src={logo}
              alt="Panaverse Logo"
              width={150}
       
            ></Image>
          </Box>
          <Flex gap={10} color='black' fontSize={18} fontWeight='semibold'>
            <Link href=""> Home</Link>
            <Link href=""> Syllabus</Link>
            <Link href=""> Explore </Link>
            <Link href=""> About </Link>
            <Link href=""> Contact </Link>
          </Flex>
          <Box>
            <Button float='right' colorScheme={'teal'}>Apply</Button>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
