import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import './Adduser.css'

const Adduser = () => {
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[phone,setPhone] = useState("")

    const navigate = useNavigate()

    const Submit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3003/users",{
            name: name,
            email: email,
            phone: phone,
        })
        .then(
            navigate('/')
        )
    }
  return (
    <div className='add-user'>
        <form action="">
            <input onChange={(e)=> setName(e.target.value)} value={name} name="name" type="text" placeholder='enter user name' />
            <input  onChange={(e)=> setEmail(e.target.value)} value={email} name="email" type="email" placeholder='enter Email' />
            <input  onChange={(e)=> setPhone(e.target.value)} value={phone} name="phone" type="phone" placeholder='enter Number' />
           <button onClick={Submit} style={{color:"#000"}} className="add-user-btn add-btn">Add user</button>
           <Link to={'/'}>Back to Home</Link>
        </form>
    </div>
  )
}

export default Adduser