import '../../App.css'
import '../../index.css'
import { useTranslation } from 'react-i18next'

export const PersonalInfo = () => {
  const { t: translate } = useTranslation()
  return (
    <div className='container-fluid'>
      <div id='about' className='row about-section'>
        <div className='col-lg-4 about-card'>
          <h3 className='font-weight-light'>
            {translate('personal_info:description.title')}
          </h3>
          <span className='line mb-5'></span>
          <h5 className='mb-3'>
            {translate('personal_info:description.subtitle')}
          </h5>
          <p className='mt-20'>{translate('personal_info:description.text')}</p>
          <button className='btn btn-outline-danger'>
            <i className='icon-down-circled2 '></i>
            {translate('personal_info:description.button')}
          </button>
        </div>
        <div className='col-lg-4 about-card'>
          <h3 className='font-weight-light'>
            {translate('personal_info:my_info.title')}
          </h3>
          <span className='line mb-5'></span>
          <ul className='mt40 info list-unstyled'>
            <li>
              <span>{translate('personal_info:my_info.age')}</span>
            </li>
            <li>
              <span className='info-data'>
                {translate('personal_info:my_info.email')}
              </span>
            </li>
            <li>
              <span className='info-data'>
                {translate('personal_info:my_info.phone')}
              </span>
            </li>
            <li>
              <span className='info-data'>
                {translate('personal_info:my_info.address')}
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
          <h3 className='font-weight-light'>
            {translate('personal_info:skills.title')}
          </h3>
          <span className='line mb-5'></span>
          <div className='row'>
            <div className='col-1 text-danger pt-1'>
              <i className='ti-paint-bucket icon-lg'></i>
            </div>
            <div className='col-10 ml-auto mr-3'>
              <h6>{translate('personal_info:skills.subtitle')}</h6>
              <p className='subtitle'>
                {translate('personal_info:skills.text')}
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
