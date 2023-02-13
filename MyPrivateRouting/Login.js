import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
        const Navigate = useNavigate()
    const [login,setLogin] = useState(true)
    const [user,setUser] = useState({
        username:"",
        email:"",
        password:""
    })
    const signup = () =>{
    setLogin(false)
}
const Login = () =>{
    setLogin(!login)
    Navigate("/Dashboard")
}

const Email = () =>{

}
  return (
    <div>
         <div className="d-flex flex-column align-items-center mt-5 "> 
 <h1>Login</h1>
 <div className="border border-secondary d-flex flex-column align-items-center col-sm-4 bg-dark">

   <input type="text" placeholder="...Email" className="mt-5 h4 " onChange={Email}></input> <br />
   <input type="text" placeholder="...Password" className="mt-1 h4"></input>
   <div class="d-grid gap-2 d-md-block m-3">
     <button class="btn btn-primary btn-lg " type="button" onClick={Login}>
       Login
     </button> &nbsp;
     <button class="btn btn-danger btn-lg " type="button" onClick={signup}>
       Sign Up
     </button>
   </div>
 </div>
 </div>
    </div>
  )
}

export default Login