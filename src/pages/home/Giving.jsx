import './giving.scss';

import Button from '../../components/button/Button';

export default function Giving() {

  const ywamLogo = require('../../assets/images/UofNYWAMKonaLogo.avif');
  const venmoLogo = require('../../assets/images/Venmo_Logo_Blue.png');
  const cashappLogo = require('../../assets/images/RGB_CashApp_Logo_Primary_Black.png');
  const giveSendGoLogo = require('../../assets/images/gsg-logo-red-blue.png');

  return (
    <article className='giving'>

      <h2>Ways to Give</h2>
      
      <p>We have a variety of ways to give, both tax-deductible and not. Select your preferred method below and help us <span>Spread the Word</span>!</p>

      <div className='giving-links'>

        <div className='giving-option ywam'>

          <div className='image-container'>
            <img src={ywamLogo} />
          </div>

          <h3>Tax Deductible</h3>

          <p>Donate through our sending organization. Payments are processed securely online by PayPal.</p>

          <Button text='Give a Tax-Deductible Gift' link='https://bit.ly/venhuizen-giving' style='ywam' />

        </div>

        <div className='giving-option venmo'>

          <div className='image-container'>
            <img src={venmoLogo} />
          </div>

          <p>Venmo is a popular and secure way to send money peer-to-peer. Scan the code or click the button to donate now!</p>

          <Button text='Give With Venmo' link='https://venmo.com/keithvenh' style='venmo' />

        </div>

        <div className='giving-option cashApp'>

          <div className='image-container'>
            <img src={cashappLogo} />
          </div>

          <p>CashApp is a popular and secure way to send money peer-to-peer. Scan the code or click the button to donate now!</p>

          <Button text='Give With CashApp' link='http://cash.me/$keithvenh' style='cashapp' />

        </div>

        <div className='giving-option giveSendGo'>

          <div className='image-container'>
            <img src={giveSendGoLogo} />
          </div>

          <p>GiveSendGo is a Christian crowdfunding platform that charges no fees to fundraisers. We use it for campaigns, like our Gap Fund and Ministry Expenses.</p>

          <Button text='Donate On GiveSendGo' link='https://www.givesendgo.com/venhuizen-giving' style='givesendgo' />

        </div>

        <div className='giving-option mail'>

          <div className='image-container'>
            <i className='fa-brands fa-usps'></i>
            <p>USPS</p>
          </div>

          <p>Old faithful. Everybody likes to receive mail! If you want to send a gift (or just an encouraging note) via post, reach out to us and we'll send you our address.</p>

          <Button text='Contact Us' link='#contact' style='usps' target="_self" />

        </div>

      </div>

    </article>
  )
}