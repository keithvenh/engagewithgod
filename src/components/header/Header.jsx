import './header.scss';

import LogoWithWordmark from './LogoWithWordmark';
import Navbar from './Navbar';

export default function Header() {

  return (
    <header className='header'>
      <a href='/'>
        <LogoWithWordmark color="blue" size="32px" />
      </a>
      <Navbar />
    </header>
  )
}