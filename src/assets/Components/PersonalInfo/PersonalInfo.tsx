import '../../../App.css'
import '../../../index.css'

export const PersonalInfo = () => {
  return (
    <div className='container-fluid'>
      <div id='about' className='row about-section'>
        <div className='col-lg-4 about-card'>
          <h3 className='font-weight-light'>Who am I ?</h3>
          <span className='line mb-5'></span>
          <h5 className='mb-3'>A Web Developer | Located In Lima - Peru</h5>
          <p className='mt-20'>
            I am a Mechatronics Engineer transitioning into web development,
            driven by a strong enthusiasm to establish a career in this field. I
            am eager to enhance my programming skills, contribute to innovative
            technologies, and grow as a professional in the tech industry.
          </p>
          <button className='btn btn-outline-danger'>
            <i className='icon-down-circled2 '></i>Download My CV
          </button>
        </div>
        <div className='col-lg-4 about-card'>
          <h3 className='font-weight-light'>Personal Info</h3>
          <span className='line mb-5'></span>
          <ul className='mt40 info list-unstyled'>
            <li>
              <span>Birthdate</span>
              <span className='info-data'>: 28/07/1993</span>
            </li>
            <li>
              <span>Email</span>
              <span className='info-data'>: freddy.saavedra2807@gmail.com</span>
            </li>
            <li>
              <span>Phone</span>
              <span className='info-data'>: + (51) 917325863</span>
            </li>
            <li>
              <span>Address</span>
              <span className='info-data'>
                : Peru - Lima - Lima - Carabayllo
              </span>
            </li>
          </ul>
          <ul className='social-icons pt-3'>
            <li className='social-item'>
              <a className='social-link' href='#'>
                <i className='ti-facebook' aria-hidden='true'></i>
              </a>
            </li>
            <li className='social-item'>
              <a className='social-link' href='#'>
                <i className='ti-twitter' aria-hidden='true'></i>
              </a>
            </li>
            <li className='social-item'>
              <a className='social-link' href='#'>
                <i className='ti-google' aria-hidden='true'></i>
              </a>
            </li>
            <li className='social-item'>
              <a className='social-link' href='#'>
                <i className='ti-instagram' aria-hidden='true'></i>
              </a>
            </li>
            <li className='social-item'>
              <a className='social-link' href='#'>
                <i className='ti-github' aria-hidden='true'></i>
              </a>
            </li>
          </ul>
        </div>
        <div className='col-lg-4 about-card'>
          <h3 className='font-weight-light'>What I Offer</h3>
          <span className='line mb-5'></span>
          <div className='row'>
            <div className='col-1 text-danger pt-1'>
              <i className='ti-paint-bucket icon-lg'></i>
            </div>
            <div className='col-10 ml-auto mr-3'>
              <h6>Web Development</h6>
              <p className='subtitle'>
                Build, Maintenance, Update and Best Practices.
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
