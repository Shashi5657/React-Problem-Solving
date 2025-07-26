# Tanstack Query (React Query) Usage Guide

This guide explains how to set up and use **Tanstack Query** (formerly React Query) for efficient, cached data fetching in your React application.

---

## 1. Setup

Wrap your application with the `QueryClientProvider` and provide it with a `QueryClient` instance. This enables caching and hooks to work throughout your app.

**Example (`App.tsx`):**

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
return (
<QueryClientProvider client={queryClient}>
{/_ Your app components here _/}
</QueryClientProvider>
);
}

export default App;

## 2. Making Queries

Use the `useQuery` hook to fetch and cache data. It requires:

- **queryKey**: A unique identifier (as an array) for this query in the cache.
- **queryFn**: An async function that returns your data (e.g., a `fetch()` call).

**Example (`Users.tsx`):**

import { useQuery } from '@tanstack/react-query';

const Users = () => {
const { data, isLoading, error } = useQuery({
queryKey: ['users'],
queryFn: () => fetch('/api/users').then(res => res.json()),
});

if (isLoading) return <div>Loading...</div>;
if (error) return <div>Error: {error.message}</div>;

return <div>{/_ Render your data here _/}</div>;
};

---

## 3. Cache Lifetimes

- **Fresh data**: Immediately after fetching, data is "fresh" (considered up-to-date).
- **Stale data**: After `staleTime`, data becomes "stale" and may be refetched.
- **staleTime**: Controls how long data remains fresh. Use `Infinity` to keep it always fresh (rarely needed for dynamic data).

**Example with `staleTime`:**

useQuery({
queryKey: ['users'],
queryFn: () => fetch('/api/users').then(res => res.json()),
staleTime: 5 _ 60 _ 1000, // 5 minutes until data goes stale
});

---

## 4. Invalidating & Refetching

When your data changes (e.g., after a POST, PUT, or DELETE), **invalidate the query** to trigger a refetch.

**Example with Mutation:**

import { useQueryClient } from '@tanstack/react-query';

function UserList() {
const queryClient = useQueryClient();

const handleAddUser = async () => {
await fetch('/api/users', { method: 'POST' });
queryClient.invalidateQueries({ queryKey: ['users'] }); // Refreshes the 'users' data
};

return <button onClick={handleAddUser}>Add User</button>;
}

**Why Invalidate?**  
Informs Tanstack Query that cached data is potentially out of date. The next time the component renders, it will automatically refetch fresh data.

---

## 5. Key Concepts

- **Wrap your app** in `<QueryClientProvider client={queryClient}>`.
- **Fetch data** with `useQuery`, using a unique `queryKey` and async `queryFn`.
- **Control caching** with `staleTime` (avoid `Infinity` for dynamic data).
- **Invalidate queries** after data changes to ensure your UI is up-to-date.
- **Enjoy** automatic caching, background updates, and smart refetching.

---

## 🔁 useMutation vs useQuery in React Query

React Query provides powerful hooks to handle API interactions with ease and minimal boilerplate. Below is a comparison and use case explanation for useMutation and useQuery.

🔨 useMutation
Best used for creating, updating, or deleting data (POST, PUT, DELETE requests).

Unlike useQuery, useMutation is not automatically triggered—it runs only when explicitly invoked.

Provides powerful lifecycle callbacks such as onSuccess, onError, and onSettled to handle side effects.

✅ Benefits of useMutation
Simplifies side-effect handling without manual try...catch.

Cleaner and more maintainable than using async/await + try...catch.

Automatically integrates with the React Query cache, enabling patterns like invalidating or refetching queries after mutations.

📌 Example: Add New User with useMutation

> import { useMutation, useQueryClient } from '@tanstack/react-query';
> import { addNewUser } from './api';
>
> const queryClient = useQueryClient();
>
> const { mutate } = useMutation({
> mutationFn: (newUser) => addNewUser(newUser),
>
> onSuccess: () => {
> // Invalidate the "users" query to refetch updated data
> queryClient.invalidateQueries({ queryKey: ['users'] });
> },
>
> onError: (error) => {
> console.error('Error adding user:', error);
> },
>
> onSettled: () => {
> console.log('Mutation completed (success or error)');
> },
> });
> 🚀 Usage in Component

mutate({ name: 'Shashidhar', email: 'shashidhar@example.com' });

## 🚀 Dynamic Query Options

Dynamic query options lets you conditionally change or build the query's behaviour using things like variables such as filter, userId, sort, searchterm etc

> > Example
> > const { data, isLoading } = useQuery({
> > queryKey: ['user', userId],
> > queryFn: () => fetch(`/api/user/${userId}`).then(res => res.json()),
> > enabled: !!userId, // don't run until userId is truthy
> > });
> > 👆 enabled: !!userId is dynamic control – it tells React Query:

“Only run this query when userId exists!”

> > Example
> > const [filter, setFilter] = useState("active");
> > const { data } = useQuery({
> > queryKey: ['users', filter],
> > queryFn: () => fetch(`/api/users?status=${filter}`).then(res => res.json()),
> > });
> > 🧠 Why it's powerful:

When filter changes → query key changes → query refetches

You can build dynamic UIs like toggling between “Active”, “Pending”, “All”

> Example 3
> const { data: user } = useQuery({
> queryKey: ['user', userId],
> queryFn: () => fetchUser(userId),
> enabled: !!userId,
> });

> const { data: posts } = useQuery({
> queryKey: ['posts', user?.id],
> queryFn: () => fetchUserPosts(user.id),
> enabled: !!user?.id, // waits for user data before running
> });
> 👑 This is dependent queries using dynamic options — wait for one query to finish before running another.

## 🔁 Infinite Querying & Pagination

const fetchPosts = ({ pageParam = 1 }) =>
fetch(`/api/posts?page=${pageParam}`).then(res => res.json());

const {
data,
fetchNextPage,
hasNextPage,
isFetchingNextPage,
} = useInfiniteQuery({
queryKey: ['posts'],
queryFn: fetchPosts,
getNextPageParam: (lastPage, allPages) => {
return lastPage.hasMore ? allPages.length + 1 : undefined;
},
});
✅ getNextPageParam decides what the next page number should be based on the last API response.

🔹UI with Load More Button
return (

  <div>
    {data?.pages.map((page) =>
      page.data.map(post => <div key={post.id}>{post.title}</div>)
    )}

    <button
      onClick={() => fetchNextPage()}
      disabled={!hasNextPage || isFetchingNextPage}
    >
      {isFetchingNextPage
        ? 'Loading more...'
        : hasNextPage
        ? 'Load More'
        : 'No more posts'}
    </button>

  </div>
);
✅ Each API response is appended to the data.pages[] array.

## Select

select transforms the fetched data as per your convenience.
It helps you select the required data from the response

> onst { data, isLoading } = useQuery({
> queryKey: ['users'],
> queryFn: () => fetch('/api/users').then(res => res.json()),
> select: (users) => users.filter(u => u.active) // Only show active users!
> });
