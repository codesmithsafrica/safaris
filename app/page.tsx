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

      <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }}
         //@ts-expect-error:fix 
      spacing={10}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={'Lifetime Support'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'Unlimited Donations'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Instant Delivery'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
                <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'Unlimited Donations'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Instant Delivery'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
      </SimpleGrid>
    </Box>
      <Box bg={useColorModeValue('white', '#0a0a0a')}
        color={useColorModeValue('gray.600', 'white')}
        paddingX={['10px', '20%']}
      >
        <Flex justifyContent={'space-between'}
          paddingTop={4}
        >
          <Heading mt={4} fontWeight={700} fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>
            Featured Safaris
          </Heading>
          <Box as={'a'}
            //@ts-expect-error:typefix
            href={'items/'}>
            <Text mt={4} fontWeight={500} fontSize={{ base: 'md', lg: 'xl' }} color={color}>
              view all
            </Text>
          </Box>

        </Flex>


        <SimpleGrid
          bg={useColorModeValue('white', '#0a0a0a')}
          color={useColorModeValue('gray.600', 'white')}
          paddingTop={4}
          columns={[2, null, 4]} gap={["20px", "40px"]}>

          {/* {loading ? (
            <Flex pt={24} align="center" justify="center">
              <VStack colorPalette="teal">
                <Spinner color={color} />
                <Text >Loading Spots...</Text>
              </VStack>
            </Flex>
          ) : (<>

            {items?.items?.length ? (
              // eslint-disable-next-line
              items?.items?.map((item: ItemProps, index: number) => <Box as={'a'}
                //@ts-expect-error:typefix
                href={`item/${item?.id}`}><Card  name={item?.name} src={`/restaurants/${item?.image}`} badge={item?.category?.name} /></Box>)
            ) : (<>
              <Stack gap="6" maxW="xs">

                <Skeleton height="200px" />
              </Stack>
              <Stack gap="6" maxW="xs">

                <Skeleton height="200px" />
              </Stack>
              <Stack gap="6" maxW="xs">

                <Skeleton height="200px" />
              </Stack>
              <Stack gap="6" maxW="xs">

                <Skeleton height="200px" />
              </Stack>
            </>

            )}
          </>
          )} */}
          <Box as={'a'}
            //@ts-expect-error:typefix
            href={`item/1`}>
            <Card />
          </Box>
          <Box as={'a'}
            //@ts-expect-error:typefix
            href={`item/2`}>
            <Card />
          </Box>
          <Box as={'a'}
            //@ts-expect-error:typefix
            href={`item/3`}>
            <Card />
          </Box>
          <Box as={'a'}
            //@ts-expect-error:typefix
            href={`item/4`}>
            <Card />
          </Box>
        </SimpleGrid>
      </Box>

    </App>
  );
}
