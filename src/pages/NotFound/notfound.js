import React from 'react'
import './notfound.css'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <div className="notfound-container">
        <div className='col-lg-6 notfound_image'>
            <img src='./assets/images/not_found.png' alt='not found' />
        </div>
        <p className="notfound-message fs-3 fs-sm-2 fs-md-3 fs-lg-4 fs-xl-5">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="notfound-link">Go to Home</Link>
    </div>
  )
}

export default Notfound
