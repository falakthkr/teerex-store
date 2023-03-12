import './App.css';
import { getData } from "./api/actions";
import { useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import MediaCard from "./components/Card";
import Grid from '@mui/material/Grid';

function App() {
  const dispatch = useDispatch();
  const [storeData, setStoreData] = useState([])
  useEffect(() => {
    dispatch(getData()).then((res) => {
      setStoreData(res.payload.storeData)
    });
  })
  return (
    <div className="App">
      <Grid style={{padding:"25px"}} container spacing={2}>
        {storeData.map((item) => {
          return (
            <Grid item xs={4}>
              <MediaCard props={item} />
            </Grid>
          )
        })}
      </Grid>
    </div>
  );
}

export default App;
