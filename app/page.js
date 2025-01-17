"use client"

import { useState } from "react";

export default function Home() {
const [show,setShow]=useState("...")
  const clicked=async()=>{

    try {
      const res = await fetch('/api');
      if (res.ok) {
        const data = await res.json();
        console.log(data)
        setShow(data.success)
       
      } 
    } catch (error) {
      console.error('Error:', error);
     
    }


  }

  return (
    <div>
      <p>{show}</p>
      <button onClick={clicked}>Click ME</button>
    </div>
  );
}
