'use client'

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  Badge

} from '@chakra-ui/react'
import { useColorModeValue } from './ui/color-mode'
import {
  Skeleton, SkeletonText
} from "@/components/ui/skeleton"
interface Props {
  name?: string, description?: string, badge?: string, img: string, loading: boolean;
};



export default function Spot({ name, description, badge, img, loading }: Props) {
  console.log('name', name, description, img,badge)

  return (
    <Container maxW={'7xl'} bg={useColorModeValue('white', '#0a0a0a')}>
      <Stack
        align={'center'}
        //@ts-expect-error:type fix
        spacing={{ base: 8, md: 10 }}
        gap={6}

        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Flex
          flex={1}
          justify={['center']}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Blob
            // w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('red.50', 'red.400')}
          />
          {!loading ? (<Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <IconButton
              aria-label={'Play Button'}
              variant={'ghost'}
              _hover={{ bg: 'transparent' }}
              //@ts-expect-error:type fix
              icon={<PlayIcon w={12} h={12} />}
              size={'lg'}
              color={'white'}
              position={'absolute'}
              left={'50%'}
              top={'50%'}
              transform={'translateX(-50%) translateY(-50%)'}
            />
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={'data:image/jpeg;base64,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'}
            />
          </Box>) : (<Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <Stack gap="6" >

              <Skeleton width={'full'} height="300px" />
            </Stack>
          </Box>)}


        </Flex>
        <Stack flex={1}
          width={'full'}
          //@ts-expect-error:type fix
          spacing={{ base: 5, md: 10 }}>
          {!loading ? (<Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.400',
                zIndex: -1,
              }}>
              {name}
            </Text>

          </Heading>) : (<Stack maxW={'full'} gap="6">


            <SkeletonText height={'50px'} noOfLines={1} />

          </Stack>)}
          {!loading ? (<Badge
            fontSize={'14px'}
            fontFamily={'Plus Jakarta Sans'}
            fontWeight={500}
            width={100}
            lineHeight={'20px'}
            letterSpacing={'0.1px'}
            borderRadius='full' py={1} px={4} >
        {badge}
          </Badge>) : (<Stack gap="6" width={100}>

            <Skeleton borderRadius={'full'} height={'40px'} />
          </Stack>)}
          {!loading ? (<Text color={'gray.500'}>
            {description}   </Text>) : (<Stack gap="6" maxW={'xs'}>

            <SkeletonText noOfLines={3} />
          </Stack>)}



          <Stack
            mt={4}
            //@ts-expect-error:type fix
            spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
            <Button
              as={'a'}
              //@ts-expect-error:type fix
              href="tel:+254 75962203"
  
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'orange'}
              bg={'orange.400'}
              _hover={{ bg: 'orange.500' }}>
              Enquire
            </Button>
        
          </Stack>
        </Stack>

      </Stack>
    </Container>
  )
}

const PlayIcon = createIcon({
  displayName: 'PlayIcon',
  viewBox: '0 0 58 58',
  d: 'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
})

const Blob = (props: IconProps) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  )
}