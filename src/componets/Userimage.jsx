import React from 'react'
import users from '../images/users.png'
import { motion } from "framer-motion"
import { UseUserContext } from '../context/Usercontex'


const Userimage = () => {
    const {user,login} = UseUserContext();
   
    console.log(login)
    console.log(user)
    

  return (
    <div>
    <motion.img whileTap={{scale:0.6}} src={user ? user.photoURL : users} alt="user"  
             className='w-8 min-w-[32px] h-8 min-h-[32px] drop-shadow-2xl cursor-pointer rounded-full' 
          onClick={login} />
    </div>
  )
}

export default Userimage