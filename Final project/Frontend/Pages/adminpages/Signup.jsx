import '../../assets/admincss/Signup.css'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState} from 'react';
export const Signup=()=> {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [email,setEmail]=useState("");
  const [name, setUsername] = useState('');
  const [error,setError]=useState("");
  const handleSubmit = async (e)=>{
      e.preventDefault();
      try{
        const response = await axios.post(`http://localhost:8080/api/v1/auth/register`,
        {
          name:name,
          email:email,
          password:password
        }
        );
        setUsername('');
        setEmail('');
        setPassword('');
        console.log(response.data);
        navigate("/Loginto");
      }catch(error){

        window.alert("Signup unsuccessful. Please try again.");
        setError("Invalid user")
        console.error("Error : ",error);
      }
    }
  return (
    <div className='login-page'>
        <div className='login'>
        <div className='Sign-left'> 
        <form className='form-box' onSubmit={handleSubmit}>
                <h2>Sign up</h2>
                <p>Welcome! Please enter your deatails</p>
                <input className="in" 
            type="text" 
            value={name}
            name="username"
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Enter your Username" 
            id="username" required/>
                <input className="in" 
            type="text" 
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your Email" 
            id="email" required/>
            <input className="in" 
            type="password" 
            value={password}
          name="password" 
          onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter your Password" 
            id="password" required/>
                <br></br>
                <button type='submit' className='sign-up'>Signup</button>
                <p>{error}</p>
            </form>
        </div>
        <div className='Sign-right'>
        </div>
        </div>
    </div>
  )
}