'use client'
import React from 'react';
import App from '@/components/App'
import {
 Flex,   Container,

 Box,
 Heading,
 Text,
 IconButton,
 Button,
 VStack,
 HStack,
//  Wrap,
//  WrapItem,
//  FormControl,
//  FormLabel,
//  Input,
//  InputGroup,
//  InputLeftElement,
 Textarea,
} from "@chakra-ui/react";
import { useColorModeValue } from '@/components/ui/color-mode'
import { useParams } from 'next/navigation'
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md'
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs'


export default function Home() {
  const params = useParams<{ slug: string }>()
 console.log('slug',params?.slug)
  return (
    <App>
      <Flex
        bg={useColorModeValue('white', '#0a0a0a')}
        color={useColorModeValue('gray.600', 'white')}
      >
        <Text ml={2} mb={2} fontSize="sm">
          {"Contacts"}{' '}
          {/* <b>{'Wapi magazines'}</b> */}
        </Text>
      </Flex>
      <Container bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
  
          </Box>
        </Box>
      </Flex>
    </Container>
    </App>
  );
}
