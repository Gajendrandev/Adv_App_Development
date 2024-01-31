import {  Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import '../../assets/usercss/Adminhome.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
export const Adminhome = () => {
  const event = [
    { label: 'popcorn stall' },
    { label: 'Dance Floor' },
    { label: 'Music show' },
    { label: 'Designer Entrance'},];
    const venue = [
      { label: 'Chennai'},
      { label: 'Coimbatore'},
      { label: 'Madurai'},
      { label: 'Karaikudi' },];
  
  return (
    <>
    
     <header className="header">
    <nav className="nav-items">
  
    <Link to="/"></Link>
    <Link to="/adad">Add Event</Link>
    <Link to="/Adminview">View booking</Link>
    <Link to="/Login">Logout</Link>
    
</nav>
</header>
<div className='AhomeBox'>
        <div className='Abox-left'> 
                
<p>Add Event</p>
          <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={event}
      // sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Event" />}
    />
    
<p>Remove Event</p>
<Autocomplete
      disablePortal
      id="combo-box-demo"
      options={event}
      // sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Event" />}
    />
    <p>Add venue</p>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={venue}
      // sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="venue" />}
    />
    <p>Remove venue</p>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={venue}
      // sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="venue" />}
    />
<Stack spacing={2} direction="row">
<Button variant="contained">Confirm</Button>
</Stack>
    
    
    </div>

   <div className="Abox-right">   
            <img src="https://images.pexels.com/photos/2035735/pexels-photo-2035735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={550} height={700} alt="home" ></img>
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
