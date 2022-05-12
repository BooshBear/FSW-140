import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import SignUps from './signUps';

export default function ListAvengers() {
    const [data, setData] = useState([])
    const [editToggle, setEditToggle] = useState(false);

    const getMarvel = () => {
        axios.get('/marvel')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    };

    const deleteMarvel = (_id) => {
        axios.delete(`/marvel/${_id}`)
        .then(res => res.send)
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getMarvel();
    }, [editToggle]);

    function capFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    const dataList = data.map(e =>{
        const aryKeys = Object.keys(e);
        const aryValues = Object.values(e);

        const buttConnect = () => {
            deleteMarvel(aryValues[0])
            getMarvel();
        }

        return (
        <div className='flex flex-col items-center' key={uuidv4()}>
            {!editToggle ? 
            <>
                <p className="flex flex-col w-[300px] mt-8 p-4 border-2 border-purple-700 rounded-md ">
                    {(aryKeys[0])}: {aryValues[0]} <br/>
                    {capFirstLetter(aryKeys[1])}: {aryValues[1]} <br/>
                    {capFirstLetter(aryKeys[2])}: {aryValues[2]} <br/>
                    {capFirstLetter(aryKeys[3])}:<br/>{aryValues[3]} <br/>
                    <button className="ml-20 mr-20 mt-3 pl-1 pr-1 p-[2px] border-2 border-purple-700 rounded-xl hover:bg-purple-700 hover:text-white" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                    <button className="ml-20 mr-20 mt-3 pl-1 pr-1 p-[2px] border-2 border-purple-700 rounded-xl hover:bg-purple-700 hover:text-white" onClick={() => buttConnect()}>Delete</button>
                </p>
            </>    
            :
            <>
                <SignUps
                _id={aryValues[0]}
                name={aryValues[1]}
                year={aryValues[2]}
                notes={aryValues[3]}
                btnText={"Submit Edit"}
                setEditToggle={setEditToggle}
                />
                <button className="self-center w-40 mt-3 p-[2px] border-2 border-purple-700 rounded-xl hover:bg-purple-700 hover:text-white" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Cancel Edit</button>  
            </>
            }
            </div>
    )})

    return (
        <div>
            {dataList}
        </div>
    )
}