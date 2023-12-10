"use client"
import { useState } from 'react'

export default function Home() {
  const [file, setFile] = useState()

  const onSubmit = async (e) => {
    e.preventDefault()
    console.log(file);
    const data = new FormData();
    data.set('file', file)
    const result = await fetch('api/upload', {
      method: "POST",
      body: data
    })
    console.log(result);


  }

  return (
    <main>
      <h1>Upload Image</h1>
      <form onSubmit={onSubmit} >
        <input
          type="file"
          name='file'
          onChange={(e) => setFile(e.target.files?.[0])} />
        <button type='submit'>Image Upload</button>
      </form>
    </main>
  )
}
