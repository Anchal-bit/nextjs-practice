import Link from "next/link"

export default function Blog() {
  const posts = [1, 2, 3, 4, 5]
  return (
    <div>
      <h1>My Blog</h1>
      {posts.map((id) => (
        <div key={id} style={{marginBottom: "10px"}}>
          <Link href={`/blog/${id}`} style={{color: "white", backgroundColor: "blue", padding: "8px 16px", borderRadius: "5px", textDecoration: "none"}}>Read Post #{id}</Link>
        </div>
      ))}
    </div>
  )
}
