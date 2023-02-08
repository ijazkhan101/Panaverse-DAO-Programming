"use client";
import { ChakraProvider, Heading,Text } from '@chakra-ui/react';
import Header from './Header';
import Practice from './Practice';
import Pricing from './Pricing';


export default function Home() {
  return (  
  <ChakraProvider>
    <Header />
    <Pricing />
  
  </ChakraProvider>
  )
}
