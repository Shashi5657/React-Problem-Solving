import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";

function App() {
  const [count, setCount] = useState(0);
  const [id, setId] = useState(1);
  const { data, error, isPending } = useSuspenseQuery({
    queryKey: ["todos", id],
    queryFn: async ({ queryKey }) => {
      const [_key, id] = queryKey;
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${id}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    enabled: !!id, // Only run the query if id is truthy
  });

  console.log(data, "data");

  return (
    <>
      <div>{isPending ? "Loading..." : JSON.stringify(data)}</div>
      <button onClick={() => setId((prev) => prev + 1)}>Increment</button>
    </>
  );
}

export default App;
