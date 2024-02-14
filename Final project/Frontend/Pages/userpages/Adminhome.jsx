import {  Link } from "react-router-dom";
import '../../assets/usercss/Adminhome.css'
import axios from "axios";
import './admin.css'
import { useState,useEffect } from "react";
export const Adminhome = () => {
  const [user,setUser]=useState([]);
  const token=localStorage.getItem('token')
  const fetchDetails = async() =>{
    try {
      const response = await axios.get("http://localhost:8080/api/v1/auth/getUsersDetails", {
        headers: {
          "Authorization": `Bearer ${token}`,
          "cache-control": 'no-cache'
        }
      }
      )
      setUser(response.data)
    console.log(response.data)
  }catch(error){
    console.log(error)
  }
}

  useEffect(() => {
    fetchDetails()
  }, []);
  const DisplayData = user.map(
    book => {
      return(
      <div className="admin-contents " key={book.booking_id}>
        <p>User ID    : {book.userid}</p>
        <p>Name          : {book.name}</p>
        <p>Address       : {book.address}</p>
        <p>Age         : {book.age}</p>
        <p>Phone          : {book.phone}</p>
    </div>
    )
        
    }
  )
  return (
    <>
    
     <header className="header">
    <nav className="nav-items">
  
    <Link to="/"></Link>
    <Link to="/adad">View Users</Link>
    <Link to="/Adminview">View bookings</Link>
    <Link to="/Login">Logout</Link>
    
</nav>
</header>
<div>
{DisplayData}
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
