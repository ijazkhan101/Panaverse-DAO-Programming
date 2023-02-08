import React from 'react'
import { ChakraProvider, Heading,Text ,Box} from '@chakra-ui/react';
import Head from './head';


export default function Header() {
  return (
    <Box textAlign='center' bg='#6B46C1' pt="90px" pb='250px' color='white'>
        <Heading> Simple pricing for your business</Heading>
        <Text  pt="10px">Plans that are carefully crafted  to suit your business.</Text>
    </Box>
  );
}
