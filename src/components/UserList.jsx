import { useState } from "react";
import { useEffect } from "react";

import axios from "axios";
import "./UserList.css";
import User from "./User";
import Loader from "./Loader";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState("");
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (res.status === 200) {
          setUsers(res.data);
        } else {
          throw new Error(`Failed to axios with status: ${res.status}`);
        }
      } catch (err) {
        setErr(err.message);
      } finally {
        setLoader(false);
      }
    };
    getUsers();
  }, []);
  return (
    <div className="user-container">
      {err && <p>{err}</p>}
      {loader && <Loader />}
      {users && users.map((user) => <User key={user.id} user={user} />)}
    </div>
  );
};

export default UserList;
