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
  const badge="ksh 10k–40k pp"
   const image="tours.jpg"
   const cards = [
    {
      title: 'Memorable Safaris ',
      text: "Let us make your memories unfogettable",
      image:
         'tours.jpg'
        
    },
    {
      title: 'Hidden Gems',
      text: "Hidden but conspicuous spots  just for you",
      image:
      '1.jpg',
    },
    {
      title: 'Hidden Gems',
      text: "Hidden but conspicuous spots  just for you",
      image:
      '15.jpg',
    },
    {
      title: 'Hidden Gems',
      text: "Hidden but conspicuous spots  just for you",
      image:
      '24.jpg',
    },
    {
      title: 'City/Coastal Cultural Tours',
      text: "Directly connect with coastal cultural tours",
      image:
      'tours3.jpg',
    },
  ]
    const description=`Explore the rich cultural heritage and vibrant history of Mombasa with our immersive city and cultural tours. From the historic streets of Old Town, with its fascinating Swahili architecture and bustling markets, to the iconic Fort Jesus, our expert guides will take you on a journey through the heart of Mombasa. Discover the city’s diverse influences, including Arab, Portuguese, and African cultures, through visits to local mosques, spice markets, and artisan workshops.

Our tours offer a unique chance to experience Mombasa's lively traditions, local cuisine, and authentic crafts. Whether you're interested in history, art, or local customs, our customized cultural tours provide a deep dive into Mombasa's heritage.Guided visits to Lamu Old Town (UNESCO site), Mombasa Fort Jesus, Giriama villages.MOMBASA CITY TOUR
`
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
   
      <Box  bg={useColorModeValue('white', '#0a0a0a')}><Spot loading={loading} name={'City/Cultural tours'} 
      
      img={cards} description={description} badge={badge}/></Box>
    </App>
  );
}
