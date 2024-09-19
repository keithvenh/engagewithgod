import Hero from './Hero'
import Values from './Values';
import Funding from './Funding';
import Giving from './Giving';
import Faqs from './Faqs';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from '../../components/footer/Footer';

import './home.scss'
import Logo from '../../components/header/Logo';
import { donors, yearly, gap, special, usd } from '../../helpers/financial_info';
import BarGraph from '../../components/bar-graph/BarGraph';
import {useState} from 'react';
import Button from '../../components/button/Button';

export default function Home() {

  const [formData, setFormData] = useState({
    "honeypot": '',
    "name": '',
    "email": '',
    "message": ''
  })

  const ywamLogo = require('../../assets/images/UofNYWAMKonaLogo.avif');
  const venmoLogo = require('../../assets/images/Venmo_Logo_Blue.png');
  const cashappLogo = require('../../assets/images/RGB_CashApp_Logo_Primary_Black.png');
  const giveSendGoLogo = require('../../assets/images/gsg-logo-red-blue.png');
  const familyImage = require('../../assets/images/family-image.jpg');

  function handleContactFormInput(event) {
    const {name, value} = event.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <section className='home'>

      <Hero />

      <Values />

      <Funding />

      <Giving />

      <Faqs />

      <Gallery />

      <Contact />

      <article className='about' id='about'>

      </article>

      <article className='testimonials'>

      </article>

      {/* <article className='work' id='work'>
        <div className='value'>
          <div className='title'>
            <Logo color='vBlue' size='36px' />
            <h2>Firm Foundation</h2>
          </div>
          <div className='copy'>
            <p className='summary'>We believe God's Word is foundational to the discipleship of healthy communities.</p>
            <h3>Bible Distribution</h3>
            <p>While the average American has more than 4 Bibles in their home, a significant portions of the world has never touched a Bible. Even many pastors don't own their own copy of the Bible. We're committed to changing that.</p>
            <p>Through our Bible distribution initiatives like The Habakkuk Initiative, Bless Mongolia, Golden Shores, Amor por Colombia and others, we are making it our goal to have <span>a Bible in every home.</span> The first step to being transformed by the Bible is having access to the Bible!</p>
            <h3>Bible Translation</h3>
            <p>Out of the more than 7,300 langages in the world, only 736 have a Full Bible. That's 90% of the world's languages who need translation. About 3,650 have at least some portion of the Bible. That means <span>50% of the world's languages have no scripture</span>.</p>
            <p>Our Oral Bible Translation efforts have started translations in 77 languages in 30 countries. For the first time in history, these languages have access to some portion of the Bible!</p>
            <h3>Bible Engagement</h3>
            <p>Owning a Bible doesn't transform lives, engaging with it does. Our translation and distribution initiatives partner with local believers, pastors and church planters to connect the recipients of a Bible with a local body of believers.</p>
            <p>We have seen that when a small community is taught how to do a simple Discovery Bible Study during a distribution campaign, <span>the number of believers in that area doubles.</span> Bible engagement transforms lives and transforms communities.</p>
          </div>
        </div>

        <div className='value'>
          <div className='title impact'>
            <Logo color='baseBlue' size='24px' />
            <h2>Greater Impact</h2>
          </div>
          <div className='copy'>
            <p className='summary'>Ministries are more effective and have a longer-lasting impact when they include Bible distribution and engagement as part of their strategy.</p>
            <h3>Distribution Training</h3>
            <p>Distributing Bibles isn't just knocking on doors and handing out a Bible. It is a process of explaining the Good News contained within and connecting the recipient to a local body of believers.</p>
            <p>In collaboration with one of our partner organizations, we developed a 1-week training program to help outreaches more effectively <span>Spread the Word!</span></p>
            <h3>Strategic Planning</h3>
            <p>We have worked with bases and organizations in Colombia, Mexico, Mongolia, Myanmar, Guinea Bissau, and others to develop a strategy to reach entire communities, cities and countries.</p>
            <p>Every location is unique, so we help them choose the right technology, training, partnerships and outreaches to best reach their unique location.</p>
          </div>
        </div>

        <div className='value'>
          <div className='title'>
            <Logo color='baseBlue' size='24px' />
            <h2>Healthy Homes</h2>
          </div>
          <div className='copy'>
            <p className='summary'>Ministry workers stay in their role longer and are more effective when they have a healthy home life and financial stability.</p>
            <h3>Marriage Ministry</h3>
            <p>Life in ministry has it's own unique challenges, and marriage can be hard no matter what occupation you choose. We want to see ministry marriages thrive so that they are able to stay the course that God has called them to. We offer marriage groups for other ministry couples as a place to get a 'tune up,' for other couples and for ourselves!</p>
            <h3>Financial Coaching</h3>
            <p>The two main reasons people leave ministry are relationships and finances. The stress that many ministry couples face in regards to finances has them questioning how long they can sustain their choice of work.</p>
            <p>We offer simple coaching to ministry workers on personal finance and fundraising. We've experienced first-hand how a budget and a plan can breathe new life into a ministry worker who was on the edge of burnout, extending their longevity and their impact!</p>
          </div>
        </div>
      </article> */}

      <Footer />

    </section>
  )
}