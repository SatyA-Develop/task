import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { MdDeleteForever } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { AiOutlineRead } from "react-icons/ai";
import Loading from "../Loading/Loading";

const Home = () => {
  const [users, setUsers] = useState([]);
  const[loading,setloading] = useState(true)

  const loadUsers = () => {
    setloading(true)
    axios.get("http://localhost:3003/users").then((res) => {
      setloading(false)
      setUsers(res.data.reverse());
    });
  };
  useEffect(() => {
    loadUsers();
  }, []);

  const postDelete = (id) => {
    axios.delete(`http://localhost:3003/users/${id}`).then(loadUsers());
  };

  return (
    <div className="table-wrapper">
      {
        loading ? <Loading/> : <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((data, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>
                    <div className="btn-cls">
                    <Link to={`/user/${data.id}`}>
                      <button  className="icon-btn"><AiOutlineRead  className="icon"/></button>
                    </Link>
                    <Link to={`/edit-user/${data.id}`}>
                      <button  className="icon-btn"><BiEdit  className="icon"/></button>
                    </Link>
                    <button onClick={() => postDelete(data.id)}  className="icon-btn"><MdDeleteForever  className="icon"/></button>
                    </div>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      }
    </div>
  );
};

export default Home;
