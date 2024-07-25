import React, { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [posts, setPosts] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (url && title && blogDescription) {
      const newPost = { url, title, blogDescription };
      setPosts([...posts, newPost]);
      setUrl("");
      setTitle("");
      setBlogDescription("");
    } else {
      alert("Please fill in all fields.");
    }
  };

  const deleteHandler = (index) => {
    const newPosts = posts.filter((_, i) => i !== index);
    setPosts(newPosts);
  };

  const editHandler = (index) => {
    const updatePost = posts[index];
    setUrl(updatePost.url);
    setTitle(updatePost.title);
    setBlogDescription(updatePost.blogDescription);
    deleteHandler(index);
  };

  const calculateBlog = () => {
    return posts.length;
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Your Blog</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Total Blog: {calculateBlog()}</h1>
      </div>
      
      <form onSubmit={submitHandler}>
      <p>
        <label htmlFor="imageUrl">
          Image URL:
          <input
            type="url"
            id="imageUrl"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label htmlFor="title">
          Title:
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label htmlFor="blogDescription">
          Blog Description:
          <input
            type="text"
            id="blogDescription"
            value={blogDescription}
            onChange={(e) => setBlogDescription(e.target.value)}
          />
        </label>
      </p>
      <button type="submit">POST BLOG</button>
      </form>

      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <h2>{post.title}</h2>
            <img src={post.url} alt={post.title} />
            <p>{post.blogDescription}</p>

            <button onClick={() => editHandler(index)}>Edit Blog</button>
            <button 
              onClick={() => deleteHandler(index)}
              style={{ margin: "50px" }}
            >
              Delete Blog
            </button>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
