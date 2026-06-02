import Link from "next/link"

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is my about page. I am learning Next.js routing!</p>
      <Link href="/">Go back to Home Page</Link>
    </div>
  )
}
