import './home.scss'
import Logo from '../components/header/Logo';
import { donors, yearly, gap, special, usd } from '../helpers/financial_info';
import BarGraph from '../components/bar-graph/BarGraph';

export default function Home() {

  return (
    <section className='home'>

      <article className='hero home-hero'>

        <Logo color="offWhite" size="96px" />

        <h1>VenHuizen<br/><span>Family Ministries</span></h1>

        <p>Cultivating Christian Communities around the world through  Bible translation, distribution and education.</p>

        <button>Partner With Us</button>

      </article>

      <article className='values'>
        <div className='value-container'>
          <div className='value'>
            <div className="value-icon">
              <Logo color="vBlue" size="64px" />
            </div>
            <h2>Firm Foundation</h2>
            <p>We believe that God's Word is foundational to the discipleship of healthy communities. That's why we are committed to seeing every mother tongue have access to the Bible.</p>
          </div>
        </div>
        <div className='value-container'>
          <div className='value'>
            <div className="value-icon impact">
              <Logo color="baseBlue" size="64px" />
            </div>
            <h2>Greater Impact</h2>
            <p>Ministries are more effective in their outreach and have longer-lasting impact when they include Bible distribution and engagement as part of their strategy. That's why we work with locations around the world to help develop strategy and training around Bible distribution and engagement.</p>
          </div>
        </div>
        <div className='value-container'>
          <div className='value'>
            <div className="value-icon">
              <Logo color="baseBlue" size="64px" />
            </div>
            <h2>Healthy Homes</h2>
            <p>Ministry workers stay in their role longer and are more effective when they have a healthy home life and financial stability. That's why we work with ministry workers to provide Bible-based support in marriage, parenting, personal finance and fundraising.</p>
          </div>
        </div>
      </article>

      <article className='funding'>
        <h2>Funded by Generous People Like You!</h2>
        <p>Being self-employed and support-funded means we get to partner with generous people to fund our life and ministry. Gifts of all shapes and sizes empower us to <span>Spread the Word</span> around the globe! Partner with us and join the {donors} other generous people helping us <span>Spread the Word!</span></p>

        <div className='graphs'>
          <div className='category monthly'>
            <h3>Monthly and Yearly Giving</h3>
            <BarGraph current={yearly.current} max={yearly.goal} />
            <p>The majority of our support comes through regular gifts on a monthly, quarterly or yearly basis. We use these funds to cover regular expenses like rent, groceries and tuition. Our organization recommends $3,000 per adult and $1,000 per child.</p>
            <div className='buttons'>
              <button className='learn-more-button'>Learn More</button>
              <button className='donate-button'>Donate Now</button>
            </div>
          </div>

          <div className='category current-campaign'>
            <h3>2024 Gap Fund</h3>
            <BarGraph current={gap.current} max={gap.goal} />
            <p>When our regular giving doesn't meet our budget, we fill in the gaps with a gap fund. This year, the gap between our regular giving and our budget is {usd.format(gap.goal)}.</p>
            <div className='buttons'>
              <button className='learn-more-button'>Learn More</button>
              <button className='donate-button'>Donate Now</button>
            </div>
          </div>

          {/* <div className='category special'>
            <h3>Special Opportunities</h3>
            <BarGraph current={special.current} max={special.goal} />
            <p>Sometimes we have one-time needs and opportunities that come up. This may be anything from a new vehicle, to a new computer to the chance to fund Bibles for one of our partners!</p>
            <div className='buttons'>
              <button className='learn-more-button'>Learn More</button>
              <button className='donate-button'>Donate Now</button>
            </div>
          </div> */}
        </div>
      </article>

      <article className='work' id='work'>
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
      </article>

    </section>
  )
}