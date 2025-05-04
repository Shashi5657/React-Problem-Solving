import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import User from "./User";
import type { UserType } from "../types/types";
import { useState } from "react";

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
    select: (data) => data?.users, // used for selecting the required data from response
    refetchInterval: 5000, // refetch every 5 seconds
    refetchOnWindowFocus: false, // do not refetch when window is focused
    placeholderData: (prevData) => prevData, // acts as a placeholder while fetching new data
  });

  // Single User Query (Uses userID)
  const { data: singleUser } = useQuery({
    queryKey: ["singleUser", userID],
    queryFn: () =>
      fetch(`http://localhost:3000/users?user=${userID}`).then((res) =>
        res.json()
      ),
    initialData: () => {
      // Get cached users and find the one that matches
      const users = queryClient.getQueryData<UserType[]>(["users"]);
      return users?.find((user) => user._id === userID);
    },
    enabled: !!userID, // Only run if userID is truthy
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

  const handleDelete = async (id: string) => {
    const response = await fetch(`http://localhost:8080/users/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete user");
    }
    queryClient.invalidateQueries({ queryKey: ["users"] });
  };

  //dynamic query options - dynamically fetching based on the condition
  const [userId, setUserId] = useState(2);

  const { data: posts } = useQuery({
    queryKey: ["posts", userId],
    queryFn: () =>
      fetch(`https://jsonplaceholder.com/posts?user=${userId}`).then((res) =>
        res.json()
      ),
    enabled: !!userId,
  });

  const {
    data: pageData,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["feedData"],
    queryFn: (pageParam) =>
      fetch(`https://jsonplaceholder.com/posts?limit=${pageParam}`).then(
        (res) => res.json()
      ),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage?.pagination?.hasMore
        ? lastPage.pagination.currentPage + 1
        : undefined;
    },
  });

  if (pageData) {
    // implement something
  }

  if (hasNextPage) {
    fetchNextPage();
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="users">
      {data &&
        data?.map((user: UserType) => {
          return <User key={user._id} {...user} handleDelete={handleDelete} />;
        })}
      <button onClick={() => mutate()}>Add User</button>
    </div>
  );
};

export default Users;
