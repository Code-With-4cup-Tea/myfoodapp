import { collection, doc, orderBy, query, setDoc,getDocs } from "firebase/firestore"
import { firestore } from "../firebase.config"

//saving new item in firebase
//setDoc function comes form firestore it help to create new value even there is no any value than create 
// if there is an vlaue than update it
// doc method use to create new document
// firestore coming form firebase.config
// foodItem kiya collection app create karnay ja rahey ho
// fooditem collection allready there than open it and update it

//date.now use for unique id
//data recive as propes form other components
// merge use for merege data jo data hum future main add kargay usay update kar dega agar nahi hoga koi to error kar dega
//doc(firestore,"foodItems",`${Date.now()}`) doc function completed here
//after doc , pased data 

//below function use for saving data in firebase
export const saveItems =async (data)=>{
     await setDoc(doc(firestore,"foodItems",`${Date.now()}`), data,{
        merge:true,});

}

//below function use for fetch data from cloude
export const getAllFoodItems =async ()=>{

        //bellow fetch data form firestore collection fooditems and arranged in descending order
        const items = await getDocs(query(collection(firestore,"foodItems"),orderBy("id","desc")));

        //now we map all data which i fetched from firebase
        return items.docs.map((doc)=>doc.data());
           }