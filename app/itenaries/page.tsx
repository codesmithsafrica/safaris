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
  const badge="Bespoke pricing"
    const image="custom.jpg"
    const cards = [
      {
        title: 'Memorable Safaris ',
        text: "Let us make your memories unfogettable",
        image:
           'custom.jpg'
          
      },
      {
        title: 'Hidden Gems',
        text: "Hidden but conspicuous spots  just for you",
        image:
        'custom2.jpg',
      },
      {
        title: 'City/Coastal Cultural Tours',
        text: "Directly connect with coastal cultural tours",
        image:
        'custom3.jpg',
      },
    ]
  const description=`Our expert team takes the time to understand your interests, from private safaris in Tsavo National Park to exploring the hidden gems of Mombasa's Old Town and beyond. We offer exclusive access to the most beautiful, less-traveled beaches of Diani, Watamu, and Malindi, ensuring that your experience is both intimate and extraordinary. For those seeking cultural immersion, we arrange visits to local villages, historical sites like the Gede Ruins, and authentic Swahili cooking classes.

We also cater to families, honeymooners, adventure seekers, and solo travelers, offering personalized services like private guides, luxury transportation, and curated experiences based on your interests.

Your comfort and satisfaction are our top priority, with every detail meticulously planned, so you can relax and enjoy the beauty of Kenya’s coast at your own pace. With our custom itineraries, your dream coastal getaway is just a call away..`
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
    
      <Box  bg={useColorModeValue('white', '#0a0a0a')}><Spot loading={loading} name={'Custom itineraries'} 
 
      img={cards} description={description} badge={badge}/></Box>
    </App>
  );
}
