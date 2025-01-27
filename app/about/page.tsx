'use client'
import React from 'react';
import App from '@/components/App'
import {
 Text, Flex, 
} from "@chakra-ui/react";
import { useColorModeValue } from '@/components/ui/color-mode'


export default function Home() {

  return (
    <App>
      <Flex
        bg={useColorModeValue('white', '#0a0a0a')}
        color={useColorModeValue('gray.600', 'white')}
      >
        <Text ml={2} mb={2} fontSize="sm">
          {"About Us"}{' '}
          {/* <b>{'Wapi magazines'}</b> */}
        </Text>
      </Flex>
    </App>
  );
}
