import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Form = () => {
  const [task, setTask] = useState('')
  const [userId, setUserId] = useState('9')
  const handleSubmit = async (e) => {
    e.preventDefault()
    const resp = await axios.post('http://localhost:5000/create-list', {
      userId: userId,
      tasks: { name: 'task', completed: true },
    })
    console.log(resp)
  }
  return (
    <div className='form-control'>
      <div className='form-status'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            // value={task}
            placeholder='item-1'
            onChange={(e) => setTask(e.target.value)}
          />
          <button type='submit'>add</button>
        </form>
      </div>
    </div>
  )
}

export default Form
