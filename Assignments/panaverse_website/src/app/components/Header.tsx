'use client'
import React from 'react'
import Image from 'next/image'
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
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import logo from '../../../public/images/PanaverseLogo.png'
import Link from 'next/link'
export default function Header() {
  return (
    <Box boxShadow={'lg'}>
      <Container maxW={1400}>
        <SimpleGrid templateColumns="repeat(3,1fr)">
          <Box>
            <Image src={logo} alt="Panaverse Logo" width={130}></Image>
          </Box>
          <Flex
            display={{ lg: 'flex', base: 'none' }}
            placeItems="center"
            gap={10}
            color="black"
            fontSize={18}
            fontWeight="semibold"
          >
            <Link href=""> Home</Link>
            <Link href=""> Syllabus</Link>
            <Link href=""> Explore </Link>
            <Link href="/"> About </Link>
            <Link href=""> Contact </Link>
            <Link href="https://github.com/panaverse"> Github</Link>
          </Flex>
          <Box display={{ lg: 'initial', base: 'none' }}>
            <Link href="https://github.com/panaverse">
              {' '}
              <Button
                mt="10px"
                float="right"
                ml={'4px'}
                color="white"
                background={'black'}
                size="lg"
              >
                Github
              </Button>
            </Link>
            <Link href="https://portal.piaic.org/signup">
              {' '}
              <Button mt="10px" float="right" colorScheme={'teal'} size="lg">
                Apply
              </Button>
            </Link>
          </Box>
          <Box pt="14px" display={{ lg: 'none', base: 'initial' }}>
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
                <MenuItem>Syllabus</MenuItem>
                <MenuItem>Explore</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Contact</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
