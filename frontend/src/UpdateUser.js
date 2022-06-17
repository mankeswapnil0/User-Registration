import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";

function Register() {
  
  const params = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const url = `http://localhost:4000/api/v1/user/update/${params.id}`

    const register = async(e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm["name"] = name;
        myForm["email"] = email;
        const config = { headers: {"Content-Type":"application/json"} };
        try {
            await axios.put(url, JSON.stringify(myForm), config)
            setName("");
            setEmail("");
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
        <h1>Update User</h1>
        <form
            className='userForm'
            onSubmit={register}
        >
            <input 
                type="text"
                placeholder='Name'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                type="text"
                placeholder='Email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type='Submit'>
                Submit
            </button>
        </form>
    </div>
  )
}

export default Register