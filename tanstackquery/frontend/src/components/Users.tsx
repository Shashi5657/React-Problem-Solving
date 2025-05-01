import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import User from "./User";
import type { UserType } from "../types/types";

const Users = () => {
  const queryClient = useQueryClient();
  const fetchUsers = async (): Promise<UserType[]> => {
    const response = await fetch("http://localhost:8080/users");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };
  const { data, isLoading, isError, error } = useQuery<UserType[]>({
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
    // queryClient.invalidateQueries({ queryKey: ["users"] });
  };

  const { mutate } = useMutation({
    mutationFn: handleAddNewUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      alert(`Error: ${error.message}`);
    },
  });

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="users">
      {data &&
        data.map((user: UserType) => {
          return <User key={user._id} {...user} handleDelete={handleDelete} />;
        })}
      <button onClick={() => mutate()}>Add User</button>
    </div>
  );
};

export default Users;
