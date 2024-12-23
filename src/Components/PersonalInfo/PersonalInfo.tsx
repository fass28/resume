import { useTranslation } from 'react-i18next'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import cv_download from '../../assets/download/DEV_FASS_CV.pdf'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import { Link, Stack } from '@mui/material';
import '../../App.css'
import '../../index.css'

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
          <a href={cv_download} download="Freddy_Saavedra_CV.pdf">
            <button className='btn btn-outline-danger'>
              <i className='icon-down-circled2 '></i>
              {translate('personal_info:description.button')}
            </button>
          </a>
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
          <Stack direction='row' spacing={3} sx={{ padding: '10px' }}>
            <Link href='https://www.linkedin.com/in/freddy-saavedra-s/' target='_blank' underline='none' sx={{ color: 'inherit', textDecoration: 'none' }}>
              <LinkedInIcon />
            </Link>
            <Link href='https://www.linkedin.com/in/freddy-saavedra-s/' target='_blank' underline='none' sx={{ color: 'inherit', textDecoration: 'none' }}>
              <GitHubIcon />
            </Link>
            <Link href='https://www.linkedin.com/in/freddy-saavedra-s/' target='_blank' underline='none' sx={{ color: 'inherit', textDecoration: 'none' }}>
              <InstagramIcon />
            </Link>
          </Stack>
        </div>
        <div className='col-lg-4 about-card'>
          <h3 className='font-weight-light'>
            {translate('personal_info:skills.title')}
          </h3>
          <span className='line mb-5'></span>
          <div className='col' style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
            <div className='col-1 text-danger pt-1'>
              <IntegrationInstructionsIcon />
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
