import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Hi, I am Anchal! Welcome to My Next.js App!</h1>
      <p className="text-lg text-gray-500 mb-8">I am a student of Red River College learning Next.js and Tailwind CSS.</p>
      <div className="flex gap-4">
        <Link href="/about" className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">About Me</Link>
        <Link href="/posts" className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900">Read Posts</Link>
        <Link href="/contact" className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">Contact Us</Link>
      </div>
    </main>
  )
}
