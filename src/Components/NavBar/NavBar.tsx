import { useTranslation } from 'react-i18next'
import avatar from '../../assets/img/avatar.jpg'
import '../../App.css'
import '../../index.css'
import { useState } from 'react'




export const NavBar = () => {
  const { t: translate } = useTranslation()
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const closeNavbar = () => {
    setIsOpen(false); // Cierra el menú siempre
  };
  return (
    <>
      <nav
        className='navbar sticky-top navbar-expand-lg navbar-light bg-white'
        data-spy='affix'
        data-offset-top='510'
      >
        <div className='container'>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarSupportedContent"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse mt-sm-20 ${isOpen ? 'show' : ''
              }`}
            id="navbarSupportedContent"
          >
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item' onClick={closeNavbar}>
                <a href='#home' className='nav-link'>
                  {translate('navbar:home')}
                </a>
              </li>
              <li className='nav-item'>
                <a href='#about' className='nav-link' onClick={closeNavbar}>
                  {translate('navbar:about')}
                </a>
              </li>
              <li className='nav-item' onClick={closeNavbar}>
                <a href='#resume' className='nav-link'>
                  {translate('navbar:resume')}
                </a>
              </li>
            </ul>
            <ul className='navbar-nav brand' style={{ width: '100%' }}>
              <img src={avatar} alt='' className='brand-img' />
              <li className='brand-txt'>
                <h5 className='brand-title'> {translate('navbar:title')}</h5>
                <div className='brand-subtitle'>
                  {translate('navbar:subtitle')}
                </div>
              </li>
            </ul>
            <ul style={{ width: '100%' }} className='navbar-nav brand'>
              <li className=' '>
                <a href='#portfolio' className='nav-link'>
                  {translate('navbar:portfolio')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
