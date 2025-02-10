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
  Field, Input,
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
   
   <Container bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box
          display={['unset','flex']}
                //@ts-expect-error:fix  
          spacing={{ base: 20, sm: 3, md: 5, lg: 20 }} p={4}>
          <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0}
                          //@ts-expect-error:fix 
                     spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        // leftIcon={<MdPhone color="#1970F1" size="20px" />}
                        >
                     <MdPhone color="#1970F1" size="20px" /> 075962203
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        // leftIcon={<MdEmail color="#1970F1" size="20px" />}
                        >
                       <MdEmail color="#1970F1" size="20px" /> maiyobespoketoursandtravel.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        // leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
                        >
                          <MdLocationOn color="#1970F1" size="20px" />
                        Mtwapa, Kilifi
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                          //@ts-expect-error:fix 
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                            //@ts-expect-error:fix 
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<MdFacebook size="28px" />}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                            //@ts-expect-error:fix 
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsGithub size="28px" />}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                            //@ts-expect-error:fix 
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsDiscord size="28px" />}
                    />
                  </HStack>
                </Box>

                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack
                       //@ts-expect-error:fix 
                     spacing={5}>
                    <Field.Root>
      <Field.Label>Email</Field.Label>
      <Input placeholder="me@example.com" />
    </Field.Root>
    <Field.Root>
      <Field.Label>Email</Field.Label>
      <Input placeholder="me@example.com" />
    </Field.Root>
    <Field.Root>
      <Field.Label>Email</Field.Label>
      <Input placeholder="me@example.com" />
    </Field.Root>
    <Field.Root>
      <Field.Label>Email</Field.Label>
      <Input placeholder="me@example.com" />
    </Field.Root>
                      {/* <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <BsPerson color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <MdOutlineEmail color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button variant="solid" bg="#0D74FF" color="white" _hover={{}}>
                          Send Message
                        </Button>
                      </FormControl> */}
                    </VStack>
                  </Box>
                </Box>
             
          </Box>
        </Box>
      </Flex>
    </Container>
    </App>
  );
}
