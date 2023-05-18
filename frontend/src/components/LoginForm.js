import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [id, setId] = useState(0)
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let logData = await axios.post('http://localhost:5000/login', {
        email: email,
        password: password,
      })
      var iD = logData.data.user._id
      setId(iD)
      // console.log(id)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='container'>
            <h1>login</h1>

            <input
              type='email'
              placeholder='Enter Email'
              name='email'
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type='password'
              placeholder='Enter Password'
              name='pssword'
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <hr />

            {/* <button type='submit' className='registerbtn'></button> */}
            <Link
              to='/list'
              state={{ email: email, id: id }}
              className='registerbtn'
            >
              login
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default LoginForm
