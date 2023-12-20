import React, { useEffect } from 'react'
import Header from './componets/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './componets/Home'
import CreateItem from './componets/CreateItem'
import { AnimatePresence } from "framer-motion"
import { UseUserContext } from './context/Usercontex'
import { getAllFoodItems } from './utils/firebaseFunction'
import { ACTION_TYPE } from './reducer/Userrreducer'
import Allfood from './componets/Allfood'
import Cartpage from './componets/Cartpage'

console.log("this is app.jsx")
const App = () => {
  const {user,foodItems,dispatch,login,active,logout,setActive,cartShow} = UseUserContext();

// fetchData function use for getdata from getallfooditems functin useffect useing when website load
// one time fetchdata function call ho jaye than ek data load ho jaye
//jab jab website load hogi tab tab fooditems ke details firbase se load ho key data main a jayga

  const fetchData = async()=>{
    await getAllFoodItems().then((data)=>{
      // console.log(data)
      dispatch({
        type:ACTION_TYPE.SET_FOOD_ITEMS,
        foodItems:data,
      })
    })
  }
//for one time time function when page load
  useEffect(()=>{
    fetchData()
  },[])
  
  
  return (
    <> <AnimatePresence>
        <div className='w-full h-auto bg-primary flex flex-col'>
              <Header/>
              {
      cartShow && (
        <Cartpage/>
      )
    }
            <main className='mt-24 p-8 w-full'>
              <Routes>
                  <Route path='/*' element={<Home/>}/>
                  <Route path='/createitem' element={<CreateItem/>}/>
                  <Route path='/allfood' element={<Allfood/>}/>
              </Routes>
            </main>
        </div>
      </AnimatePresence>
    </>
  )
}

export default App