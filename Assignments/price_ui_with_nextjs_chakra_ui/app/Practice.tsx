import React from 'react'
import { ChakraProvider, Heading, Text } from '@chakra-ui/react'

export default function Practice() {
  return (
    <div>
      <Heading>This is Chakra UI</Heading>
      <Heading as="h1" color="red" fontSize="50px">
        H1 Chakra UI
      </Heading>
      <Heading as="h2" color="green" fontSize="40px">
        H2 Chakra UI
      </Heading>
      <Heading as="h3" color="blue" fontSize="30px">
        H3 Chakra UI
      </Heading>
      <Heading as="h4" color="yellow" fontSize="20px">
        H4 Chakra UI
      </Heading>
      <Heading as="h5" color="gray" fontSize="18px">
        H5 Chakra UI
      </Heading>
      <Heading as="h6" color="red" fontSize="15px">
        H6 Chakra UI
      </Heading>
      <Text fontWeight="bold"> This is text by Chakra UI</Text>
      <Heading>FlexBox</Heading>
      <div style={{ color: 'white', display: 'flex' }}>
        <div style={{ background: 'red', padding: '50px' }}>div 1</div>
        <div style={{ background: 'green', padding: '50px' }}>div 2</div>
        <div style={{ background: 'yellow', padding: '50px' }}>div 3</div>
      </div>
    </div>
  )
}
