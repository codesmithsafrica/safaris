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
  const badge="ksh 25k–15k pp"
   const description='3–7-day tours to Tsavo East/West, Amboseli, and Maasai Mara. Includes luxury lodges/camping..'
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
 
      <Box  bg={useColorModeValue('white', '#0a0a0a')}><Spot loading={loading} name={'Wildlife Safaris'} 
      //@ts-expect-error:fix
      img={item?.item?.image} description={description} badge={badge}/></Box>
    </App>
  );
}
