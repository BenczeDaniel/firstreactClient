import React from 'react'
import {motion} from 'framer-motion'


export const  Home=()=> {
  return (
    <div>
      <motion.h1 initial={{y:-250}} animate={{y:60}}
      transition={{delay:0.5,type:"spring",stiffness:50}}
      >Home Page</motion.h1>  
    </div>
    
  )
}
