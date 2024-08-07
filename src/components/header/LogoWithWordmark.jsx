import Logo from './Logo';

export default function LogoWithWordmark({color, size}) {
  return (
    <div className='logo-with-wordmark'>
      <Logo color={color} size={size} />
      <p className='logo-wordmark'>VenHuizen Family Ministries</p>
    </div>
  )
}