import '../../App.css'
import '../../index.css'
import { useEffect, useState } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { Button, Stack, Link } from '@mui/material'
import { DarkModeSwitch, Language } from './Components'
import cv_download from '../../assets/download/DEV_FASS_CV.pdf'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import i18next from '../../i18n'


export const Header = () => {
  const [darkMode, setDarkMode] = useState(true)
  const { t: translate } = useTranslation()
  const navigate = useNavigate()

  const handleDownload = () => {

  };


  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [darkMode]);


  const handleDarkMode = () => {
    setDarkMode(!darkMode)

  }

  const handleChangeLanguage = (lng: string) => {
    const body = document.body
    body.classList.toggle('language')
    const dynamicLang = lng === 'en-USA' ? '/' : lng
    navigate(dynamicLang)
    i18next.changeLanguage(lng)
  }

  return (
    <header className='header'>
      <div className='container'>
        <Stack direction="row" spacing={3} sx={{ padding: '10px' }}>
          <Link href='https://www.linkedin.com/in/freddy-saavedra-s/' target='_blank' underline='none'
            sx={{ color: 'inherit', textDecoration: 'none' }}>
            <LinkedInIcon />
          </Link>
          <Link href='https://github.com/fass28' target='_blank' underline='none'
            sx={{ color: 'inherit', textDecoration: 'none' }}>
            <GitHubIcon />
          </Link>
          <Link href='https://www.instagram.com/freddysaavedra/' target='_blank' underline='none'
            sx={{ color: 'inherit', textDecoration: 'none' }}>
            <InstagramIcon />
          </Link>
          <li
            style={{
              listStyle: 'none',
              position: 'relative',
            }}
          >
            <div
              style={{
                padding: '0',
                outline: 'none',
                display: 'flex',
                gap: '100px',
                position: 'fixed',
                right: '0',
                zIndex: 2000,
              }}
            >
              <Language handleRedirect={handleChangeLanguage} />
              <Button
                sx={{
                  color: darkMode ? 'black' : '#e1cd4b',
                  padding: '5px',
                }}
                onClick={handleDarkMode}
              >
                <DarkModeSwitch checked={darkMode} />
              </Button>
            </div>
          </li>
        </Stack>
        <div className='header-content'>
          <h4 className='header-subtitle'>{translate('header:title')}</h4>
          <h1 className='header-title'>{translate('header:name')}</h1>
          <h6 className='header-mono'>{translate('header:subtitle')}</h6>
          <a href={cv_download} download='freddy_saavedra_cv.pdf'>
            <button className='btn btn-primary btn-rounded' onClick={handleDownload} >
              <CloudDownloadIcon fontSize='small' sx={{ marginRight: '8px' }} />
              {translate('header:print')}
            </button>
          </a>
        </div>
      </div>
    </header >
  )
}
