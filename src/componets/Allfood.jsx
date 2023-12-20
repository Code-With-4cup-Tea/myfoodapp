import React from 'react'
import { motion } from 'framer-motion'
import {FaRupeeSign} from 'react-icons/fa'
import { UseUserContext } from '../context/Usercontex'
import { ACTION_TYPE } from '../reducer/Userrreducer'
import { useState ,useEffect} from 'react'
import { categories } from './data'

const Allfood = () => {
    const {user,foodItems,dispatch,cartItems} = UseUserContext();
    const [foodlist,setFoodlist]  = useState()
    const [filteredProducts, setFilteredProducts] = useState();
    console.log("filteredProducts",filteredProducts)



    const addToCart = (itemsDetail)=>{
      if(!cartItems.find((added)=>added.id === itemsDetail.id)){
        dispatch({
          type:ACTION_TYPE.SET_CART_ITEMS,
          cartItems:[...cartItems,itemsDetail]
        });
        setFoodlist(cartItems)
      }else{
        alert("🍔This Food Already Added🍔")
      }
      
  }

  // for local storage 
  //when setCartlist update than local storage update 
  useEffect(()=>{
      localStorage.setItem("cartitem",JSON.stringify(cartItems))
  },[foodlist])
  console.log("foodItems",foodItems)

  // for filter serach item

  const updateFilterValue = (event)=>{
         //  console.log(event.target.value)
          let inputext = event.target.value
          console.log("inpute " ,inputext)
        

         let filteredItem = foodItems.filter(allItem=>
                allItem.title.toLowerCase().includes(inputext.toLowerCase())
         )
        console.log("filterd ji",filteredItem)
      setFilteredProducts(filteredItem)

      

  }

//for clear all

const clearAll = ()=>{
   setFilteredProducts()
}
  
  return (
      <div className='flex flex-col w-full h-auto  '>
               <div className='flex flex-col justify-center gap-5 items-center '>
                        <div className='text-xl font-semibold text-textColor '>
                                 
                        </div>
                        <div className='full p-2 md:hidden'>

                        {/*        input box      mobile             */}

                            <form onSubmit={(e)=>e.preventDefault()}>
                            <input type="text" placeholder='Search Product....'
                            name='texxt'
                           //  value=''
                            onChange={updateFilterValue}
                            className=' text-base font-semibold p-1 border-none outline-none w-full
                            rounded-md' />
                            </form>
                        </div>
                        

               </div>
               <div className='w-full h-auto flex mt-6  '>
               
                   <div className='md:flex gap-3 flex-col  md:w-[20%] fixed top-64 hidden' >
                   <div className='md:w-[80%] p-2  md:flex '>
                             <form onSubmit={(e)=>e.preventDefault()}>
                                {/*        input box  pc                 */}
                             <input type="text" placeholder='Search Product....'
                             name='texxt'
                           //  value=''
                              onChange={(event)=>updateFilterValue(event)}
                            className=' text-base font-semibold p-1 border-none outline-none w-full
                            rounded-md' />
                             </form>
                        </div>
                            <div className=' flex flex-col gap-2'>
                                  <p className='text-base font-semibold'>Category</p>
                                  <div className=' flex flex-col items-start gap-2
                                  font-light '>
                                      {
                                       categories && categories.map((currentItem)=>{
                                            return (
                                                   <button key={currentItem.id}
                                                   value={currentItem.name}
                                                   type='button'
                                                   onClick={(event)=>updateFilterValue(event)}
                                                   className='hover:text-orange-500'>
                                                        {
                                                         currentItem.name
                                                        }
                                                   </button>
                                            )
                                       })
                                      }
                                  </div>
                            </div>
                            <div> 
                                 
                                  <input type="range" min="50" max="400"/>
                            </div>
                            <div className='text-base p-2 rounded-md bg-red-500 text-white 
                            font-semibold
                            w-20 '>
                                    <button
                                      onClick={clearAll}
                                    >Clear All</button>
                            </div>
                   </div>
                   <div>

                   </div>

                   {/*                    product listing         */}
                   <div className='md:w-[80%] w-full  gap-4 flex flex-wrap md:absolute md:right-0
                    md:top-64 
                   justify-center'>
            
            {
               foodItems && ( filteredProducts || foodItems).map((itemsDetail)=>
                
                <div key={itemsDetail.id}
            className='w-300 min-w-[250px] md:min-w-[300px] md:w-40 h-auto 
             shadow-md backdrop-blur-lg border border-1 hover:shadow-2xl
            border-gray-200 rounded-md flex justify-center items-center flex-col '>
                    <div  className='w-full overflow-hidden rounded-md cursor-pointer '>
                    <motion.img 
                     whileHover={{scale:1.1}}
                    src={itemsDetail.imageURL}
                     alt={itemsDetail.title} 
                    
                     />
                    </div>
                    <div className='w-full flex justify-center items-center flex-col'>
                    <p className='text-lg font-semibold my-3'>{itemsDetail.title}</p>
                    <p className='text-base font-semibold my-3'>{itemsDetail.description}</p>
                    
                    </div>
                    <div className='w-full flex justify-between'>
                    <p className='text-lg font-semibold my-3 flex items-center'>
                    <FaRupeeSign/>{itemsDetail.price}</p>
                    <motion.button 
                    // onClick={()=>addToCart(burgerDetail)}
                     whileTap={{scale:0.75}}
                    className=' bg-gradient-to-br from-orange-600 to-orange-300 text-white px-10 
                     rounded-md font-semibold'
                     onClick={()=>addToCart(itemsDetail)}
                     >ADD</motion.button>
                    </div>
                </div>
                
                )
            }
          </div>
      </div>
</div>
  )
}

export default Allfood