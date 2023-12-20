import React, { useEffect, useState } from 'react'
import {AiOutlineMinusCircle,AiOutlinePlusCircle} from 'react-icons/ai'
import {FaRupeeSign} from 'react-icons/fa'
import { motion } from 'framer-motion'
import { UseUserContext } from '../context/Usercontex'
import { ACTION_TYPE } from '../reducer/Userrreducer'
let filterdItems = [];

const Cartitems = ({cartproduct,flag,setFlag}) => {
    //for qty
    const {cartItems,dispatch} = UseUserContext();
    //item.qty this comes form updateqty function
    const [qty,setQty] = useState(cartproduct.qty)
    // const [update,setUpdate] = useState([])

    //for update cartiems with action 
     //for update cart value
     const updateCartItems = ()=>{
        localStorage.setItem("cartitem",JSON.stringify(filterdItems))
        dispatch({
          type:ACTION_TYPE.SET_CART_ITEMS,
          cartItems:filterdItems
        });
       
    }
    const updateQty =(action,id)=>{
         if(action == "add"){
            //for increase qty number
              setQty(qty+1)
            // if selected item id match with map product id than qty will update in cartitems storage
            cartItems && cartItems.map((item)=>{
                 
                if(item.id === id){
                        // than items qty increase with 1
                        item.qty += 1;
                        setFlag(flag+1)
                }

    })
    updateCartItems()
         }else{
            if(qty == 1){
                filterdItems =cartItems.filter((item) => item.id !== id);
                setFlag(flag+1)
                updateCartItems()
            }else{
                setQty(qty-1);
                cartItems && cartItems.map((item)=>{
                 
                    if(item.id === id){
                            // than items qty increase with 1
                            item.qty -= 1;
                            setFlag(flag+1)
                    }
     
        })
        updateCartItems()
            }
         }
           
    }

useEffect(()=>{
      filterdItems = cartItems;
},[qty,filterdItems])
    //for local storage
    // useEffect(()=>{
    //     localStorage.setItem("cartitem",JSON.stringify(update))
    // },[qty])
  
  return (
    <div className='w-full p-1 px-2 rounded-lg bg-slate-800 flex justify-start 
                        items-center gap-3'>
                   
                        <img src={cartproduct.imageURL}
                        alt="" className='w-20 h-20 max-w-[60px] rounded-full object-contain'/>

                        <div className='flex flex-col gap-2'>
                            <p className='text-base text-white font-extrabold'>{cartproduct.title}</p>
                            <p className='text-base text-white font-extrabold flex justify-center
                            items-center'><FaRupeeSign/>{(cartproduct.price)*qty}</p>

                        </div>     

                        <div className='flex items-center gap-2 ml-auto cursor-pointer'>
                            <motion.div
                            whileTap={{scale:0.75}}>
                                <AiOutlineMinusCircle className='text-red-400 text-2xl'
                                   onClick={()=>updateQty("remove",cartproduct?.id)}
                                />
                            </motion.div>
                            <p className='w-5 h-5 rouded-sm bg-slate-100 flex 
                            justify-center  items-center'>{qty}</p>
                            <motion.div
                            whileTap={{scale:0.75}}>
                                <AiOutlinePlusCircle  className='text-green-400 text-2xl'
                                 onClick={()=>updateQty("add",cartproduct?.id)}
                                />
                            </motion.div>
                        </div>       
                                
                           </div>
  )
}

export default Cartitems