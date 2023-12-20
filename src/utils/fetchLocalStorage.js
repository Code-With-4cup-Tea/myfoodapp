
export const fetchLocalStorage= ()=>{
     const fetchdata = localStorage.getItem("datastore") !=="undefined"
     ? JSON.parse(localStorage.getItem("datastore")) : localStorage.clear();

     return fetchdata;
};




export const fetchLocalCart= ()=>{
     const cartinfo = localStorage.getItem("cartitem") !=="undefined"
     ? JSON.parse(localStorage.getItem("cartitem")) : localStorage.clear();

     return cartinfo ? cartinfo :[];
};