import '../../App.css'
import '../../index.css'
import { useEffect, useState } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button, Stack } from '@mui/material'
import { DarkModeSwitch, Language } from './Components'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import i18next from '../../i18n'


export const Header = () => {
  const [darkMode, setDarkMode] = useState(true)
  const { t: translate } = useTranslation()
  const navigate = useNavigate()

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
          <LinkedInIcon />
          <InstagramIcon />
          <GitHubIcon />
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
          <button className='btn btn-primary btn-rounded'>
            <i className='ti-printer pr-2'></i>
            {translate('header:print')}
          </button>
        </div>
      </div>
    </header>
  )
}
