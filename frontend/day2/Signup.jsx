import '../../assets/admincss/Signup.css'
import { useNavigate } from 'react-router-dom';
import {  Link } from "react-router-dom";
export const Signup=()=> {
    const navigate = useNavigate();
    const handleSubmit = (event)=>{
        event.preventDefault();
        navigate('/landing')
    }
  return (
    <div className='login-page'>
        <div className='login'>
        <div className='Sign-left'> 
        <form className='form-box' onSubmit={handleSubmit}>
                <h2>Login</h2>
                <p>Welcome Back! Please enter your deatails</p>
                <input type='text' placeholder='Username' required/>
                <input type='text' placeholder='Email' required/>
                <input type='password' placeholder='password' required/>
                <input type='password' placeholder='Confirm password' required/>
                <br></br>
                <Link to='/Loginto'><button type='submit' className='sign-up'>Signup</button></Link>
            </form>
        </div>
        <div className='Sign-right'>
        </div>
        </div>
    </div>
  )
}