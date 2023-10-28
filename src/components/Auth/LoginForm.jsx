import { useState } from 'react'

const LoginForm = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  })

  const handleChange = event => {
    event.preventDefault()
    const { name, value } = event.target
    setState(prevState => {
      return { ...prevState, [name]: value }
    })
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    console.log(state)
  }
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            id='email'
            type='email'
            name='email'
            value={state.email || ''}
            className='form-control '
            placeholder='someone@email.com'
            onChange={handleChange}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            id='password'
            type='password'
            name='password'
            value={state.password || ''}
            className='form-control '
            placeholder='Password'
            onChange={handleChange}
          />
        </div>
        <div className='mb-3'>
          <button type='submit' className='btn btn-primary w-100'>
            Login
          </button>
        </div>
      </form>
    </>
  )
}

export default LoginForm