import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'


function NavbarForDept() {
  
  

  return (
    <div>
        <div >
            <div id='navbar'>
                <div><img  src="https://img.collegedekhocdn.com/media/img/institute/logo/1665457.png" alt="" /> </div>
                <div style={{display:'flex'}}>
                
              
                  <div class="dropdown" style={{marginRight:'10px'}} >
                      <button  class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Sort By Department
                      </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <Link to='/mech'><li><a class="dropdown-item" href="/">Mechanical</a></li></Link>
                        <Link to='/civil'><li ><a class="dropdown-item" href="/" >Civil</a></li></Link>
                        <Link to='/it'><li ><a class="dropdown-item" href="/">IT</a></li></Link>
                        <Link to='/cse'><li ><a class="dropdown-item" href="/">CSE</a></li></Link>
                        <Link to='/ee'><li><a class="dropdown-item" href="/">EE</a></li></Link>
                        <Link to='/ece'><li ><a class="dropdown-item" href="/">ECE</a></li></Link>
                     </ul>
                   </div>

                   <div>
                    <Link to='/dashboard'><button className='btn btn-info'>Back </button></Link>
                   </div>
                </div>

              
            </div>
           
        </div>
    </div>
  )
}

export default NavbarForDept