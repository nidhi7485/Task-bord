import React, { useState } from 'react'
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { DndProvider } from 'react-dnd'
import { AiOutlinePlus } from 'react-icons/ai'

import Form from './Form'
import { useLocation } from 'react-router-dom'

const List = () => {
  const [list, setList] = useState(false)
  const location = useLocation()
  const id = location.state.id
  const email = location.state.email
  console.log(email, id)
  const openList = () => {}

  return (
    <main>
      <h3 style={{ backgroundColor: '#c0c0c0' }}>{email}</h3>
      <div className='list-btn'>
        <p style={{ marginLeft: '40px' }}>create list</p>
        <button
          type=' button'
          className='add-list-btn'
          onClick={() => setList(true)}
        >
          <AiOutlinePlus className='icon-btn' />
        </button>
      </div>
      {list ? <Form /> : null}

      <h4>My draggable</h4>
    </main>
  )
}

export default List
