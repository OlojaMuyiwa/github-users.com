import React, { useState, useEffect } from "react";

const Cleanup = () =>{
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth);
  }

  useEffect(()=>{
    window.addEventListener('resize', checkSize);
    return () => {
    console.log("Cleanup");

      window.removeEventListener('resize', checkSize);
    }
  })
return <>
    <h1>window</h1>
    <h2>{size}</h2>
  </>
}

export default Cleanup;