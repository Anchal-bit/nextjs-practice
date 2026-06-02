import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-gray-900 px-6 py-4 flex gap-6">
      <Link href="/" className="text-white font-bold hover:text-blue-400">Home</Link>
      <Link href="/about" className="text-white font-bold hover:text-blue-400">About</Link>
      <Link href="/blog" className="text-white font-bold hover:text-blue-400">Blog</Link>
      <Link href="/posts" className="text-white font-bold hover:text-blue-400">Posts</Link>
      <Link href="/contact" className="text-white font-bold hover:text-blue-400">Contact</Link>
    </nav>
  )
}
