'use client';
import React from 'react';
import Image from 'next/image';
import { Box ,Container,Flex, Text} from '@chakra-ui/react';

export default function HeroSection() {
  return (
    <>
      <Box as='main'>
        <Container maxW={"8xl"}>
            <Flex flexDir={{base:'column',md:'row'}}
            align='center'
            maxW={'1440px'}
            mx='auto'
            pt={{base:'5',md:'10'}}
            px={{base:'10',md:'20'}}
            >
                <Box as='section'
                order={{ base:1, md:2}}
                flex='1'
                textAlign={{base:'center',md:'start'}}
                justifyContent='normal'
                pb={{base:'5', md:'5', lg:'10'}}
                >
                 
                    <Text>Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</Text>
                    <Text fontWeight={{base:'bold',md:'bold',lg:'extrabold'}}
                    fontSize={{base:'3xl',md:'3xl',lg:'5xl'}}
                    >Certified Web 3.0 and Metaverse Developer</Text>
                    <Text>A One and Quarter Years Panaverse DAO Earn as you Learn Program
                    Getting Ready for the Next Generation of the Internet
                    Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies
                    </Text>
                </Box>
                <Box as='section' order={{base:1,md:2}} flex='1'>
                     <Box
                     maxW={{base:'150px', md:'50%' ,lg:'50%'}}
                     maxH={{base:'150px', md:'50%' ,lg:'50%'}}
                     mx={{ base:'0', md:'auto'}}
                     minW='150px'
                     >
                        <Image src={'/images/president.png'} alt='president'
                            width={500}
                            height={500}
                            ></Image>
                        </Box> 
                </Box>
            </Flex>
        </Container>
      </Box>
    </>
  )
}
