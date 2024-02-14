import { TextField,Box,Slider,FormControl,InputLabel,Select,MenuItem, Button } from "@mui/material"
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../assets/css/user/Package.css'
import { Navbar } from "../../components/user/Navbar";
import axios from "axios";
export const Gold = () => {
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [open, setOpen] = useState(false);
  const package_name="Gold"
  const [name,setName]=useState("");
  const [venue,setVenue]=useState("");
  const [members,setMembers]=useState();
  const [food,setFood]=useState();
  const events = selectedCheckboxes.join(', ');
  const navigate=useNavigate();

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
    navigate('/myevents')
  };
  const handleSubmit=async(e)=>{
    e.preventDefault();
    let userid=localStorage.getItem('user');
    try{
      const response =await axios.post(`http://localhost:8080/api/v1/auth/addBooking`,{
        name:name,
        userid:userid,
        package_name:package_name,
        venue:venue,
        food:food,
        members:members,
        events:events
      })
      console.log(response)
    }catch(error){
      console.log(error);
    }
    setOpen(true);

  }


  return (
    <div className="package">
        <Navbar></Navbar>
        <br></br>
        <div>
          <center>
          <h4>Gold package</h4>
          <p>For 20 to 50 members, a memorable birthday</p>
          </center>
        </div>

        <form className="package-form" onSubmit={handleSubmit}>
            <TextField label="Name" type="text" value={name} sx={{ width: 500 }} onChange={(event)=>{setName(event.target.value)}} required variant="standard"></TextField>
              <label>No of members</label>
            <Box  sx={{ width: 500 }}>
              
              <Slider
                size="small"
                defaultValue={25}
                min={21}
                value={members}
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
                  value={food}
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
        </form>
    </div>
  )
}