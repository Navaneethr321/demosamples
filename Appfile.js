import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [data, setData] = useState([]);
 const [nam,setnames] = useState([]);
 const navigateTo = () => history.push('Appintegrationdata');
  useEffect(() => {
    
const fetchData = async () => {
  const result = await axios(
    'https://api.edamam.com/api/food-database/v2/parser?ingr=red%20apple&app_id=a0d47957&app_key=1780eeb43c88c71e11d9e5a85e9321ef',);
console.log("result",result.data);
  setData(result.data);
  setnames(result.data.parsed.food);
  setnames(result.data.measures);
};

fetchData();
  }, []);
 
  return (
    <>
    <ul>
      <div style = {{fontSize:23,color:"green"}}>hints</div>
      <li>   {data.parsed.food} </li>
   
      <div style = {{fontSize:23,color:"green"}}>measures</div>
      {nam.map(function(name, index){
                    return <li key={ index }>{name}</li>;
                  })}
       
</ul>

    </>
  );
}
 
export default App;



