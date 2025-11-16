import { useEffect, useState } from "react";
import type { UserType } from "../Types/UserType";
import UserList from "./UserList";
import AddUserComponent from "./AddUserComponent";



const UserContainer = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const addUser = (newUser: UserType) => {
    console.log("Add User Clicked ", newUser);
    setUsers((prevUsers) => [...prevUsers, newUser]);
  }

 useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
     
  }, []);

  return (
    <div>
      <h1 className="font-bold">Ready</h1>
      <p>ContainerComponent</p>
      <AddUserComponent onAddUser={addUser} />
      <hr />
     <UserList users={users} />
    </div>
  );
};

export default UserContainer;
