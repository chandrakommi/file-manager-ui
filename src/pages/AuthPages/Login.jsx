import { Link } from 'react-router-dom'
import { LoginForm } from '../../components/Auth'

const Login = () => {
  return (
    <>
      <div className='d-flex justify-content-center pt-3 pt-sm-5 pt-lg-5'>
        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4'>
          <div className='card p-3'>
            <div className='display-6 text-center '>Login here</div>
            <hr />
            <div className='card-body'>
              <LoginForm />
              <p className='text-end'>
                Not a member yet, <Link to='/register'>Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
