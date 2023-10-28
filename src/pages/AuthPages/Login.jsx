import { LoginForm } from '../../components/Auth'

const Login = () => {
  return (
    <>
      <div className='d-flex justify-content-center pt-3 pt-sm-5 pt-lg-5'>
        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4'>
          <div className='card p-3'>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
