'use client'
// import { Card } from '@randukelvin/card'
import App from '@/components/App'
import {
  SimpleGrid,
  Box, Flex ,Text, Heading, Stack,Icon
} from "@chakra-ui/react";
import { useColorModeValue } from '@/components/ui/color-mode'
import React, {  ReactElement } from 'react';
import CaptionCarousel from '@/components/Hero'
import { Card } from "@/components/Card";
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc'
// import axios from "axios";
import {
  Skeleton,
} from "@/components/ui/skeleton"


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

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
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

      <Box p={4}px={4}>
      <Flex justifyContent={'center'}alignItems={'center'}
        
        >
          <Heading mt={4} fontWeight={700} fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>
            Our Services
          </Heading>
      

        </Flex>
      <SimpleGrid columns={{ base: 1, md: 3 }}
         //@ts-expect-error:fix 
      spacing={10}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={'Wildlife Safaris'}
          text={
            '3–7-day tours to Tsavo East/West, Amboseli,and Maasai Mara. Includes luxury lodges/camping.'
          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'Coastal Cultural Tours'}
          text={
            'Guided visits to Lamu Old Town (UNESCO site),Mombasa Fort Jesus, Giriama villages.'
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Hidden Gems'}
          text={
            'Exclusive experiences: Dabaso Village(bio-farming), Kayaking in Mida Creek, Kaya Forest rituals'
          }
        />
                <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
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
