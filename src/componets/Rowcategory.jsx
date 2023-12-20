import React, { useEffect, useRef } from 'react'
import burger1 from '../images/burger1.png'
import wraps from '../images/burrito.png'
import breakfast from '../images/fried-egg.png'
import noodles from '../images/panda.png'
import sandwiches from '../images/sandwich.png'
import thali from '../images/thali.png'
import { motion } from 'framer-motion'

const Rowcategory = ({scrollvalue}) => {
    const rowCategory = useRef();
    // console.log("rwo",rowCategory)
    useEffect(()=>{
        rowCategory.current.scrollLeft += scrollvalue;
    },[scrollvalue])
  return (
    
        <div ref={rowCategory}
        className='w-full my-12 overflow-x-scroll scrollbar-none  cursor-pointer 
                    scroll-smooth flex items-center gap-2'>
            <motion.div 
              whileHover={{scale:1.1}}
            className='w-300 min-w-[200px] md:min-w-[250px] md:w-40 h-auto 
            hover:drop-shadow-lg shadow-md backdrop-blur-lg border border-1
            border-gray-200 rounded-md flex justify-center items-center flex-col p-2'>
                    <img 
                    src={burger1} alt="" className='h-[5rem] ' />
                    <p className='text-lg font-semibold'>Burger</p>
            </motion.div>
            <motion.div 
              whileHover={{scale:1.1}}
            className='w-300 min-w-[200px] md:min-w-[250px] md:w-40 h-auto 
            hover:drop-shadow-lg shadow-md backdrop-blur-lg border border-1
            border-gray-200 rounded-md flex justify-center items-center flex-col p-2'>
                    <img 
                    src={wraps} alt="" className='h-[5rem] ' />
                    <p className='text-lg font-semibold'>Wraps</p>
            </motion.div>
            <motion.div 
              whileHover={{scale:1.1}}
            className='w-300 min-w-[200px] md:min-w-[250px] md:w-40 h-auto 
            hover:drop-shadow-lg shadow-md backdrop-blur-lg border border-1
            border-gray-200 rounded-md flex justify-center items-center flex-col p-2'>
                    <img 
                    src={breakfast} alt="" className='h-[5rem] ' />
                    <p className='text-lg font-semibold'>Breakfast</p>
            </motion.div>
            <motion.div 
              whileHover={{scale:1.1}}
            className='w-300 min-w-[200px] md:min-w-[250px] md:w-40 h-auto 
            hover:drop-shadow-lg shadow-md backdrop-blur-lg border border-1
            border-gray-200 rounded-md flex justify-center items-center flex-col p-2'>
                    <img 
                    src={noodles} alt="" className='h-[5rem] ' />
                    <p className='text-lg font-semibold'>Noodles</p>
            </motion.div>
            <motion.div 
              whileHover={{scale:1.1}}
            className='w-300 min-w-[200px] md:min-w-[250px] md:w-40 h-auto 
            hover:drop-shadow-lg shadow-md backdrop-blur-lg border border-1
            border-gray-200 rounded-md flex justify-center items-center flex-col p-2'>
                    <img 
                    src={sandwiches} alt="" className='h-[5rem] ' />
                    <p className='text-lg font-semibold'>Sandwiches</p>
            </motion.div>
            <motion.div 
              whileHover={{scale:1.1}}
            className='w-300 min-w-[200px] md:min-w-[250px] md:w-40 h-auto 
            hover:drop-shadow-lg shadow-md backdrop-blur-lg border border-1
            border-gray-200 rounded-md flex justify-center items-center flex-col p-2'>
                    <img 
                    src={thali} alt="" className='h-[5rem] ' />
                    <p className='text-lg font-semibold'>Thali</p>
            </motion.div>
            
            
            
        
      </div>
    
  )
}

export default Rowcategory