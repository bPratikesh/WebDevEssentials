import React, { useState } from "react";
import { users as initialUsers } from "./users";
import SingleUserComponent from "./SingleUserComponent";

function AllUsersComponent() {
  const [users, setUsers] = useState([]);

  const toggleAllUsers = () => {
    if (users.length === 0) {
      setUsers(initialUsers);
    } else {
      setUsers([]);
    }
  };

  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h2>User Management</h2>

      <button onClick={toggleAllUsers}>
        {users.length === 0 ? "Add All Users" : "Delete All Users"}
      </button>

      {users.length > 0 && (
        <table
          border="1"
          style={{ marginTop: "20px", borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <SingleUserComponent
                key={user.id}
                user={user}
                deleteUser={deleteUser}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default AllUsersComponent;
