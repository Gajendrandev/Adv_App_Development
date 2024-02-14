import {  Link } from "react-router-dom";
import '../../assets/admincss/Platinumview.css'
export const Platinumview = () => {
  return (
    <><header className="header">
          <nav className="nav-items">

              <Link to="/Home">Home</Link>
              <Link to="/Aboutus">About us</Link>
              <Link to="/Enquiry">Enquiry</Link>
              <Link to="/Login">Logout</Link>

          </nav>
      </header>
      
            <div className='Pbod-reg'>
    <div className="Pview-container1">
      <div className="Pview-card1">
        <img src="https://5.imimg.com/data5/EP/VS/IM/SELLER-62725577/platinum-design-packages-500x500.png" width={250} height={250} ></img>
        <div className="login1">
        <h2>Event booked!!</h2>
        </div>
        <p>NAME:GAJENDRAN</p>
        <p>EMAIL ID:gajasapple@gmail.com</p>
        <p>PLAN:PLATINUM PACK</p>
        <p>DATE:28/02/2024</p>
        <p>MOBILE:80565955033</p>
        <p>VENUE:MADURAI</p>
        <p>FOOD:NON-veg</p>
        <Link to="/Backplatinum">Back to booking!!!</Link>
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
          </footer></>

  )
}
