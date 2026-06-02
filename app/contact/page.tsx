"use client"
import { useState } from "react"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit() {
    if (name && email && message) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div style={{maxWidth: "600px", margin: "40px auto", textAlign: "center"}}>
        <h1 style={{color: "green"}}>Message Sent! ✅</h1>
        <p>Thank you {name}, we will contact you at {email} soon!</p>
      </div>
    )
  }

  return (
    <div style={{maxWidth: "600px", margin: "40px auto", padding: "20px"}}>
      <h1>Contact Us</h1>
      <div style={{marginBottom: "15px"}}>
        <label>Name</label><br/>
        <input value={name} onChange={(e) => setName(e.target.value)} style={{width: "100%", padding: "8px", marginTop: "5px", borderRadius: "5px", border: "1px solid gray"}} />
      </div>
      <div style={{marginBottom: "15px"}}>
        <label>Email</label><br/>
        <input value={email} onChange={(e) => setEmail(e.target.value)} style={{width: "100%", padding: "8px", marginTop: "5px", borderRadius: "5px", border: "1px solid gray"}} />
      </div>
      <div style={{marginBottom: "15px"}}>
        <label>Message</label><br/>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} style={{width: "100%", padding: "8px", marginTop: "5px", borderRadius: "5px", border: "1px solid gray"}} />
      </div>
      <button onClick={handleSubmit} style={{backgroundColor: "blue", color: "white", padding: "10px 20px", borderRadius: "5px", border: "none", cursor: "pointer"}}>Send Message</button>
    </div>
  )
}
