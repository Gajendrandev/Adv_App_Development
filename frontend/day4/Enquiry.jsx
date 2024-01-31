
import { useState } from 'react';
import {  Link } from "react-router-dom";

export const Enquiry = () => {
    const [username, setName] = useState('');
        const[email, setEmail]=useState('');
        const [mobile, setMobile] = useState('');
        const [feed, setFeedback] = useState('');
      
      
        const handleLogin = () => {
          // Handle login logic here
          // console.log(Logging in with username: ${username} and password: ${password});
        };
  return (
    <>
    <header className="header">
    <nav className="nav-items">
  
    <Link to="/Home">Home</Link>
    <Link to="/Aboutus">About us</Link>
    <Link to="/Enquiry">Enquiry</Link>
    <Link to="/Login">Logout</Link>
    
</nav>
</header>
<div className='bod-reg enquiry-form'>
    <div className="login-container1">
      <div className="login-card1">
        <div className="login1">
        <h2>Feedback!</h2>
        </div>
        <form className='enquiry'>
          <label htmlFor="username">Name:</label>
          <input
            type="text"
            id="username"
            placeholder='Enter your name'
            value={username}
            onChange={(e) => setName(e.target.value)}
          />


          <label htmlFor="email">Email Id:</label>
          <input
            type="text"
            id="email"
            placeholder='Enter your Email-Id'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        <label htmlFor="mob">Mobile No:</label>
          <input
            type="tel"
            id="mob"
            placeholder='Enter your Mobile number'
            pattern="[0-9]{10} " required
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          
<label htmlFor="Venue">Feedback:</label>
          <textarea
          rows="10"
            type="text"
            id="Feedback"
            placeholder='Enter your Venue'
            value={feed}
            className='m'
            onChange={(e) => setFeedback(e.target.value)}
          />

     <br></br>
          <button type="button" onClick={handleLogin}>
            Submit
          </button>
          <br></br>
        
         
         
        </form>
      </div>
    </div>
    </div>
<footer>
        <div className='footer-type'>
            <br></br>
            <div className="footer-box">
                <p>Let us bring your celebrations to life! We specializes in crafting unforgettable birthday 
                    experiences tailored to your unique style.
                     From intimate gatherings to grand celebrations, 
                     our dedicated team ensures every detail is a reflection of your joy and personality. 
                    Trust us to turn your special day into a magical memory. 
                    Lets celebrate life together!</p>

                    
                </div>

                <div className="footer-box">
                    <h1>Contact info</h1>
                    <p>+918056595033</p>
                    <p>gajasapple@gmail.com</p>
                    <p>Berlin,Germany</p>

                        

                    
                </div>
                <div className="footer-box2">
                <h1>Social media</h1>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-twitter"></a>
                        <a href="#" className="fa fa-youtube"></a>
                        <a href="#" className="fa fa-instagram"></a>  
                </div>
        </div>
        <p>___________________________________________________________________________________________________________________________________________________________________________________</p>
  <p>&copy; HAPPY BIRTHDAY</p>
</footer>

    </>
  )
}
