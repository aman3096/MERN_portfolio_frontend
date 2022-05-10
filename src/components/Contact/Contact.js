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
        <div className="col">
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
        <div className="row g-5">
          <div className="col">
            <input className="input form-control" placeholder="Your Name"  type="text" />
          </div>
          <div className="col">
            <input className="input form-control" placeholder="Your Email"  type="text" />
          </div>
          <div className="col">
            <input className="input form-control" placeholder="Your Phone"  type="text" />
          </div>
          <div className="col-12">
            <textarea placeholder="Your Message" rows="5" className="input form-control"/> 
           </div>
           <div className="col-6">
          <button className="btn btn-primary">Send Message</button>
        </div>
        </div>
        
      </div>

    </div>
  );
}

export default Contact;
