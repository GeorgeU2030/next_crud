"use client"
import { ChangeEvent, FormEvent, useState } from "react"
import { useRouter } from "next/navigation"

const Formpage = () => {

  const [newTask, setNewTask] = useState({
    title:"",
    description:""
  })
  const router = useRouter()

  const handlesubmit =async(e:FormEvent) =>{
    e.preventDefault()

   const res = await fetch('/api/tasks',{
      method : 'POST',
      body : JSON.stringify(newTask),
      headers : {
        "Content-Type" : "application/json"
      }
    })
    console.log(res)
    router.push('/')
    router.refresh()
  }

  const handlechange = (e: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>{
    setNewTask({... newTask, [e.target.name]: e.target.value })
  }

  return (
    <div className='h-[calc(100vh-7rem)] flex justify-center items-center'>
      <form onSubmit={handlesubmit}>
        <input type="text" name="title" placeholder='title' className='bg-gray-800 w-full border-2 p-4 my-4'
        onChange={handlechange}></input>
        <textarea rows={3} onChange={handlechange}
        name="description" placeholder='description' className='bg-gray-800 w-full border-2 p-4 my-4'></textarea>
        <button className='bg-green-500 rounded-lg py-2 px-4'>SAVE</button>
      </form>
    </div>
  )
}

export default Formpage