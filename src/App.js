'use client'
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [userlist , setUserList] = useState([]);

useEffect(() => {
    axios.get('https://61m2wrb52b.execute-api.eu-north-1.amazonaws.com/dev/media')
    .then(res =>{
      console.log(res);
      setUserList(res.data)
    }).catch(err => {
      console.error(err);
    })
}, [])

  return (
    <main className="flex min-h-screen flex-col p-24">
      {userlist.map((data, index) => (
         <h1 key={index}> full name : {data.full_name} --------------------------------------- with username :{data.username}</h1>
      ))}
    </main>
  );
}

export default App;
