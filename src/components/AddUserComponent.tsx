import React from "react";
import type { UserType } from "../Types/UserType";
interface AddUserProps {
  onAddUser: (newUser: UserType) => void;
}

const AddUserComponent = ({ onAddUser }: AddUserProps) => {
  const handleAddUser = (event: React.FormEvent) => {
    event.preventDefault();
    const newUser: UserType = {
      id: Date.now(),
      username: "newuser",
      email: "newuser@example.com",
    };
    onAddUser(newUser);
  };

  return (
    <div className="p-4 border rounded bg-amber-400">
      <h1>Add User</h1>
      <form onSubmit={handleAddUser}>
        
        <input type="text" placeholder="Username" className="border p-2 m-2" />
        <input type="text" placeholder="Email" className="border p-2 m-2" />
      <button
        className="mt-2 p-2 bg-blue-500 text-white rounded"
       
        >
        Add User
      </button>
          </form>
    </div>
  );
};

export default AddUserComponent;
