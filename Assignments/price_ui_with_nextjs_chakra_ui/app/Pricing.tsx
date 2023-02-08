import { Box ,Flex,Text,Heading,Button, HStack,Icon} from '@chakra-ui/react'
import { Head } from 'next/document'
import React from 'react'
import checkMarkIcon from './icons/checkMarkIcon'

export default function Pricing() {
  return (
    <Box width='850px' m='auto' mt='-210px' bg="white">
        <Flex>
            <Box bg="#cbb8ee" p='60px' textAlign='center'>
                <Text fontWeight="bold" fontSize='24px'>Premium PRO</Text>
                <Heading fontSize={'60px'}> $329</Heading>
                <Text>billed just Once </Text>
                <Button mt="15px" w={'300px'} color="white" bg="#805AD5">Get Started </Button>
            </Box>
            <Box pt='50px' pl='25px'>
                <Text mb='10px'>Access these features when you get this pricing package for  your business.</Text>
                <HStack mb="15px">
                    <Icon  as={checkMarkIcon}/>
                    <Text>International calling and messaging API</Text>
                </HStack>
                <HStack mb="15px">
                    <Icon  as={checkMarkIcon}/>
                    <Text>Additional phone numbers</Text>
                </HStack>
                <HStack mb="15px">
                    <Icon  as={checkMarkIcon}/>
                    <Text>Automated messages  via Zaiper </Text>
                </HStack>
                <HStack mb="15px">
                    <Icon  as={checkMarkIcon}/>
                    <Text>24/7 support and consulting </Text>
                </HStack>
            </Box>
        </Flex>
    </Box>
  )
}
