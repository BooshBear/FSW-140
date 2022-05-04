import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [data, setData] = useState([])
  const getMarvel = () => {
      axios.get('/marvel')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
  };
    
  useEffect(() => {
    getMarvel();
  });
    
  const dataList = data.map(e =>
  <p>{JSON.stringify(e)}</p>)
  
  return (
    <>
      <h1>Welcome This Is Data From PostgreSQL</h1>
      <div>
        {dataList}
      </div>
    </>
  );
}

export default App;
