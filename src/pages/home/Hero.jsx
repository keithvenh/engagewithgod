import './hero.scss';

import Logo from '../../components/header/Logo';
import Button from '../../components/button/Button';

export default function Hero() {

  return (
    <article className='hero home-hero'>

      <Logo color="offWhite" size="96px" />

      <h1 className='brand-wordmark'>VenHuizen<br/><span>Family Ministries</span></h1>

      <p>Cultivating Christian Communities around the world through  Bible translation, distribution and education.</p>

      <Button 
        text='Partner With Us' 
        link='https://bit.ly/venhuizen-giving'
        style="primary_white" 
      />

    </article>
  )
}