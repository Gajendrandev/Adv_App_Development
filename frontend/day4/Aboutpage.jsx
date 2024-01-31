import {  Link } from "react-router-dom";
import '../../assets/admincss/Aboutpage.css'
export const Aboutpage = () => {
    let data =[
        {
            id: 1,
            imgSrc: 'https://images.pexels.com/photos/4684179/pexels-photo-4684179.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
        {
            id: 2,
            imgSrc: 'https://images.pexels.com/photos/4262426/pexels-photo-4262426.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
        {
            id: 3,
            imgSrc: 'https://images.pexels.com/photos/7867230/pexels-photo-7867230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
            id: 4,
            imgSrc: 'https://images.pexels.com/photos/2093717/pexels-photo-2093717.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
        {
            id: 5,
            imgSrc: 'https://images.pexels.com/photos/7599516/pexels-photo-7599516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
            id: 6,
            imgSrc: 'https://images.pexels.com/photos/7180787/pexels-photo-7180787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
            id: 7,
            imgSrc: 'https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?cs=srgb&dl=pexels-sohail-nachiti-807598.jpg&fm=jpg',
        },
        {
            id: 8,
            imgSrc: '',
        },
        {
            id: 9,
            imgSrc: 'https://images.pexels.com/photos/6113239/pexels-photo-6113239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
            id: 10,
            imgSrc: 'https://images.pexels.com/photos/7180801/pexels-photo-7180801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        }
    ]
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

            <div className="about-centre-box">
                <div className="container">
                    <p>Welcome to Happy day, where we transform ordinary birthdays into extraordinary memories! At Happy day,
                         we understand that each birthday is a unique celebration of life, and we are here to make it truly special. 
                         Our passionate team of event planners is committed to orchestrating seamless, personalized experiences that reflect your vision and style.
                          With creativity, attention to detail, and a sprinkle of magic, we curate events that leave a lasting impression.
                           Whether its an intimate gathering or a grand affair, let us handle the details while you focus on enjoying every moment.
                         Discover the art of celebration with Happy day and let us make your birthday dreams come true!</p><br></br><br></br>

                         
                    

                </div>
            </div>
            <div className='centre-font'>
            <center><h2>Birthday packages</h2></center>
            <center><p>Surprise your loved ones on their birthday with beautiful decorations, party ideas and themes,based on packages!!</p></center>
        </div>
        <br></br><br></br>
   
        <div className="gallery">
            {data.map((items, index)=>{
                return(
                    <div className="pics" key={index}>
                        <img src={items.imgSrc} style={{width: '100%'}} />
                    </div>
                )
            })}
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
