import axios from 'axios';
import {useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Edit = () => {

    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[phone,setPhone] = useState("");

    const navigate = useNavigate()

    const[Detail,setDetail] = useState([])
  
    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
     .then((res)=>{
      setName(res.data.name);
      setEmail(res.data.email);
      setPhone(res.data.phone);
     })
    }, [])

    const {id}= useParams()

    const data ={
        name: name,
        email : email ,
        phone : phone ,
    }

    const Update=(e)=>{
        e.preventDefault();
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, data)

        .then(
            navigate("/")
        )
    }
  
  return (
    <div>
          <form action="">
            <input type="text" placeholder='Name' value={name} onChange={(e)=> setName(e.target.value)}  />
            <input type="email" placeholder='Email'  value={email} onChange={(e)=> setEmail(e.target.value)}   />
            <input type="phone" placeholder='Mobile Number'  value={phone} onChange={(e)=> setPhone(e.target.value)}   />
            <button onClick={Update}>Update</button>
        </form>
        <Link to={"/"}>Back to home</Link>
    </div>
  )
}

export default Edit




