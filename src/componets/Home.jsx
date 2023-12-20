import React from 'react'
import Hometopbaner from './Hometopbaner'
import Homecategory from './Homecategory'
import Burger from './Burger'
import Wraps from './Wraps'
import Breakfast from './Breakfast'
import Thali from './Thali'
import Noodles from './Noodles'
import Sandwiches from './Sandwiches'
// import Cartpage from './Cartpage'
// import { UseUserContext } from '../context/Usercontex'

const Home = () => {
  // const {cartShow} = UseUserContext();
  return (
    <div >

    <Hometopbaner/>
    <Homecategory/>
    <Burger/>
    <Breakfast/>
    <Sandwiches/>
    <Thali/>
    <Wraps/>
    <Noodles/>
    {/* {
      cartShow && (
        <Cartpage/>
      )
    } */}
    
    
    </div>
  )
}

export default Home