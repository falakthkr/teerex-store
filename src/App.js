import './App.css';
import { getData } from "./api/actions";
import { useDispatch } from "react-redux";
import { useEffect, useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const [storeData,setStoreData] = useState([])
  useEffect(()=>{
    dispatch(getData()).then((res)=>{
      setStoreData(res.payload.storeData)
    });
  })
  return (
    <div className="App">
      {storeData.map((item)=>{
        return(
          <div>
            <ul style={{backgroundColor:`${item.color}`}}>
              <li>currency: {item.currency}</li>
              <li>gender: {item.gender}</li>
              <li>name: {item.name}</li>
              <li>price: {item.price}</li>
              <li>quantity: {item.quantity}</li>
              <li>type: {item.type}</li>
            </ul>
          </div>
        )
      })}
    </div>
  );
}

export default App;
