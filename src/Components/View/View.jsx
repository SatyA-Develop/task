import axios from 'axios'
import React, { useEffect , useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import './View.css'


const View = () => {

    const[user,setuser] = useState([])
  
    useEffect(() => {
      axios.get(`http://localhost:3003/users/${id}`)
     .then((res)=>{
      setuser(res.data);
     })
    }, [])

    const {id}= useParams()
  return (
    <div>
      {
        user && (
           <div className='view-page' style={{gap: "2rem"}}>
             <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <Link  style={{textDecoration:"none"}} to={'/'}><button style={{color:"#000", fontSize: "13px"}} className="add-user-btn add-btn">Back to Home</button></Link>
           </div>
            )
      }

    </div>
  )
}

export default View
