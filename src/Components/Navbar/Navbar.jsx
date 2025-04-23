import React from 'react'
import './Navbar.css'
import logo_tcart from '../../Assets/images/logo_tcart.png'
function Navbar() {
    return (
      <>
      <header>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-2'>
                    <img src={logo_tcart}/>

                </div>

            </div>

        </div>
      </header>
      </>
    )
}

export default Navbar
