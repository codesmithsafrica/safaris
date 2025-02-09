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
          Maiyo Bespoke Tours and Travel  is a tour and travel company based in Mtwapa, Kilifi County, coastal Kenya.  Our slogan, "Your Experience, Our Passion," reflects our commitment to providing exceptional travel experiences throughout coastal Kenya and East Africa. We offer a comprehensive range of services, including safaris, city tours, exploration of hidden gems, bookings, transportation, and tailored travel packages
        </Text>
      </Flex>
    </App>
  );
}
