import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';

export default function ListAvengers() {
    const [data, setData] = useState([])
    const getMarvel = () => {
        axios.get('/marvel')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    };
    
    useEffect(() => {
        getMarvel();
    }, []);

    function capFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    const dataList = data.map(e =>{
        const aryKeys = Object.keys(e);
        const aryValues = Object.values(e);

        return (
        <div className='card' key={uuidv4()}>
            <p>
                {capFirstLetter(aryKeys[0])}: {aryValues[0]} <br/>
                {capFirstLetter(aryKeys[1])}: {aryValues[1]} <br/>
                {capFirstLetter(aryKeys[2])}:<br/>{aryValues[2]} <br/>
            </p>
        
        </div>
    )})

    return (
        <>{dataList}</>
    )
}