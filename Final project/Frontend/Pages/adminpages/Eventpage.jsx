
import { TextField,Box,Slider,FormControl,InputLabel,Select,MenuItem, Button } from "@mui/material"
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import {  Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
export const Eventpage = () => {
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [open, setOpen] = useState(false);

  const [email,setEmail]=useState("");
  const [venue,setVenue]=useState("");
  const [members,setMembers]=useState();
  const [package_name,setPackagename]=useState("");
  const [date,setDate]=useState("");
  const [food,setFood]=useState();
  const events = selectedCheckboxes.join(', ');
 

  const handleCheckboxChange = (name) => {
    if (selectedCheckboxes.includes(name)) {
      setSelectedCheckboxes(selectedCheckboxes.filter((item) => item !== name));
    } else if (selectedCheckboxes.length < 4) {
      setSelectedCheckboxes([...selectedCheckboxes, name]);
    }
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
    return;
    }
    setOpen(false);
    
  };
  const navigate=useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    let userid=localStorage.getItem('user');
    try{
      const response =await axios.post(`http://localhost:8080/api/v1/auth/bookingsPost`,{
 
        userid:userid,
        package_name:package_name,
        email:email,
        date:date,
        venue:venue,
        food:food,
        member:members,
        events:events
      })
      console.log(response)
      navigate("/landing")
      
    }catch(error){
      console.log(error);
    }
    setOpen(true);

  }


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
    <div className="package">
        <br></br>
        <div>
          
        </div>
        <div className='homeBox'>
        <form className="package-form" onSubmit={handleSubmit}>
        <center>
          <h3>Booking Your Event!!</h3>
          </center>
            {/* <TextField label="Name" type="text" value={name} sx={{ width: 500 }} onChange={(event)=>{setName(event.target.value)}} required variant="standard"></TextField> */}
            <TextField label="Email" type="text" value={email} sx={{ width: 500 }} onChange={(event)=>{setEmail(event.target.value)}} required variant="standard"></TextField>
            <Box >
              <FormControl required variant="standard" sx={{ minWidth: 350 }}>
                <InputLabel id="package_name">Package</InputLabel>
                <Select
            labelId="package_name"
            id="package_name"
            label="Package_name"
            value={package_name} // Ensure that the value is always defined
            onChange={(event) => { setPackagename(event.target.value) }}
        >
            <MenuItem value={"Silver"}>Silver Package</MenuItem>
            <MenuItem value={"Gold"}>Gold Package</MenuItem>
            <MenuItem value={"Platinum"}>Platinum Package</MenuItem> {/* Removed extra space */}
        </Select>
              </FormControl>
            </Box>
            <TextField label="Date(DD/MM/YYYY)" type="text" value={date} sx={{ width: 500 }} onChange={(event)=>{setDate(event.target.value)}} required variant="standard"></TextField>
            <br></br><label>No of members</label>
            <Box  sx={{ width: 500 }}>
              
              <Slider
                size="small"
                defaultValue={25}
                min={21}
                // value={members}
                onChange={(event)=>{setMembers(event.target.value)}}
                max={50}
                aria-label="Small"
                valueLabelDisplay="on"
              />
            </Box>
            
            <Box >
              <FormControl required variant="standard" sx={{ minWidth: 350 }}>
                <InputLabel id="venue-label">Venue</InputLabel>
                <Select
                  labelId="venue-label"
                  id="venue"
                  label="Venue"
                  onChange={(event)=>{setVenue(event.target.value)}}
                >
                  <MenuItem value={"Kanyakumari"}>Ninal party hall,Kanyakumari</MenuItem>
                  <MenuItem value={"Chennai"}>Residency towers, Chennai</MenuItem>
                  <MenuItem value={"Coimbatore"}>Anugraha Mahal, Coimbatore</MenuItem>
                  <MenuItem value={"Madurai"}>SS Grande, Madurai</MenuItem>
                  <MenuItem value={"Trichy"}>K&J Community hall,Trichy</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <label>Choose maximum of 4 events:</label>
              <br></br><br></br>
              <label>
              <input type="checkbox" name="Music show" checked={selectedCheckboxes.includes('Music show')} onChange={() => handleCheckboxChange('Music show')} />
              Music show
              </label>
              <label>
                <input type="checkbox" name="Dance floor" checked={selectedCheckboxes.includes('Dance floor')} onChange={() => handleCheckboxChange('Dance floor')} />
                Dance floor
              </label>
              <label>
                <input type="checkbox" name="Covered chairs" checked={selectedCheckboxes.includes('Covered chairs')} onChange={() => handleCheckboxChange('Covered chairs')} />
                Covered chairs
              </label>
              <label>
                <input type="checkbox" name="Birthday Cake" checked={selectedCheckboxes.includes('Birthday Cake')} onChange={() => handleCheckboxChange('Birthday Cake')} />
                Birthday Cake
              </label>
            </Box>
            <Box >
              <FormControl required sx={{ minWidth: 350 }} variant="standard">
                <InputLabel id="food-label">Food pack</InputLabel>
                <Select
                  labelId="food-label"
                  // value={food}
                  onChange={(event)=>{setFood(event.target.value)}}
                  id="food"
                  label="Food">
                  <MenuItem value={"Sea food"}>Sea food combo</MenuItem>
                  <MenuItem value={"Chicken dishes"}>Chicken dishes combo</MenuItem>
                  <MenuItem value={"Mutton combo"}>Mutton combo</MenuItem>
                  <MenuItem value={"All"}>Chicken + Mutton + Sea food Mega combo</MenuItem>
                  <MenuItem value={"Only Vegetarian"}>Only Vegetarian</MenuItem>
                  <MenuItem value={"Both veg and non-veg"}>Both veg and non-veg</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <p className="package-note">Note: Catering Service Include a) Buffet Setup b) Chaffing Dishes/Warmers c) Tables with Frill Cloth d) Plates and Cutlery e) Drinking Water with Dispenser and paper glass/  Bisleri Water Bottles- 250 ml Provided f) Service Staff in Proper uniform g) Live Counter setup h) Dustbins with covers </p>
            <Button type='submit' variant="contained">Book</Button>
            <Snackbar  open={open} autoHideDuration={2000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Booking successfull!
                    </Alert>
                </Snackbar>
        </form></div>
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

