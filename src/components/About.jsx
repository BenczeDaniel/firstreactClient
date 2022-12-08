import React from 'react'
import {motion} from 'framer-motion'



export const  About=()=> {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.3,duration:1.5}}
    className="border border-success p-3 m-3">
    <h1>About name</h1>
    <p className='m-2 p-2'>Üdvözöllek az about pagen</p>
    
    </motion.div>
  )
}
