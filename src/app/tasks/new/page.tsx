"use client"
import { ChangeEvent, FormEvent, useState } from "react"
import { useRouter, useParams } from "next/navigation"

const Formpage = () => {

  const [newTask, setNewTask] = useState({
    title:"",
    description:""
  })
  const router = useRouter()
  const params = useParams()

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

  const deleteTask = async () =>{
    const res = await fetch(`/api/tasks/${params.id}`,{
      method:'DELETE'
    })
    console.log(res)
    router.push('/')
    router.refresh()
  }

  return (
    <div className='h-[calc(100vh-7rem)] flex justify-center items-center'>

      <form onSubmit={handlesubmit}>
      <h1>
        {
          !params.id ? 'Create Task' : 'Update Task'
        }
      </h1>
      <button onClick={deleteTask} className="bg-red-600 text-white" type="button">
        DELETE
      </button>
        <input type="text" name="title" placeholder='title' className='bg-gray-800 w-full border-2 p-4 my-4'
        onChange={handlechange}></input>
        <textarea rows={3} onChange={handlechange}
        name="description" placeholder='description' className='bg-gray-800 w-full border-2 p-4 my-4'></textarea>
        <button className='bg-green-500 rounded-lg py-2 px-4' type="submit">SAVE</button>
      </form>
    </div>
  )
}

export default Formpage