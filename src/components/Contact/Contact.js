import './contact.css';
import Mail from "../../assets/envelope.svg" 
import Location from "../../assets/location.svg"

const Contact = () => {
  return (
    <div className="container contains overflow-hidden">
      <div className="row g-5">
        <div className="col">
          <div className="p-3 border bg-light d-flex justify-content-start align-items-center curved">
              <img src={Mail} className="mail"/>
              <div>
                <h4>Email</h4>
                <div className="address">aman.tandon3096@gmail.com</div>
              </div>
          </div>  
        </div>
        <div className="col ">
          <div className="p-3 border bg-light d-flex justify-content-start align-items-center curved">
          <img src={Location} className="mail"/>

            <div>
                  <h4>Address</h4>
                  <div className="address">Bangalore, KA, India </div>
                </div> 
            </div>  
        </div>
      </div>

      <div className="align-items-center paper" >
        <h1>Get in Touch</h1> 
        <div>
          <input className='input' type="text" />
        </div>
      </div>

    </div>
  );
}

export default Contact;
