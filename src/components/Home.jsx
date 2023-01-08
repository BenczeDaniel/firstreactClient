import React from 'react'
import {motion} from 'framer-motion'


export const  Home=()=> {
  return (
    <div className='kezdolapszin'>
      <motion.h1 initial={{y:-150}} animate={{y:170}}
      transition={{delay:0.5,type:"spring",stiffness:50} }
      >Kezdőlap</motion.h1>  
    </div>
    
  )
}
