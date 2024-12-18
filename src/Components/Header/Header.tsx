import '../../App.css'
import '../../index.css'
import { Button } from '@mui/material'
import { useState } from 'react'
import { DarkModeSwitch, Language } from './Components'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import i18next from '../../i18n'

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false)
  const { t: translate } = useTranslation()
  const navigate = useNavigate()

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
    const body = document.body
    body.classList.toggle('dark-mode')
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
        <ul className='social-icons pt-3'>
          <li className='social-item'>
            <a className='social-link text-light' href='#'>
              <i className='ti-facebook' aria-hidden='true'></i>
            </a>
          </li>
          <li className='social-item'>
            <a className='social-link text-light' href='#'>
              <i className='ti-twitter' aria-hidden='true'></i>
            </a>
          </li>
          <li className='social-item'>
            <a className='social-link text-light' href='#'>
              <i className='ti-google' aria-hidden='true'></i>
            </a>
          </li>
          <li className='social-item'>
            <a className='social-link text-light' href='#'>
              <i className='ti-instagram' aria-hidden='true'></i>
            </a>
          </li>
          <li className='social-item'>
            <a className='social-link text-light' href='#'>
              <i className='ti-github' aria-hidden='true'></i>
            </a>
          </li>
          <li
            style={{
              listStyle: 'none',
              position: 'absolute',
              right: '0',
            }}
          >
            <div
              style={{
                padding: '0',
                outline: 'none',
                display: 'flex',
                gap: '100px',
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
                <DarkModeSwitch />
              </Button>
            </div>
          </li>
        </ul>
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
