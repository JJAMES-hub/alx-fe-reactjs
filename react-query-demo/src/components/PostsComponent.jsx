import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

function PostsComponent() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 5000,
    cacheTime: 1000 * 60 * 5,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <button
        onClick={() => refetch()}
        style={{
          marginBottom: "15px",
          padding: "8px 15px",
          borderRadius: "6px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.slice(0, 10).map((post) => (
          <li
            key={post.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
