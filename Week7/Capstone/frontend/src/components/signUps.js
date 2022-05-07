import axios from "axios"
import { useState } from "react"
import SignUpsForm from "./signUpsForm"

const initInputs = { name: "", notes: "" }

export default function SignUps () {
    const [inputs, setInputs] = useState(initInputs)

    function signup(cred){
        axios.post("/marvel", cred)
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
        signup(inputs)
    }

    return (
        <div className="signups">
            <SignUpsForm 
                handleChange={handleChange}
                handleSubmit={handleSignup}
                inputs={inputs}
                btnText="Sign up"
            />
        </div>
    )
}