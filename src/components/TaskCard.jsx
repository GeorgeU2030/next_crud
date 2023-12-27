import React from 'react'

const TaskCard = ({task}) => {
  return (
    <div className='bg-gray-800 hover:bg-gray-700 text-white p-10 rounded-md cursor-pointer'>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
    </div>
  )
}

export default TaskCard