import './funding.scss';

import { donors, yearly, gap, special, usd } from '../../helpers/financial_info';
import BarGraph from '../../components/bar-graph/BarGraph';
import Button from '../../components/button/Button';

export default function Funding() {

  return (
    <article id='funding' className='funding'>

      <h2>Funded by Generous People Like You!</h2>

      <p>Being self-employed and support-funded means we get to partner with generous people to fund our life and ministry. Gifts of all shapes and sizes empower us to <span>Spread the Word</span> around the globe! Partner with us and join the {donors} other generous people helping us <span>Spread the Word!</span></p>

      <div className='graphs'>

        <div className='category monthly'>

          <h3>Monthly and Yearly Giving</h3>

          <BarGraph current={yearly.current} max={yearly.goal} />
        
          <p>The majority of our support comes through regular gifts on a monthly, quarterly or yearly basis. We use these funds to cover regular expenses like rent, groceries and tuition. </p>

          <div className='buttons'>

            <Button text='Learn More' link='' style='primary_reverse' />

            <Button text='Partner With Us' link='https://bit.ly/venhuizen-giving' />

          </div>

        </div>

        <div className='category current-campaign'>

          <h3>2024 Gap Fund</h3>

          <BarGraph current={gap.current} max={gap.goal} />

          <p>When our regular giving doesn't meet our budget and extra expenses, we fill in the gaps with a gap fund. This year, the gap between our regular giving and our need is {usd.format(gap.goal)}.</p>

          <div className='buttons'>

            <Button text='Learn More' link='' style='primary_reverse' />

            <Button text='Fill the Gap' link='https://www.givesendgo.com/venhuizen-giving' />

          </div>

        </div>

        <div className='category special'>

          <h3>Ministry Expenses</h3>

          <BarGraph current={special.current} max={special.goal} />

          <p>Being self-employed means we are responsible for covering our own ministry expenses each year. This includes things like travel, equipment and self-employment taxes.</p>

          <div className='buttons'>

            <Button text='Learn More' link='' style='primary_reverse' />

            <Button text='Donate Now' link='https://www.givesendgo.com/venhuizen-giving' />

          </div>

        </div>

      </div>
      
    </article>
  )
}