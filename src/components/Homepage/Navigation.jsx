const Navigation = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <a className='navbar-brand ms-5' href='/'>
          File Manager
        </a>
        <ul className='navbar-nav ms-auto me-5'>
          <li className='nav-item mx-2 '>
            <a className='nav-link' href='/login'>
              Login
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link btn btn-success btn-sm' href='/register'>
              Register
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}
export default Navigation
