import {  Link } from "react-router-dom";
import '../../assets/admincss/Goldpack.css'

export const Goldpack = () => {
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
    <div className="center-text">
        <h1>GOLD PACK</h1>
        <br></br>
        <h2>Silver package is for 5 to 10 members, which contains Dance floor, DJ party and Game host for children and adult as default event.Food and cake are default for every package</h2>
        <h3>(you can also choose your favorite event, which has additionl cost!!)</h3>
    </div>
    <div className='gold-type'>
            <br></br>
            
            <div className="polaroid-gold">
                    <img src="https://makemyevent.in/wp-content/uploads/2018/10/Dancing-Floor.jpg" width={400} height={250} alt="Norway" ></img>
                    <div className="container">
                    <center><h2>DANCE FLOOR</h2></center>

                    </div>
                </div>
            <div className="polaroid-gold">
                <img src="https://makemyevent.in/wp-content/uploads/2018/10/DJ-Sound-1.jpg" width={400} height={250} alt="Norway" ></img>
                <div className="container">
                <center><h2>DJ PARTY</h2></center>
                    

                </div>
            </div>
            <div className="polaroid-gold">
                <img src="https://makemyevent.in/wp-content/uploads/2018/10/Game-Host.jpg" width={400} height={250} alt="Norway" ></img>
                <div className="container">
                    <center><h2>GAME HOST</h2></center>
                    

                </div>
            </div>
            </div>
            <div className='gold-type'>
            <br></br>
            <div className="polaroid-gold">
                    <img src="https://makemyevent.in/wp-content/uploads/2018/10/Punjabi-Dhol.jpg" width={400} height={250} alt="Norway" ></img>
                    <div className="container">
                    <center><h2>PUNJABI DHOOL</h2></center>

                    </div>
                </div>
                <div className="polaroid-gold">
                    <img src="https://makemyevent.in/wp-content/uploads/2018/10/Bouncy-Castle.jpg" width={400} height={250} alt="Norway" ></img>
                    <div className="container">
                    <center><h2>BOUNCY CASTLE</h2></center>

                    </div>
                </div>
                <div className="polaroid-gold">
                    <img src="https://makemyevent.in/wp-content/uploads/2018/10/Chocolate-Fountain.jpg" width={400} height={250} alt="Norway" ></img>
                    <div className="container">
                    <center><h2>CHOCOLATE FOUNTAIN</h2></center>

                    </div>
                </div>
            </div>
        
        <div className="b-low">
        <center><Link to="/Goldevent"><button className="button"><span>Book </span></button></Link></center>
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
