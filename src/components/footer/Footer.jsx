import './footer.scss';

export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='links'>

        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='#work'>Work</a></li>
          <li><a href='#funding'>Funding</a></li>
          <li><a href='#faqs'>FAQ</a></li>
          <li><a href='#gallery'>Image Gallery</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>

        <ul>
          <li>Giving Links</li>
          <li><a href='https://bit.ly/venhuizen-giving'>YWAM</a></li>
          <li><a href='https://venmo.com/keithvenh'>Venmo</a></li>
          <li><a href='http://cash.me/$keithvenh'>CashApp</a></li>
          <li><a href='https://www.givesendgo.com/venhuizen-giving'>GiveSendGo</a></li>
          <li><a href='#contact'>USPS</a></li>
        </ul>

      </div>
      <p className='copyright'>
        &copy; {currentYear} VenHuizen Family Ministries, Engage With God, Keith VenHuizen
      </p>
    </footer>
  )
}