"use client"
import { ChangeEvent, FormEvent, useState , useEffect} from "react"
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

    if (!params.id){
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
    }else {
      const res = await fetch(`/api/tasks/${params.id}`,{
        method:'PUT',
        body : JSON.stringify(newTask),
        headers : {
          "Content-Type" : "application/json"
        }
      })
    console.log(res)
    router.push('/')
    router.refresh()
    }
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

  const getTask =async ()=>{
    const res = await fetch(`/api/tasks/${params.id}`)
    const data = await res.json()
    setNewTask({
      title:data.title,
      description:data.description
    })
  }
  useEffect(  ()=>{
    if (params.id){
      getTask()
    }
  },[])

  return (
    <div className='h-[calc(100vh-7rem)] flex justify-center items-center'>

      <form onSubmit={handlesubmit}>
      <h1>
        {
          !params.id ? 'Create Task' : 'Update Task'
        }
      </h1>
      {params.id && 
      <button onClick={deleteTask} className="bg-red-600 text-white px-2 border-2 py-1 rounded-md" type="button">
        DELETE
      </button>
      }
        <input type="text" name="title" placeholder='title' className='bg-gray-800 w-full border-2 p-4 my-4'
        onChange={handlechange}
        value={newTask.title}></input>
        <textarea rows={3} onChange={handlechange}
        value={newTask.description}
        name="description" placeholder='description' className='bg-gray-800 w-full border-2 p-4 my-4'></textarea>
        <button className='bg-green-500 rounded-lg py-2 px-4' type="submit">
        {
          !params.id ? 'Save' : 'Update'
        }
        </button>
      </form>
    </div>
  )
}

export default Formpage