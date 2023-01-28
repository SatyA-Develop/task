import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import "./Edit.css";

const Edit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const[isloading,setIsLoading] = useState(true)

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true)
    axios.get(`http://localhost:3003/users/${id}`).then((res) => {
      setIsLoading(false)
      setName(res.data.name);
      setEmail(res.data.email);
      setPhone(res.data.phone);
    });
  }, []);

  const { id } = useParams();

  const Update = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3003/users/${id}`, {
        name: name,
        email: email,
        phone: phone,
      })

      .then(navigate("/"));
  };

  return (
    <div className="edit-page">
     {
      isloading ? <Loading/> : <div>
         <form action="">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="phone"
          placeholder="Mobile Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button onClick={Update} style={{color:"#000"}} className="add-user-btn add-btn">Update</button>
        <Link to={"/"}>Back to home</Link>
      </form>
      
      </div>
     }
    </div>
  );
};

export default Edit;
