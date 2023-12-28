
import TaskCard from '../components/TaskCard'
import Task from '../models/Task'
import { connectdb } from '../utils/database'

export async function loadTask(){
  connectdb()
  const tasks = await Task.find()
  return tasks
}

export default async function Homepage() {
  const tasks = await loadTask()
  return (
    <div className='grid grid-cols-3 gap-2'>
      {tasks.map(task =>(
        <TaskCard task={task} key={task._id}></TaskCard>
      ))}
    </div>
  )
}

