'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
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
  Center,
} from '@chakra-ui/react'
export default function Home() {
  return (
    <>
      <Box as="main">
        {/* 1st section */}
        <Header />
        <Container maxW={'8xl'}>
          <Flex
            flexDir={{ base: 'column', md: 'row' }}
            align="center"
            maxW={'1440px'}
            mx="auto"
            pt={{ base: '5', md: '10' }}
            px={{ base: '10', md: '20' }}
            textAlign={{ base: 'center' }}
            justifyContent="normal"
          >
            {/* Content section */}
            <Box
              as="section"
              order={{ base: 2, md: 1 }}
              flex="1"
              textAlign={{ base: 'center', md: 'start' }}
              justifyContent="normal"
            >
              <Text fontWeight={'bold'} fontSize="20px" pt="30px">
                Quarter IV
              </Text>
              <Text
                fontWeight={{ base: 'bold', md: 'bold', lg: 'extrabold' }}
                fontSize={{ base: '3xl', md: '3xl', lg: '5xl' }}
              >
                Genomics and Bioinformatics Specialization
              </Text>
              <Text>
                Bio-351: Python for Biologists Duration: 13 Weeks Course
                Description: This course will focus on learning the basics of
                the Python programming language through genomics examples.
                Textbook: https://www.pythonforbiologists.org/
              </Text>
            </Box>
          </Flex>
        </Container>
        {/*2nd section */}

     

        <Container maxW={'8xl'}>
          <Flex
            flexDir={{ base: 'column', md: 'row' }}
            align="center"
            maxW={'1440px'}
            mx="auto"
            pt={{ base: '5', md: '10' }}
            px={{ base: '10', md: '20' }}
            textAlign={{ base: 'center' }}
            justifyContent="normal"
          >
            <Grid
              templateColumns={{
                base: 'repeat(1,1fr)',
                sm: 'repeat(1,1fr)',
                md: 'repeat(1,1fr)',
              }}
              gap={6}
              maxW={'8xl'}
              mx="auto"
            >
              <Link href="Quater1" target="_blank">
                <Card maxW="sm">
                  <CardBody>
                    <Stack mt="6" spacing="3">
                      <Heading size="md" color="#23918e">
                      Quarter V
Bio-361: Bioinformatics with Python
Duration: 13 Weeks

                      </Heading>
                      <Text>
                        Course Description: 

In this course we will discover modern, next-generation sequencing libraries from the powerful Python ecosystem to perform cutting-edge research and analyze large amounts of biological data.

                        </Text>
                      <Link href="https://www.amazon.com/Bioinformatics-Python-Cookbook-applications-computational/dp/1803236426/ref=sr_1_1">
                        <Text>
                          Text Book :
                          https://www.amazon.com/Bioinformatics-Python-Cookbook-applications-computational/dp/1803236426/ref=sr_1_1
                        </Text>
                      
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
  )
}
