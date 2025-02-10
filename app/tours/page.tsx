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
      title: 'City/Coastal Cultural Tours',
      text: "Directly connect with coastal cultural tours",
      image:
      'tours3.jpg',
    },
  ]
    const description=`Guided visits to Lamu Old Town (UNESCO site), Mombasa Fort Jesus, Giriama villages.MOMBASA CITY TOUR
Akamba carvings
HindumosqUe
Elephant task 
FortJesus
Old town 
Mama Ngina garden's Ferry
-Mombasa History-
MALINDI CITY  TOUR
Arabuko sokoke forest(butterflies)
Gede Ruines
Vasco da gama pillar
1st church east and central Africa
Old court 
Sabaki bridge
Falcon birds
Mabrui Dunes(small Dubai)
KILIFI TOURS
Jumbaruines
Mtwapa ruines
Kilifi museum 
Barn owl cave
Chasimba caves
Diani Tour
Shimoni
Pate island`
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
