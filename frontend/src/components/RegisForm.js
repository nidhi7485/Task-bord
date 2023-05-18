import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Axios from 'axios'

const RegisForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let data = await Axios.post('http://localhost:5000/register', {
        email: email,
        password: password,
      })
      data = data.data.user
      //   console.log(data.data.user)
      setEmail('')
      setPassword('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div>
        <form>
          <div className='container'>
            <h1>Register</h1>

            <input
              type='email'
              placeholder='Enter Email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type='password'
              placeholder='Enter Password'
              name='pssord'
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <hr />

            <button
              type='submit'
              className='registerbtn'
              onClick={handleSubmit}
            >
              Register
            </button>
          </div>

          <div className='container signin'>
            <p>
              Already have an account? <Link to='/login'>Sign in</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  )
}

export default RegisForm
