import React from 'react'
import {motion} from 'framer-motion'



export const  About=()=> {
  return (
    <div>
    <motion.h1 initial={{y:-150}} animate={{y:170}}
    transition={{delay:0.5,type:"spring",stiffness:50}}
    >Árak</motion.h1>  
  </div>
  )
}
