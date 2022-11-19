import React from 'react'

function Error() {
    const timer=()=>{
        window.location="/"
    }
    setInterval(timer,1000)
   return (
    <div className='error'>
        <h1>Page not found!!!</h1>
        <h2>Redirecting.....</h2>
    </div>
  )
}

export default Error