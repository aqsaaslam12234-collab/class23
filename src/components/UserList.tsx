import type { UserType } from "../Types/UserType"

interface UserListProps {
  users: UserType[]
}

const UserListComponent = ({ users }: UserListProps) => {
  return (
    <div>


        <h1 className="font-bold">Users</h1>
        <div>
            {users.map((user) => (
                <div key={user.id} className="border p-4 my-2">
                    <h2 className="text-lg font-semibold">{user.username}</h2>
                    <p className="text-sm text-gray-600">{user.email}</p>
                </div>
            ))}
              
            
        </div>
      

    </div>
  )
}

export default UserListComponent
