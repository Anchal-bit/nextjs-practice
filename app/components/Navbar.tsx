import Link from "next/link"

export default function Navbar() {
  return (
    <nav style={{background: "black", padding: "10px"}}>
      <Link href="/" style={{color: "white", marginRight: "20px"}}>Home</Link>
      <Link href="/about" style={{color: "white"}}>About</Link>
    </nav>
  )
}
