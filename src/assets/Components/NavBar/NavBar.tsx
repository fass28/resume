import avatar from '../../../assets/img/avatar.jpg'
import '../../../App.css'
import '../../../index.css'
import { useTranslation } from 'react-i18next'

export const NavBar = () => {
  const { t: translate } = useTranslation()
  return (
    <nav
      className='navbar sticky-top navbar-expand-lg navbar-light bg-white'
      data-spy='affix'
      data-offset-top='510'
    >
      <div className='container'>
        <button
          className='navbar-toggler ml-auto'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse mt-sm-20 navbar-collapse'
          id='navbarSupportedContent'
        >
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <a href='#home' className='nav-link'>
                {translate('navbar:home')}
              </a>
            </li>
            <li className='nav-item'>
              <a href='#about' className='nav-link'>
                {translate('navbar:about')}
              </a>
            </li>
            <li className='nav-item'>
              <a href='#resume' className='nav-link'>
                {translate('navbar:resume')}
              </a>
            </li>
          </ul>
          <ul className='navbar-nav brand'>
            <img src={avatar} alt='' className='brand-img' />
            <li className='brand-txt'>
              <h5 className='brand-title'> {translate('navbar:title')}</h5>
              <div className='brand-subtitle'>
                {translate('navbar:subtitle')}
              </div>
            </li>
          </ul>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <a href='#portfolio' className='nav-link'>
                {translate('navbar:portfolio')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
