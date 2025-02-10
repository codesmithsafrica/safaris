'use client'
// import { Card } from '@randukelvin/card'
import App from '@/components/App'
import {
  SimpleGrid,
  Box, Flex, Text, Heading, Stack, Icon,  
  Container,
  
  HStack,
  VStack,
} from "@chakra-ui/react";
import { useColorModeValue } from '@/components/ui/color-mode'
import React, { ReactElement } from 'react';
import CaptionCarousel from '@/components/Hero'
import { Card } from "@/components/Card";
import { FcAssistant, FcDonate, FcInTransit,FcLandscape,FcGlobe ,FcCompactCamera ,FcCloseUpMode  } from 'react-icons/fc'
// import axios from "axios";
import {
  Skeleton,
} from "@/components/ui/skeleton"
import { CheckIcon } from '@chakra-ui/icons'


export type ItemProps = {
  id: number;
  name: string;
  image: string;
  badge: string;
  category: { name: string }


};
interface Props {
  items: ItemProps[];
  key: number;
}
interface FeatureProps {
  title: string
  text: string
  icon: ReactElement
}
// Replace test data with your own
const features = Array.apply(null, Array(8)).map(function (x, i) {
  return {
    id: i,
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
  }
})

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={10}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  )
}
export default function Home() {

  const items = {}

  // const [items, SetItems] = useState<Props | null>(null)
  // const [loading, setLoading] = useState(false);
  // const itemsApiURL = `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/items`;
  const color = useColorModeValue('gray.600', 'white')
  // useEffect(() => {
  //   setLoading(true)
  //   // eslint-disable-next-line
  //   axios.get(itemsApiURL).then((response: any) => {
  //     SetItems(response?.data);
  //   });
  //   setLoading(false)
  // }, [items, itemsApiURL]);
  // console.log('items', items)
  return (
    <App>
      <CaptionCarousel />

      <Box p={4}>
        <Flex justifyContent={'center'} alignItems={'center'}

        >
          <Stack
            //@ts-expect-error:fix 
            spacing={4} maxW={'3xl'} textAlign={'center'}>
            <Heading fontWeight={700}  mt={4} fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>Who are we?</Heading>
            <Text color={'gray.600'} fontSize={'xl'}>
              Maiyo Adventures is a Mtwapa, Kilifi County-based tour and travel company dedicated
              to delivering immersive, sustainable travel experiences across coastal Kenya and East
              Africa. With the slogan “Your Experience, Our Passion,” we cater to domestic and
              international tourists seeking authentic cultural encounters, wildlife safaris, and curated
              adventures..
            </Text>
          </Stack>
        </Flex>

      </Box>
      <Box p={4}>
        <Flex justifyContent={'center'} alignItems={'center'}

        >
          <Stack
            //@ts-expect-error:fix 
            spacing={4} maxW={'3xl'} textAlign={'center'}>
            <Heading fontWeight={700}  mt={4} fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>Vision</Heading>
            <Text color={'gray.600'} fontSize={'xl'}>
            To become East Africa’s most trusted sustainable travel brand, celebrated for
            innovative itineraries, cultural preservation, and exceptional guest satisfaction.
            </Text>
          </Stack>
        </Flex>

      </Box>
      <Box p={4}>
        <Flex justifyContent={'center'} alignItems={'center'}

        >
          <Stack
            //@ts-expect-error:fix 
            spacing={4} maxW={'3xl'} textAlign={'center'}>
            <Heading fontWeight={700}  mt={4} fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>Mission</Heading>
            <Text color={'gray.600'} fontSize={'xl'}>
            To empower travellers to explore coastal Kenya and East Africa through ethically
              designed journeys that benefit local economies, conserve ecosystems, and fost
              cross-cultural understanding.
            </Text>
          </Stack>
        </Flex>

      </Box>
      <Box p={4} px={4}>
        <Flex justifyContent={'center'} alignItems={'center'}

        >
          <Heading mt={4} mb={4} fontWeight={700} fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>
            Our Services
          </Heading>


        </Flex>
       
        <SimpleGrid columns={{ base: 1, md: 2 }}
          //@ts-expect-error:fix 
          spacing={10} justifyContent={'center'} alignItems={'center'} ml={['unset',20]} px={['unset','20%']}>
          <Feature
            icon={<Icon as={FcLandscape } w={10} h={10} />}
            title={'Wildlife Safaris'}
            text={
              '3–7-day tours to Tsavo East/West, Amboseli,and Maasai Mara. Includes luxury lodges/camping.'
            }
          />
          <Feature
            icon={<Icon as={FcGlobe } w={10} h={10} />}
            title={'Coastal Cultural Tours'}
            text={
              'Guided visits to Lamu Old Town (UNESCO site),Mombasa Fort Jesus, Giriama villages.'
            }
          />
          <Feature
            icon={<Icon as={FcCompactCamera} w={10} h={10} />}
            title={'Hidden Gems'}
            text={
              'Exclusive experiences: Dabaso Village(bio-farming), Kayaking in Mida Creek, Kaya Forest rituals'
            }
          />
          <Feature
            icon={<Icon as={FcCloseUpMode} w={10} h={10} />}
            title={'Tailored Packages'}
            text={
              'Custom itineraries (e.g., “Luxury Honeymoon” or “Family Adventure”)'
            }
          />
          <Feature
            icon={<Icon as={FcInTransit} w={10} h={10} />}
            title={'Transportation'}
            text={
              'Fleet of 4x4 Land Cruisers, minibuses, and boats.'
            }
          />
        </SimpleGrid>
      </Box>


    </App>
  );
}
