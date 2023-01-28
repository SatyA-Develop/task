import axios from 'axios'
import React, { useEffect , useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'
import './View.css'


const View = () => {

    const[user,setuser] = useState([])
    const[isloading,setIsLoading] = useState(true)
  
    useEffect(() => {
      setIsLoading(true)
      axios.get(`http://localhost:3003/users/${id}`)
     .then((res)=>{
      setIsLoading(false)
      setuser(res.data);
     })
    }, [])

    const {id}= useParams()
  return (
    <div>
      {
        user && (
          <div>
            {
              isloading ? <Loading/>:  <div className='view-page' style={{gap: "2rem"}}>
              <h1>{user.name}</h1>
             <p>{user.email}</p>
             <p>{user.phone}</p>
             <Link  style={{textDecoration:"none"}} to={'/'}><button style={{color:"#000", fontSize: "13px"}} className="add-user-btn add-btn">Back to Home</button></Link>
            </div>
            }
          </div>
            )
      }

    </div>
  )
}

export default View
