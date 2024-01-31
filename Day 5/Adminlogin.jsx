import {  Link } from "react-router-dom";
import '../../assets/admincss/LoginForm.css'
import { useNavigate } from 'react-router-dom';

export const Adminlogin=()=> {
    const navigate = useNavigate();
    const handleSubmit = (event)=>{
        event.preventDefault();
        navigate('/landing')
    }
  return (
    <div className='login-page'>
        <div className='login'>
        <div className='login-left'> 
        </div>
        <div className='login-right'>
            <form className='form-box' onSubmit={handleSubmit}>
                <h2>Login</h2>
                <p>Welcome Back! Please enter your deatails</p>
                <input type='text' placeholder='Email' required/>
                <input type='password' placeholder='password' required/>
                <a href="javascript:alert('Forget password!');">Forget password!!</a>
                <br></br>
                <Link to='/Admin'><button type='submit' className='login-button'>LogIn</button> </Link>

            </form>
        </div>
        </div>
    </div>
  )
}
