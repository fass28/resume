import '../../../App.css'
import '../../../index.css'
import { IconButton } from '@mui/material'

import { useState } from 'react'
import { DarkModeSwitch } from './Components/'

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false)

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
    const body = document.body
    body.classList.toggle('dark-mode')
  }

  const handleChangeLanguage = () => {
    const body = document.body
    body.classList.toggle('language')
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
              }}
            >
              <IconButton
                sx={{ marginRight: '100px', color: 'white' }}
                onClick={handleChangeLanguage}
              ></IconButton>
              <IconButton
                sx={{
                  color: darkMode ? 'black' : '#e1cd4b',
                  padding: '5px',
                }}
                onClick={handleDarkMode}
              >
                <DarkModeSwitch />
              </IconButton>
            </div>
          </li>
        </ul>
        <div className='header-content'>
          <h4 className='header-subtitle'>Hello, I am</h4>
          <h1 className='header-title'>Freddy S.</h1>
          <h6 className='header-mono'>Frond end Designer | Developer</h6>
          <button className='btn btn-primary btn-rounded'>
            <i className='ti-printer pr-2'></i>Print Resume
          </button>
        </div>
      </div>
    </header>
  )
}
