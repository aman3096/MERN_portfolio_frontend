import React from 'react';
import SignUp from "../../assets/upsign.svg"
import Email from "../../assets/email.webp";
import Lock from "../../assets/lock.webp";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';
const Register = () => {
  return (
    <div className='logins'>
    <div className="row">
    <div className="col-md-6">
        <center>
            <img src={SignUp} className="login-img" alt="Register/Login"/>
            <div>Create an account</div>



            </center>
        </div>  
        <div className="col-md-6">            
            <h2>Sign up</h2>
        <div className="d-grid gap-3">
    
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
            <img className="icons" src={Email}/>
            </span>
            <input className="form-control" placeholder="Your Email"/>
            </div> 
        

            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
            <img className="icons" src={Lock}/>



            </span>

            <input className="form-control" placeholder="Password"/>
            </div> 
        
            <div>
            <button className="reg-btn btn btn-dark">Sign up</button>
            
            </div>
            <h5>Or Login with</h5> 
                <div className="d-flex">
                    <Button sx={{color:"#4267B2"}}>
                        <FacebookIcon></FacebookIcon>
                    </Button>

                    <Button sx={{color:"#1DA1F2"}}>
                        <TwitterIcon></TwitterIcon>
                    </Button>
                    <Button sx={{color:"#DB4437"}}>
                        <GoogleIcon></GoogleIcon>
                    </Button>
                </div>
        </div>
        </div>
        
    </div>
</div>
  );
}

export default Register;
