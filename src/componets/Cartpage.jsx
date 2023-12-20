import React, { useEffect, useState } from 'react'
import {IoArrowForwardSharp} from 'react-icons/io5'
import { motion } from 'framer-motion'
import {FaRupeeSign} from 'react-icons/fa'

import { UseUserContext } from '../context/Usercontex'
import Cartitems from './Cartitems'

const Cartpage = () => {
    const {showCart,cartItems,user} = UseUserContext();
    const [total,setTotal] = useState(0)
    const [flag,setFlag] =useState(1)

    //for total sum

    useEffect(()=>{
            let totalAmount = cartItems.reduce(function(accumulator,cartQtyItem){
                       return accumulator+cartQtyItem.qty*cartQtyItem.price;
            },0)
            setTotal(totalAmount);
            console.log(total)
    },[total,flag])

    

  return (
   
         <motion.div 
         initial={{opacity:0,x:200}}
         animate={{opacity:1,x:0}}
        exit={{opacity:0,x:200}}
         className='w-full md:w-375 h-screen bg-slate-950 opacity-95 drop-shadow-md flex flex-col 
          fixed top-0 right-0 z-50'>
                <div className='flex w-full p-4 justify-between items-center '>
                <motion.div
                onClick={showCart}
                 whileTap={{scale:0.75}}
                 className='w-24 h-7 p-2 text-red-500 font-extrabold  flex justify-start 
                text-4xl items-center cursor-pointer hover:text-white '>
                           <IoArrowForwardSharp />
                </motion.div>
                
                <div className='w-20 h-7 text-white font-semibold '>
                    <p>Cart</p>
                </div>

                <motion.div 
                whileTap={{scaleX:3}}
                className='w-24 h-7 px-2 text-base font-semibold rounded-full cursor-pointer
                text-white bg-red-600'>
                    <button>Clear Cart</button>
                </motion.div>
                </div>

{/* bottom section ********************************************/}
              <div className='w-full h-full bg-black rounded-t-[2rem]  flex flex-col'>
                <div className='w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 
                    overflow-y-scroll scrollbar-none'>
                          {/* for cart product */}
                  {
                     cartItems && cartItems.map((cartproduct)=>(
                        <Cartitems cartproduct={cartproduct}  key={cartproduct.id} 
                         flag={flag} setFlag = {setFlag}  />
                     ))
                  }

                             </div>
                    {/* cart Total */}
                    <div className='w-full flex-1 bg-green-950  rounded-t-[2rem] flex flex-col
                    items-center justify-evenly px-8 py-2'>
                        <div className='w-full flex items-center justify-between '>
                             <p className='text-white text-lg font-semibold'>Sub Total</p>
                             <p className='text-white text-lg font-semibold
                             flex justify-center items-center'><FaRupeeSign/>{total}</p>

                        </div>

                        <div className='w-full flex items-center justify-between '>
                             <p className='text-white text-lg font-semibold'>Delivery</p>
                             <p className='text-white text-lg font-semibold
                             flex justify-center items-center'><FaRupeeSign/>50</p>

                        </div>

                        <div className='w-full border-b border-red-500 my-2'></div>

                        <div className='w-full flex items-center justify-between '>
                             <p className='text-white text-lg font-semibold'>Total</p>
                             <p className='text-white text-lg font-semibold
                             flex justify-center items-center'><FaRupeeSign/>{total+50}</p>

                        </div>

                        {
                            user ? (
                                <motion.button
                        whileTap={{scale:0.75}}
                        className='w-full p-2 rounded-full bg-orange-900 text-white text-lg
                        my-2 hover:shadow-lg transition-all duration-150 ease-out' >
                            Check Out
                        </motion.button>
                            ) :(
                                <motion.button
                        whileTap={{scale:0.75}}
                        className='w-full p-2 rounded-full bg-orange-900 text-white text-lg
                        my-2 hover:shadow-lg transition-all duration-150 ease-out' >
                            Login Before Checkout
                        </motion.button>
                            )
                        }
                        

                    </div>
              </div>

          </motion.div>
     
  )
}

export default Cartpage