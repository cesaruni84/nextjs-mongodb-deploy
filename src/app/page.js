// "use client";

import { connectToMongoDB } from "@/libs/mongodb"
import User from "@/models/user"

// import { useEffect } from "react"
async function loadUser() {
  await connectToMongoDB()
  const users = await User.find()
  return users
}

export default async function HomePage() {
  const users = await loadUser()
  console.log(users)
  // useEffect(() => { 
  //   fetch('/api/users')
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // }, [])

  return (
    <div>
      <h1>Users v2</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}