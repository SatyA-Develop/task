import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
<h1>REACT APP FOR CRUD </h1>
<div className="user-add">
      <Link style={{textDecoration:"none"}}  to={"/add-user"}>
        <button className='add-user-btn'>Add User</button>
      </Link>
      </div>
    </div>
  )
}

export default Navbar