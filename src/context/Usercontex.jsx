import {  createContext, useContext,useReducer, useState} from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config'
import reducer from "../reducer/Userrreducer";
import { ACTION_TYPE } from "../reducer/Userrreducer";
import { fetchLocalStorage,fetchLocalCart} from "../utils/fetchLocalStorage";



const UserContext = createContext(null);

const fetcheddata = fetchLocalStorage();
const fetchCartInfo = fetchLocalCart();

export const initialState ={
    user:fetcheddata,
    foodItems:null,
    cartShow:false,
    cartItems:fetchCartInfo
}

const UserContextProvider = ({children})=>{
    const firebaseauth = getAuth(app);
    const provider = new GoogleAuthProvider();
    
    const [{user,foodItems,cartShow,cartItems},dispatch] = useReducer(reducer,initialState);

    const [active,setActive] = useState(false);
    

     const login = async ()=>{
        if(!user){
        const {user:{providerData}} = await signInWithPopup(firebaseauth,provider)
        dispatch({
            type:ACTION_TYPE.SET_USER,
            user:providerData[0]
        })
        localStorage.setItem("datastore",JSON.stringify(providerData[0]))
        }else{
            setActive(!active)
        }
    }

    const logout = () =>{
          setActive(false);
          localStorage.clear();
          dispatch({
            type:ACTION_TYPE.SET_USER,
            user:null
          });
    }

    const showCart  = () =>{
         
        dispatch({
          type:ACTION_TYPE.SET_CART_SHOW,
          cartShow:!cartShow
        });
  }

    return <UserContext.Provider value={{user,foodItems,dispatch,login,active,logout,setActive,cartShow,showCart,cartItems}} > 
            {children}
    </UserContext.Provider>
}

//custom hooks
const UseUserContext = ()=>{
    return useContext(UserContext);
}

export {UserContextProvider,UseUserContext,UserContext}