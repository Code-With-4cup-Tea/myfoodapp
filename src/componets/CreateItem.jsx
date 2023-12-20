import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {IoFastFoodSharp} from 'react-icons/io5'
import { categories } from './data'
import Loader from './Loader'
import {BiSolidCloudUpload} from 'react-icons/bi'
// import {MdDelete} from 'react-icons/md'
import {TbFileDescription} from 'react-icons/tb'
import {FaRupeeSign} from 'react-icons/fa'
import { storage } from '../firebase.config'
import { deleteObject, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { ref } from 'firebase/storage'
import { saveItems } from '../utils/firebaseFunction'
import { UseUserContext } from '../context/Usercontex'
import { getAllFoodItems } from '../utils/firebaseFunction'
import { ACTION_TYPE } from '../reducer/Userrreducer'




const CreateItem = () => {
  const {user,foodItems,dispatch,login,active,logout,setActive} = UseUserContext();

  const [title,setTitle]             = useState("")
  const [fields,setFields]           = useState(false)
  const [alert,setAlert]             = useState("danger")
  const [msg,setMsg]                 = useState("Something Wrong Try Again")
  const [img, setImg]                = useState(null)
  const [loading,setLoading]         = useState(false)
  const [price,setPrice]             = useState("")
  const [description,setDescription] = useState("")
  const [category,setCategory]       = useState("")
  const [imgdetail,setImgdetail]     = useState("first image")

  const uploadimage = (e)=>{
        setLoading(true);
        const imagedetails = e.target.files[0];//[0] because we dose not uploade multiple image we only upload single image
        // console.log(imagedetails)
        setImgdetail(imagedetails.name); // this is use for print after image uplad
        const firebasestorageRef = ref(storage,`Images/${Date.now()}-${imagedetails.name}`);
        //firebasestorageref use we are storeing image in firebase in images folder with date and image name for uniuqe
        const uploadTask =uploadBytesResumable(firebasestorageRef,imagedetails); //help in uploading image

        uploadTask.on('state_changed',(snapshot)=>{
          const uploadProgress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
          // image loading progress
        },
        (error)=>{
          console.log(error);
            setFields(true);
            setMsg("May be some error try again");
            setAlert("danger");
      setTimeout(()=>{
            setFields(false);
            setLoading(false)
      },4000)
        },
        ()=>{
          getDownloadURL(uploadTask.snapshot.ref).then(downloadURL=>{
            setImg(downloadURL);
            setLoading(false);
            setFields(true);
            setMsg("image uploading sucessfully ")
            setAlert("success");
            setTimeout(() => {
              setFields(false)
            }, 4000);
    
          })
        })


  }
// for saving data to firebase
const savedata = ()=>{
  setLoading(true);
  try{
    if((!price || !img || !description || !categories || !title)){
     
      setFields(true);
      setMsg("must fill an empty box");
      setAlert("danger");
      setTimeout(()=>{
            setFields(false);
            setLoading(false)
      },4000)
    }else{
        const data = {
          id : `${Date.now()}`,
          title : title,
          imageURL: img,
          category:category,
          price:price,
          description:description,
          qty:1

        }
        saveItems(data);
        setLoading(false);
      setFields(true);
      setMsg("data uploaded sucessfully ")
      clearData()
      setAlert("success");
      
      setTimeout(() => {
        
        setFields(false)
      }, 4000);
//when data success full uploaded than call bellow function
    
    }

 
  }catch(error){
    console.log(error);
    setFields(true);
    setMsg("May be some error try again");
    setAlert("danger");
    setTimeout(()=>{
          setFields(false);
          setLoading(false)
    },4000)
  }
  fetchData()
}

const clearData = ()=>{
  setTitle("");
  setImg(null);
  setPrice("");
  setCategory("Select Category");
  setDescription("");

}

// below code run when data uplade succefull than all data fetch to fooditems initial state after that

const fetchData = async()=>{
    await getAllFoodItems().then((data)=>{
      // console.log(data)
      dispatch({
        type:ACTION_TYPE.SET_FOOD_ITEMS, 
        foodItems:data,
      })
    })
  }
  

  return (
    <div className='w-full min-h-screen flex justify-center items-center '>
          <div className='w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex 
          justify-center items-center flex-col gap-4'>
              {
                fields && (
                        <motion.p 
                         initial={{opacity:0}}
                         animate={{opacity:1}}
                         exit={{opacity:0}}
                         className={`w-full text-center p-2 rounded-lg text-white font-bold 
                         ${alert ==="danger" ?
                         "bg-red-500" : "bg-green-500"

                         }`}>
                         {msg}</motion.p>
                )
              }
              <div className='flex items-center border-b border-orange-300  py-2 w-full gap-2'>
                    <IoFastFoodSharp className='text-lg text-orange-700'/>
                    <input type="text" placeholder='Enter Product Title.....' required 
                    className='w-full h-full text-lg bg-transparent font-semibold
                    border-none outline-none placeholder:text-gray-400 text-textColor  ' 
                     onChange={(e)=>setTitle(e.target.value)}
                     value={title} />
                </div>

                <div className='w-full'>
                      <select onChange={(e)=>setCategory(e.target.value)}
                       className='outline-none text-base w-full border-b-2 border-orange-300
                       p-2 rounded-md cursor-pointer'>
                          <option value="other" className='bg-white'>Select Category</option>
                          {
                            categories && categories.map(item=>(
                                <option value={item.urlParamName} key={item.id}
                                className='border-0 text-base outline-none capitalize bg-white 
                                  text-orange-700 hover:text-textColor'
                                >
                                {item.name}</option>
                            ))
                          }
                      </select>

                </div>
                <div className='group flex justify-center items-center w-full h-225 md:h-420 border-2 
                              border-dotted
                                border-gray-300 rounded-lg cursor-pointer'>
                         {
                          loading ? (<>
                            <Loader/>
                          </>):(<>
                             {
                              !img ? (<>
                                <label className='w-full h-full flex flex-col items-center justify-center'>
                                      <div className='w-full h-full flex flex-col items-center
                                       justify-center'>
                                              <BiSolidCloudUpload className='hover:text-orange-400 
                                              text-3xl cursor-pointer transition-all ease-in-out duration-100'/>
                                              
                                              <p className='text-2xl text-gray-500 text-center'>
                                              Click here to upload </p>

                                        </div>
                                        <input type="file" name='uploadimage' accept='image/*' 
                                        className='w-0 h-0'
                                          onChange={uploadimage}
                                        />
                                </label>
                              </>):(<>
                                   <div className='relative h-full ' >
                                   <img src={img} alt="uploaded image" className='w-full h-full object-cover'/>
                                   <button className='absolute bottom-0 right-0 p-2 
                                          bg-red-500 bg-opacity-[30%]  text-xl  outline-none 
                                           hover:shadow-md duration-500 transition-all 
                                           ease-in-out  w-full text-white rounded-md'
                                        
                                         type='button' >{imgdetail} uploaded</button>
                                   </div>
                              </>)
                             }
                          </>)
                         }
                </div>
                <div className='flex items-center border-b border-orange-300  py-2 w-full gap-2'>
                                    <TbFileDescription className='text-lg text-orange-700'/>
                                    <input type="text" placeholder='Enter Desription' required 
                                    className='w-full h-full text-lg bg-transparent font-semibold
                                    border-none outline-none placeholder:text-gray-400 text-textColor  ' 
                                    onChange={(e)=>setDescription(e.target.value)}
                                    value={description} />
                           </div>
                           <div className='flex items-center border-b border-orange-300  py-2 w-full gap-2'>
                                    <FaRupeeSign className='text-lg text-orange-700'/>
                                    <input type="number" placeholder='Enter Product Price' required 
                                    className='w-full h-full text-lg bg-transparent font-semibold
                                    border-none outline-none placeholder:text-gray-400 text-textColor  ' 
                                    onChange={(e)=>setPrice(e.target.value)}
                                    value={price} />
                           </div>
                           <div className='w-full flex  items-center '> 
                               <button className='text-white bg-emerald-500 font-semibold rounded-lg ml-0 
                               md:ml-auto w-full  text-lg border-none outline-none px-12 py-2'
                                onClick={savedata}>Save Data</button>
                           </div>
          </div>
    </div>
  )
}

export default CreateItem