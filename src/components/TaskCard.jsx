import React from 'react'
import Link from 'next/link'

const TaskCard = ({task}) => {
  return (
    <Link href={`/tasks/${task._id}`}>
    <div className='bg-gray-800 hover:bg-gray-700 text-white p-10 rounded-md cursor-pointer'>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
    </div>
    </Link>
  )
}

export default TaskCard