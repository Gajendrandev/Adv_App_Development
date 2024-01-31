import '../../assets/admincss/Navbar.css'
import {  Link } from "react-router-dom";
export const HomePage = () => {
    
  return (
    <>
    <header className="header">
    <nav className="nav-items">
  
    <Link to="/">Home</Link>
    <Link to="/Aboutus">About us</Link>
    <Link to="/Enquiry">Enquiry</Link>
    <Link to="/Login">Logout</Link>
    
</nav>
</header>
    <div className='homeBox'>
        <div className='box-left'> 
        <p>where we turn dreams into unforgettable celebrations! As a premier birthday event management company,
        we specialize in crafting unique and personalized experiences that bring your vision to life. From intimate gatherings to extravagant parties, 
        our team is dedicated to orchestrating every detail with precision and creativity.
        we understand the significance of birthdays and believe that each celebration should reflect the individuality of the honoree.
        Our commitment to excellence, coupled with a passion for creating magical moments, sets us apart.
        Explore our services and let us transform your birthday celebration into a seamless and joy-filled event that will be cherished for a lifetime..</p>
        
            <img src="https://images.pexels.com/photos/2035735/pexels-photo-2035735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={600} height={500} alt="home" ></img>
        </div>
        </div>
        

        <div className='centre-font'>
            <center><h2>Birthday packages</h2></center>
            <center><p>Surprise your loved ones on their birthday with beautiful decorations, party ideas and themes,based on packages!!</p></center>
        </div>
        <br></br>
        
        <div className='package-type'>
            <br></br>
            <div className="polaroid">
                    <img src="https://images.pexels.com/photos/2072181/pexels-photo-2072181.jpeg?auto=compress&cs=tinysrgb&w=800" width={400} height={250} alt="Norway" ></img>
                    <div className="container">
                        <p>SILVER PACK</p>
                        <p>For 5 to 10 members with awesome events for your special one!!</p>
                        <Link to='/Silver'><button className="btn homebtn">View</button></Link>

                    </div>
                </div>
            <div className="polaroid">
                <img src="https://images.pexels.com/photos/428124/pexels-photo-428124.jpeg?auto=compress&cs=tinysrgb&w=800" width={400} height={250} alt="Norway" ></img>
                <div className="container">
                <p>GOLD PACK</p>
                    <p>For 10 to 30 members with awesome events for your special one!!</p>
                   <Link to='/Gold'> <button className="btn">View</button></Link>

                </div>
            </div>
            <div className="polaroid">
                <img src="https://images.pexels.com/photos/1729808/pexels-photo-1729808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={400} height={250} alt="Norway" ></img>
                <div className="container">
                <p>PLATINUM PACK</p>
                    <p>For 30 to 100 members, with awesome events for your special one!!</p>
                    <Link to='/Platinum'><button className="btn">View</button></Link>

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

