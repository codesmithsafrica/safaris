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
    const description=`Travel in comfort and style with our diverse fleet of 4x4 Land Cruisers, minibuses, and luxurious boats and yachts, designed to enhance your touring experience across Kenya. Whether you're exploring the rugged landscapes of national parks, enjoying a beach getaway, or cruising along the coast, our vehicles offer the perfect blend of comfort and reliability. Our 4x4 Land Cruisers are ideal for safaris, ensuring a smooth ride even in the most challenging terrains, while our minibuses cater to group tours, offering spacious seating and modern amenities. For a touch of luxury, enjoy private boat and yacht charters along Kenya's stunning coastline, perfect for a serene day at sea or a sunset cruise. Whatever your travel needs, our fleet ensures your journey is unforgettable.`
      const badge="ksh 5k-20k /day"
      const cards = [
        {
          title: 'Memorable Safaris ',
          text: "Let us make your memories unfogettable",
          image:
             'transport.jpg'
            
        },
        {
          title: 'Hidden Gems',
          text: "Hidden but conspicuous spots  just for you",
          image:
          'transport.jpeg',
        },
        {
          title: 'City/Coastal Cultural Tours',
          text: "Directly connect with coastal cultural tours",
          image:
          'transport.jpg',
        },
      ]
         const image="transport.jpg"
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
      
      <Box  bg={useColorModeValue('white', '#0a0a0a')}><Spot loading={loading} name={'Transport'} 

      img={cards} description={description} badge={badge}/></Box>
    </App>
  );
}
