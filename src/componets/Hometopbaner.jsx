
import React from 'react'
import strawberry from '../images/strawberry.png'
import burger from '../images/burger.png'
import strawberrycake from '../images/strawberry-cake.png'
import salad from '../images/salad.png'
import pizza from '../images/pizza.png'
import friedchicken from '../images/fried-chicken.png'
import fast from '../images/fast.png'
import homeimg from '../images/homeimg.png'
import tomato from '../images/tomato.png'
import bay from '../images/bay.png'
import coldrink from '../images/cold-drink.png'
import french from '../images/french-fries.png'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const Hometopbaner = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2  '>
        <div className=' pt-12 pl-4  '>
            
                  <div className='flex justify-start items-center  px-2 py-1 gap-2 rounded-full md:w-[50%]'>
                      <p className='text-base text-orange-500 font-semibold'>Fast Delivery</p>
                      <div className='w-6 h-6 bg-white rounded-full '>
                      <img src={fast} alt="fast" className='w-full h-full object-contain' />
                      </div>
                  </div>
             
                      <h1 className='font-extrabold text-[3rem] leading-tight mt-8'>The Best</h1>
                      <h1 className='font-extrabold text-[3rem] leading-tight'>Delicious food</h1>
                      <h3 className='md:tracking-[.61em] tracking-[.20em]'>that meets you needs</h3>
              <div className='grid grid-cols-5  mt-10 w-full md:w-auto'>
                 
                 <div className=' rounded-[30px] '>
                      <img src={burger} alt="burger" className=' h-12' />
                 </div>

                 <div className=' rounded-[30px]'>
                      <img src={strawberrycake} alt="strawberrycake" className=' h-12' />
                 </div>

                 <div className=' rounded-[30px] '>
                      <img src={salad} alt="salad" className=' h-12' />
                 </div>

                 <div className=' rounded-[30px] '>
                      <img src={pizza} alt="pizza" className=' h-12' />
                 </div>

                 <div className=' rounded-[30px] '>
                      <img src={friedchicken} alt="friedchicken" className=' h-12' />
                 </div>
              </div>

              <div >
                    <Link to='/Allfood'><button className='mt-8 rounded-md bg-gradient-to-br from-orange-100
                     to-orange-500 
                    w-full px-4 py-2 hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto font-extrabold'>
                    Order Now</button></Link>
              </div>
              
        </div>
        <div className=' flex flex-1 items-center relative'>

                    <img src={homeimg} alt="homeimg" className=' ml-auto md:h-420' />
                    {/* <motion.img 
                     initial={{ x:0 }}
                     animate={{x:[-5, 5,-5]}}
                     transition={{
                         repeat:Infinity,
                         duration:6,
                         ease:"linear"
                     }}
                     src={strawberry} alt="strawberry" className='h-12 absolute :top-10 :left-56' /> */}
                    {/* <motion.img
                    initial={{ x:0 }}
                     animate={{x:[-5, 5,-5]}}
                     transition={{
                         repeat:Infinity,
                         duration:6,
                         ease:"linear"
                     }}
                     src={tomato} alt="tomato" className='h-5 absolute md:top-16 md:left-44' />
                    <motion.img 
                    initial={{ y:0 }}
                     animate={{y:[-5, 5,-5]}}
                     transition={{
                         repeat:Infinity,
                         duration:6,
                         ease:"linear"
                     }}
                    src={tomato} alt="tomato" className='h-8 absolute md:top-28 md:left-52' />
                    <motion.img
                    initial={{ y:0 }}
                     animate={{y:[-5, 5,-5]}}
                     transition={{
                         repeat:Infinity,
                         duration:6,
                         ease:"linear"
                     }}
                     src={bay} alt="bay" className='h-4 absolute md:top-10 md:left-14' />
                    <motion.img
                    initial={{ x:0 }}
                     animate={{x:[-5, 5,-5]}}
                     transition={{
                         repeat:Infinity,
                         duration:6,
                         ease:"linear"
                     }}
                     src={bay} alt="bay" className='h-7 absolute md:top-20 md:left-24' />
                    <motion.img
                    initial={{ y:0 }}
                     animate={{y:[-5, 5,-5]}}
                     transition={{
                         repeat:Infinity,
                         duration:6,
                         ease:"linear"
                     }}
                     src={bay} alt="bay" className='h-3 absolute md:top-32 md:left-14' />

                    <motion.img
                    initial={{ y:0 }}
                     animate={{y:[-5, 5,-5]}}
                     transition={{
                         repeat:Infinity,
                         duration:6,
                         ease:"linear"
                     }}
                     src={coldrink} alt="coldrink" className='h-10 absolute md:bottom-10 md:right-10' />

                    <motion.img
                    initial={{ x:0 }}
                     animate={{x:[-5, 5,-5]}}
                     transition={{
                         repeat:Infinity,
                         duration:4,
                         ease:"linear"
                     }}
                     src={french} alt="french" className='h-10 absolute md:bottom-16 md:left-52' />

               <motion.div 
               initial={{ y:0 }}
                     animate={{y:[-10, 1,-10]}}
                     transition={{
                         repeat:Infinity,
                         duration:2,
                         ease:"linear"
                     }}
               className='bg-white rounded-[50%] p-5 absolute -bottom-7 border-4  border-solid  border-orange-500 right-28 md:right-40 '>
                    <p className='font-extrabold text-2xl md:3xl'>30%</p>
                    <p className='font-extrabold text-3xl md:4xl'>off</p>
               </motion.div> */}
        </div>
     </div>
  )
}

export default Hometopbaner