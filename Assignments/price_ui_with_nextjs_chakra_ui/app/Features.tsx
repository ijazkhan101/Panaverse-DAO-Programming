import { Box ,Flex,HStack, Icon ,Text} from "@chakra-ui/react";
import React from "react";
import icons1 from "./icons/icons1";
import icon2 from "./icons/icon2";
import icon3 from "./icons/icon3";

export default function Features() {
    return (
        <Box maxW={'800px'} m='auto' mt="25px" mb="50px" px='50px'>
            <Flex direction={{ base:'column',lg:'row'}}>
                <HStack mb='20px'>
                    <Icon as={icons1} />
                    <Text>30 days money back Guarantee</Text>
                </HStack>

                <HStack mb='20px'>
                    <Icon as={icon2} />
                    <Text>30 days money back Guarantee</Text>
                </HStack>

                <HStack mb='20px'>
                    <Icon as={icon3} />
                    <Text>30 days money back Guarantee</Text>
                </HStack>
            </Flex>
        </Box>
    )
  
}