import React, { useEffect, useState } from 'react'
import {MdOutlineNavigateBefore,MdNavigateNext }from 'react-icons/md'
import { motion } from 'framer-motion'
import Rowcategory from './Rowcategory'



const Homecategory = () => {
  const [scrollvalue,setScrollvalue] = useState(0)

  useEffect(()=>{
    
  },[scrollvalue])
  return (
    <div className='w-full my-6'>
        <div className='w-full flex justify-between items-center'>
            <p className='text-2xl font-semibold capitalize relative text-headingColor
             before:absolute before:rounded-lg 
            before:w-16 before:h-1 before:-bottom-2 before:left-0  before:bg-gradient-to-tr
             from-orange-200 to-orange-600 before:content  '>Category</p>
            <div className='md:flex  items-center flex gap-3 '>
            <div className='hidden md:flex gap-3'>
               <motion.div 
               onClick={()=>setScrollvalue(-600)}
               whileTap={{scale:0.75}}
               className='w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br
                from-orange-600 to-orange-300  text-white font-extrabold cursor-pointer
                 hover:bg-orange-700'>
                       <MdOutlineNavigateBefore />
               </motion.div>
               <motion.div 
               onClick={()=>setScrollvalue(600)}
               whileTap={{scale:0.75}}
               className='w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br
                from-orange-300 to-orange-600  text-white font-extrabold cursor-pointer
                 hover:bg-orange-700'>
                       <MdNavigateNext/>
               </motion.div>
            </div>
               
         
            </div>
            
        </div>
        <Rowcategory scrollvalue={scrollvalue}/>
   
    </div>
  )
}

export default Homecategory