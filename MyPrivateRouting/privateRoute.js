import React from 'react'
import privateRoute from '/privateRoute'

const privateRoute = () => {
    let login = true
    if(login){
        return <Outlet />
      }
      else if (!login){
        return <h1>hello</h1>
      }
 
}

export default privateRoute