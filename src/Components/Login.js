import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <div >
        <center>
            <div id='main-div'>
            <section className='input'>
                <div className="input-group mb-3 ">
                  <input type="email" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"/>
               </div>
            </section>
            <section className='input'>
            <div className="input-group mb-3 ">
                <input type="password" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            </section>

            <div className='input'>
                <Link to="/forgotpassword">Forgot Password?</Link>
            </div>

            <button type="button" className="btn btn-info">Log In</button>
            </div>
        </center>
    </div>
  )
}

export default Login