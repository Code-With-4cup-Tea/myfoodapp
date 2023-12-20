
import logo from '../images/logo.png'
import {BiCart} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Userimage from './Userimage'
import {LiaUserEditSolid} from 'react-icons/lia'
import {AiOutlineLogout} from 'react-icons/ai'
import { UseUserContext } from '../context/Usercontex'
import { motion } from "framer-motion"


const Header = () => {

    const {user,active,logout,setActive,showCart,cartItems} = UseUserContext();
    console.log("active",active)
    console.log(logout)
  return (
   <> 
<header className='fixed w-screen z-50 p-3 px-4 md:p-6 md:px-16 bg-slate-100'>
    <div className='hidden md:flex h-full w-full items-center justify-between' >
        <Link to='/' className='flex justify-center items-center gap-2'>
                 <img src={logo} alt="logo" className='w-12 object-cover'/>
                 <p className= 'text-orange-500 font-bold'>Bhukha<span className='text-yellow-500'> 
                 शेर</span></p>
        </Link>
    <div className='flex items-center gap-8 '>
        <ul className='flex items-center gap-8'>
               <Link to='/'>
               <li className='text-base text-textColor hover:text-orange-500 
                duration-100 transition-all ease-in-out cursor-pointer' >Home</li>
               </Link> 
               <Link to='/Allfood'><li className='text-base text-textColor hover:text-orange-500
                duration-100 transition-all ease-in-out cursor-pointer' >All Food</li></Link> 
                <li className='text-base text-textColor hover:text-orange-500 
                duration-100 transition-all ease-in-out cursor-pointer' >About_Me</li>
                
        </ul>
    <div className='flex items-center relative'>
                <BiCart className=' text-2xl cursor-pointer'
                    onClick={showCart}
                                     />
                { //if cart items value greater than 0 than show counting of carts
                    cartItems && cartItems.length > 0 &&(
                    <p className='text-sm  text-white font-semibold bg-orange-500 rounded-full 
                    w-4 text-center absolute -top-2 -right-0.5'>{cartItems.length}</p>
                     )
                }
    </div>

            <div className='relative'>
                <Userimage  />
                {
                    active && (
                        <motion.div 
                            initial={{opacity:0, scale:0.6}}
                            animate={{opacity:1, scale:1}}
                             exit={{opacity:0, scale:0.6}}
                            className='bg-gray-50 rounded-xl flex flex-col gap-4 px-3 py-2 
                            absolute shadow-xl  -right-10 top-9'>
                    {
                    user && user.email ==="codewith4cuptea@gmail.com" && (
                        <Link to={"/createitem"}>
                               <button className='flex justify-center items-center gap-1 
                                hover:text-orange-500' onClick={()=>setActive(false)}>Add_Item 
                                <LiaUserEditSolid/></button>
                        </Link>
                             )
                    }
                    <button className='flex justify-center items-center gap-1  hover:text-orange-500'
                     onClick={logout}>Logout <AiOutlineLogout/></button>
                    </motion.div>
                                )
                }
            </div>
                </div>        
                    </div>

        {  /* mobile menu*/ }
            <div className='flex items-center justify-between md:hidden w-full h-full  bg-slate-100'>
                <Link to='/' className='flex justify-center items-center gap-2'>
                    <img src={logo} alt="logo" className='w-12 object-cover'/>
                    <p className= 'text-orange-500 font-bold'>Bhukha<span className='text-yellow-500'>
                     शेर</span></p>
                </Link>

            <div className='flex gap-6'>
                <div className='flex items-center relative'>
                    <BiCart className=' text-2xl cursor-pointer'
                        onClick={showCart}
            />
    { //if cart items value greater than 0 than show counting of carts
        cartItems && cartItems.length > 0 &&(
            <p className='text-sm  text-white font-semibold bg-orange-500 rounded-full w-4 
            text-center absolute -top-2 -right-0.5'>{cartItems.length}</p>
                )
                  }
        </div>
            <div className='relative'>
                            
                <Userimage  />

                    {
                        active && (
                            <motion.div 
                                initial={{opacity:0, scale:0.6}}
                                animate={{opacity:1, scale:1}}
                                exit={{opacity:0, scale:0.6}}
                                className='bg-gray-50 rounded-xl flex flex-col gap-4 px-3 py-2 
                                absolute shadow-xl  -right-1 top-9'>
                    {
                        user && user.email === "itshakti2017@gmail.com" && 
                        (
                            <Link to={"/createitem"}>
                                <button className='flex justify-center items-center gap-1 
                                 hover:text-orange-500' onClick={()=>setActive(false)}>Add_Item 
                            <LiaUserEditSolid/></button>
                            </Link>
                        )
                    }
                    <ul className='flex  gap-8 flex-col'>
                        <li className='text-base text-textColor hover:text-orange-500 duration-100 
                        transition-all ease-in-out cursor-pointer' >Home</li>
                        <li className='text-base text-textColor hover:text-orange-500 duration-100 
                        transition-all ease-in-out cursor-pointer' >Menu</li>
                        <li className='text-base text-textColor hover:text-orange-500 duration-100 
                        transition-all ease-in-out cursor-pointer' >About</li>
                        <li className='text-base text-textColor hover:text-orange-500 duration-100 
                        transition-all ease-in-out cursor-pointer' >Service</li>

                    </ul>
                    <button className='flex justify-center items-center gap-1  hover:text-black
                     bg-orange-500 text-white hover:rounded-md transition-all ease-in-out duration-200 
                     px-3 py-1' onClick={logout}>Logout <AiOutlineLogout/></button>
                        </motion.div>
                           )
                    }
                        </div>
                            </div>                     
         </div>
              
</header>
          
   </>
  )
}

export default Header