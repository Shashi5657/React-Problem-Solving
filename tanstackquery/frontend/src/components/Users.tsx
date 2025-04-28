import { useQuery, useQueryClient } from "@tanstack/react-query";
import User from "./User";
import type { UserType } from "../types/types";

const Users = () => {
  const queryClient = useQueryClient();
  const fetchUsers = async () => {
    const response = await fetch("http://localhost:8080/users");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: Infinity,
  });

  const handleAddNewUser = async () => {
    const response = await fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Kissie",
        email: "kmurt4@icq.com",
        dob: "01/11/2024",
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to add new user");
    }
    queryClient.invalidateQueries({ queryKey: ["users"] });
  };
  console.log(data, "data");

  const handleDelete = async (id: string) => {
    const response = await fetch(`http://localhost:8080/users/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete user");
    }
    queryClient.invalidateQueries({ queryKey: ["users"] });
  };

  return (
    <div className="users">
      {data &&
        data.map((user: UserType) => {
          return <User key={user._id} {...user} handleDelete={handleDelete} />;
        })}
      <button onClick={handleAddNewUser}>Add User</button>
    </div>
  );
};

export default Users;
