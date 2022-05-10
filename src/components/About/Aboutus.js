import './Aboutus.css';
import amanpic from "../../assets/amanpic.webp"
const Aboutus = () => {
  return (
    <>
      <div className="container absolut">
        <div className="row united">
          <div className="col-md-4">
            <img className="img-dim" src={amanpic}/>
          </div>
          <div className="col-md-8">
            Aman Tandon
            <div className="profession">Full Stack Web Developer</div>
            <div className='row'>
              <div className="col-md-6">
                User Id
              </div>
              <div className="col-md-6 endd">
                6634345342
              </div>
            </div>
            <div className='row'>
              <div className="col-md-6">
                Name
              </div>
              <div className="col-md-6 endd">
                Aman Tandon
              </div>
            </div>
            <div className='row'>
              <div className="col-md-6">
                Email
              </div>
              <div className="col-md-6 endd">
                aman.tandon3096@gmail.com
              </div>
            </div>
            <div className='row'>
              <div className="col-md-6">
                  Profession
              </div>
              <div className="col-md-6 endd">
                Web Developer
              </div>
            </div>
            <div className='row'>
              <div className="col-md-6">
                User Id
              </div>
              <div className="col-md-6 endd">
                6634345342
              </div>
            </div>
          </div>
        </div> 
      </div>
    </>
  );
}

export default Aboutus;
