import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [data, setData] = useState([]);
 const [nam,setnames] = useState([]);
//  const navigateTo = () => history.push('Appintegrationdata');
  useEffect(() => {
    
const fetchData = async () => {
  const result = await axios(
    'https://api.edamam.com/api/nutrition-data?app_id=58da79a4&app_key=f3d8be4d4397cb510b3b3897dd8f4aba&ingr=1%20large%20apple',
  );
console.log("result",result.data);
  setData(result.data);
  setnames(result.data.dietLabels);
  setnames(result.data.healthLabels);
};

fetchData();
  }, []);
 
  return (
    <>
    <ul>
      <b style = {{fontSize:23,color:"green"}}>dietLabels</b>
      <li>   {data.dietLabels} </li>
      <b style = {{fontSize:23,color:"green"}}>healthLabels</b>
      {nam.map(function(name, index){
                    return <li key={ index }>{name}</li>;
                  })}
       
</ul>

    </>
  );
}
 
export default App;



