import {  Link } from "react-router-dom";
import '../../assets/admincss/LoginForm.css'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState} from 'react';

export const LoginForm=()=> {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [email,setEmail]=useState("");
    const handleSubmit = async (e)=>{
        e.preventDefault();
        // dispatch(
        //   login({
        //    name:username
        //   })
        //   )
          // navigate('/Home');
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
            <input className="in" 
            type="text" 
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your Email" 
            id="username" required/>
            <input className="in" 
            type="password" 
            value={password}
          name="password" 
          onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter your Password" 
            id="password" required/>
                <a href="javascript:alert('Forget password!');">Forget password!!</a>
                <br></br>
                <button type='submit' className='login-button'>LogIn</button>
                <Link to='/Sign'><button type='submit' className='sign-up'>Signup</button></Link>
                <Link to='/Adminlogin'><h2>AdminLogin</h2></Link>

            </form>
        </div>
        </div>
    </div>
  )
}
