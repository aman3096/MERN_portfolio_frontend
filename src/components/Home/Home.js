
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';
import Login from "../../assets/signup.webp";
import Name from "../../assets/name.webp";
import Email from "../../assets/email.webp";
import Phone from "../../assets/phone.webp";
import Job from "../../assets/job.webp";
import Lock from "../../assets/lock.webp";
import Clock from "../../assets/clock.webp"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='container'>
      <div className="mx-auto home-style row d-flex align-items-center">
            <div className="col-6">            
              <h2>Sign up</h2>
            <div className="d-grid gap-3">
              <div className="input-group mb-3"> 
              <span className="input-group-text" id="basic-addon1">
                <img className="icons" src={Name}/>
              </span>

              <input className="form-control" placeholder="Your Name"/>
              </div>
              <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
               <img className="icons" src={Email}/>
              </span>
              <input className="form-control" placeholder="Your Email"/>
              </div> 
              <div className="input-group mb-3">
                
              <span className="input-group-text" id="basic-addon1">
              <img className="icons" src={Phone}/>
              </span>
 
              <input className="form-control" placeholder="Mobile Number"/>
              </div> 
              <div className="input-group mb-3"> 
              <span className="input-group-text" id="basic-addon1">              <img className="icons" src={Job}/>
</span>
              <input className="form-control" placeholder="Your Profession"/>
              </div> 
              <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
              <img className="icons" src={Lock}/>
              </span>

              <input className="form-control" placeholder="Password"/>
              </div> 
              <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
              <img className="icons" src={Clock}/>

              </span>

              <input className="form-control" placeholder="Confirm your password"/>
              </div> 
              <div>
                <button className="reg-btn btn btn-dark">Register</button>
              </div>
            </div>
            </div>
            <div className="col-6">
              <img src={Login} className="login-img" alt="Register/Login"/>
              <center>
              <Link to="login">
                Already registered?
              </Link>
              </center>
            </div>


      </div>
    </div>
  );
}

export default Home;
