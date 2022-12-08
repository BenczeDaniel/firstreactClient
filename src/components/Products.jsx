import React from 'react'
import {data} from '../data.js'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'




export const  Products=()=> {
  const [items,setItems] = useState(data)
  const navigate=useNavigate()
  return (
    <div>
       <h1>Products</h1>
       
       <ul className='list-group'>
        {items.map(obj=>
         <motion.li className='list-group-item btn btn-dark' whileHover={{scale:1.3,color:'lime'}}
          key={obj.id}
          onClick={()=>navigate('/products/'+obj.id)}
          >
          {obj.name}
          </motion.li>
       )}
       </ul>
        

        </div>
  )
}
