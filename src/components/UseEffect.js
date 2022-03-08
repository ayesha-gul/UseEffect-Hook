import React, { useEffect, useState } from 'react'

const UseEffect = () => {
const[Restype,setRestype]=useState('Posts');
console.log("render");

useEffect(() => {
    document.title = `${setRestype}`;
   console.log("resource changed")
},[Restype])


  return (
    <div>
         <h1>Use Effect</h1>
        {/* whenever we want to render any state only once or want to use side effects we use UseEffect hook */}
         
       <button onClick={() => setRestype("posts")}>Posts</button>  
       <button onClick={() => setRestype("users")}>User</button>
       <button onClick={() => setRestype("Comments")}>Comments</button>
       <h1>{Restype}</h1>
    </div>
  )
}

export default UseEffect