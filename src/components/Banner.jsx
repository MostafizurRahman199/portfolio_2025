import React from 'react'
import { Carousel } from "@material-tailwind/react";

const Banner = () => {
  return (
 
    <Carousel className=" h-[600px]">
    <img
      src="https://5.imimg.com/data5/SELLER/Default/2023/5/312281422/DM/CL/ZE/190312336/ecommerce-website-500x500.png"
      alt="image 1"
      className="h-full w-full object-cover"
    />
    <img
      src="https://i0.wp.com/vividreal.com/wp-content/uploads/2020/10/10-Best-Blogging-Platforms-to-Help-You-Get-Content-out-in-the-Wild-2020.jpg?fit=800%2C450&ssl=1"
      alt="image 2"
      className="h-full w-full object-cover"
    />
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHHgXyMvIDs5DllS0EUmDXNkR3f8QcGZFigQ&s"
      alt="image 3"
      className="h-full w-full object-cover"
    />
  </Carousel>
  )
}

export default Banner