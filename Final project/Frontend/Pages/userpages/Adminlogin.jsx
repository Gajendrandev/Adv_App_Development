import {  Link } from "react-router-dom";
import '../../assets/admincss/LoginForm.css'
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
export const Adminlogin=()=> {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [email,setEmail]=useState("");
    const handleSubmit = async(event)=>{
        event.preventDefault();
        try{
            const response=await axios.post('http://localhost:8080/api/v1/auth/authenticate',{
                email,
                password
            });
            navigate('/landing');
            let token=response.data.token;
            let user=response.data.id;
            localStorage.setItem('token',token);
            console.log(response.data)
            localStorage.setItem('user',JSON.stringify(user));
        }catch(error){
            console.error('Error: ',error);
        }
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
                <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' required/>
                <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' required/>
                <a href="javascript:alert('Forget password!');">Forget password!!</a>
                <br></br>
                <Link to='/Admin'><button type='submit' className='login-button'>LogIn</button> </Link>

            </form>
        </div>
        </div>
    </div>
  )
}
