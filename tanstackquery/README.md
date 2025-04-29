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

text

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

text

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
