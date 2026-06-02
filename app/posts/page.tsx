export default async function Posts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
  const posts = await res.json()

  return (
    <div style={{maxWidth: "800px", margin: "20px auto", padding: "20px"}}>
      <h1 style={{color: "#333"}}>Real Blog Posts</h1>
      {posts.map((post: any) => (
        <div key={post.id} style={{background: "#f9f9f9", border: "1px solid #ddd", margin: "15px 0", padding: "20px", borderRadius: "10px"}}>
          <h2 style={{color: "blue", textTransform: "capitalize"}}>{post.title}</h2>
          <p style={{color: "#555"}}>{post.body}</p>
        </div>
      ))}
    </div>
  )
}
