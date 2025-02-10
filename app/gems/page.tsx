'use client'
import React, { useState, useEffect } from 'react';
import App from '@/components/App'
import {
 Text, Flex,Box
} from "@chakra-ui/react";
import { useColorModeValue } from '@/components/ui/color-mode'
import { useParams } from 'next/navigation'
// import axios from "axios";
import Spot from '@/components/Spot';

interface Props {
  item: {name?:string,description?:string ,img:string,category:{name:string|undefined}};
  
}

export default function Home() {
  const params = useParams<{ id: string }>()
  const [item, SetItems] = useState<Props | null>(null)
  const [loading, setLoading] = useState(false);
  const badge="ksh 15k–50k pp"
  const image="gems.jpg"
  const cards = [
    {
      title: 'Memorable Safaris ',
      text: "Let us make your memories unfogettable",
      image:
         'gems.jpg'
        
    },
    {
      title: 'Hidden Gems',
      text: "Hidden but conspicuous spots  just for you",
      image:
      'gems2.jpg',
    },
    {
      title: 'City/Coastal Cultural Tours',
      text: "Directly connect with coastal cultural tours",
      image:
      'gems3.jpg',
    },
  ]
  
    const description='Mombasa’s coastal region is brimming with hidden gems waiting to be explored. Discover the serene shores of Gede Ruins, where ancient Swahili architecture meets lush greenery, offering a glimpse into the past. Explore the tranquil Pemba Channel, ideal for snorkeling and diving, showcasing vibrant coral reefs. Visit the secluded Mombasa Marine National Park for a quiet retreat amidst nature. For history lovers, the lesser-known Fort Jesus Museum offers intriguing stories beyond the main attractions. Don’t miss the peaceful Mtwapa Creek, perfect for a quiet boat ride, and the untouched beaches of Mombasa coast .Exclusive experiences: Dabaso Village (bio-farming), Kayaking in Mida Creek, Kaya Forest rituals.'
  // const itemsApiURL = `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/item/${params?.id}`;
  // useEffect(() => {
  //   setLoading(true)
  //   // eslint-disable-next-line
  //   axios.get(itemsApiURL).then((response: any) => {
  //     SetItems(response?.data);
  //   });
  //   setLoading(false)
  // }, [item, itemsApiURL]);
  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      console.log("Delayed for 1 second.");
      setLoading(false)
    }, 3000)
 

  },[])
  console.log(item?.item?.name,loading,SetItems,setLoading)

  return (
    <App>
 
      <Box  bg={useColorModeValue('white', '#0a0a0a')}><Spot loading={loading} name={'Hidden gems'} 

      img={cards} description={description} badge={badge}/></Box>
    </App>
  );
}
