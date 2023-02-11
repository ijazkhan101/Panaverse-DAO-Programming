"use client";
import React from "react";
import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Flex,
  SimpleGrid,
  Menu,
  IconButton,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import logo from "../../../public/images/PanaverseLogo.png";
import Link from "next/link";
export default function Header() {
  return (
    <Box boxShadow={"lg"}>
      <Container maxW={1400}>
        <SimpleGrid templateColumns="repeat(3,1fr)">
          <Box>
            <Image src={logo} alt="Panaverse Logo" width={130}></Image>
          </Box>
          <Flex
            display={{ lg: "flex", base: "none" }}
            placeItems="center"
            gap={10}
            color="#174e4d"
            fontSize={20}
            fontWeight="610"
            
            
          >
            <Link href=""> Home</Link>
            <Link href="/About"> About </Link>
            <Menu>
              <MenuButton
                px={4}
                py={2}
                transition="all 0.2s"
                borderRadius="md"
                fontWeight={"610"}
                color="#174e4d"
              >
                Syllabus
              </MenuButton>
              <MenuList>
                <Link href="Quater1">
                  <MenuItem>Quarter I </MenuItem>
                </Link>
                <Link href="Quater2">
                  <MenuItem>Quarter II</MenuItem>
                </Link>
                <Link href="Quater3">
                  <MenuItem>Quarter III</MenuItem>
                </Link>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                px={4}
                py={2}
                transition="all 0.2s"
                borderRadius="md"
                fontWeight={"600"}
                color="black"
              >
                Specializations
              </MenuButton>
              <MenuList>
                <Link href="web3">
                  <MenuItem>Web 3.0 </MenuItem>
                </Link>
                <Link href="AI">
                  <MenuItem>Artificial Intelligence</MenuItem>
                </Link>
                <Link href="Cloud">
                  <MenuItem>Cloud Computing</MenuItem>
                </Link>
                <Link href="Iot">
                  <MenuItem>IOT</MenuItem>
                </Link>
                <Link href="Bioinformatics">
                  <MenuItem>Bioinformatics</MenuItem>
                </Link>
                <Link href="Network">
                  <MenuItem>Network Programmability</MenuItem>
                </Link>
                <Link href="Cloud">
                  <MenuItem>Cloud Computing</MenuItem>
                </Link>
              </MenuList>
            </Menu>

            <Link href=""> Contact </Link>
          </Flex>
          <Box display={{ lg: "initial", base: "none" }}>
            <Link href="https://github.com/panaverse">
              {" "}
              <Button
                mt="10px"
                float="right"
                ml={"4px"}
                color="white"
                background={"black"}
                size="lg"
              >
                Github
              </Button>
            </Link>
            <Link href="https://portal.piaic.org/signup">
              {" "}
              <Button mt="10px" float="right" colorScheme={"teal"} size="lg">
                Apply
              </Button>
            </Link>
          </Box>
          <Box pt="14px" display={{ lg: "none", base: "initial" }}>
            <Menu>
              <MenuButton
                float="right"
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                <MenuItem>Home</MenuItem>
                <MenuItem>About</MenuItem>
                <Menu>
                  <MenuButton
                    px={4}
                    py={2}
                    transition="all 0.2s"
                    borderRadius="md"
                    fontWeight={"600"}
                    color="black"
                  >
                    Syllabus
                  </MenuButton>
                  <MenuList>
                    <Link href="Quater1">
                      <MenuItem>Quarter I </MenuItem>
                    </Link>
                    <Link href="Quater2">
                      <MenuItem>Quarter II</MenuItem>
                    </Link>
                    <Link href="Quater3">
                      <MenuItem>Quarter III</MenuItem>
                    </Link>
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuButton
                    px={4}
                    py={2}
                    transition="all 0.2s"
                    borderRadius="md"
                    fontWeight={"600"}
                    color="black"
                  >
                    Specializations
                  </MenuButton>
                  <MenuList>
                    <Link href="web3">
                      <MenuItem>Web 3.0 </MenuItem>
                    </Link>
                    <Link href="AI">
                      <MenuItem>Artificial Intelligence</MenuItem>
                    </Link>
                    <Link href="Cloud">
                      <MenuItem>Cloud Computing</MenuItem>
                    </Link>
                    <Link href="Iot">
                      <MenuItem>IOT</MenuItem>
                    </Link>
                    <Link href="Bioinformatics">
                      <MenuItem>Bioinformatics</MenuItem>
                    </Link>
                    <Link href="Network">
                      <MenuItem>Network Programmability</MenuItem>
                    </Link>
                    <Link href="Cloud">
                      <MenuItem>Cloud Computing</MenuItem>
                    </Link>
                  </MenuList>
                </Menu>
                <MenuItem>Contact</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
