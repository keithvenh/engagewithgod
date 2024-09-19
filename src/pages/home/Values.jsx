import './values.scss';

import Logo from '../../components/header/Logo';

export default function Values() {

  return (
    <article className='values' id='work'>

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
  )
}