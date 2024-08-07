import './bar-graph.scss';
import {usd} from '../../helpers/financial_info'

export default function BarGraph({current, max}) {
  const currentWidth = (current/max) * 100

  return (
    <div className='bar-graph-container'>
      <div className='bar-graph'>
        <div className='bar-graph-max' style={{"width": "100%"}}>{usd.format(max)}</div>
        <div className='bar-graph-current' style={{"width": `${currentWidth}%`}}>{usd.format(current)}</div>
      </div>
    </div>
  )
}