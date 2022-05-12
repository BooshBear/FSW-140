import axios from "axios"
import { useState } from "react"
import SignUpsForm from "./signUpsForm"



export default function SignUps ({_id, name, year, notes, setEditToggle, btnText}) {
    const initInputs = {name: name || "", year: year || "", notes: notes || ""}
    const [inputs, setInputs] = useState(initInputs)

    function signup(cred){
        axios.post("/marvel", cred)
          .then(res => res.send)
          .catch(err => console.log(err))
    }

    function editAvenger(cred) {
        axios.put(`/marvel/${_id}`, cred)
        .then(res => res.send)
        .catch(err => console.log(err))
    }

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
          ...prevInputs,
          [name]: value
        }))
    }
    
    function handleSignup(e){
        e.preventDefault()
        if (!year == '') {
            editAvenger(inputs)
            setEditToggle(prevToggle => !prevToggle)
        } else {
            console.log(inputs)
            signup(inputs)
        }
    }

    return (
        <div className="">
            <div className="flex justify-center">
                <SignUpsForm 
                    handleChange={handleChange}
                    handleSubmit={handleSignup}
                    inputs={inputs}
                    btnText={btnText || "Sign Up"}
                />
            </div>
        </div>
    )
}