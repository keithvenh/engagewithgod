import './color-pallette.scss'

export default function ColorPallette() {
  const altColors = [
    '#928a98',
    '#4a4354',
    '#2c4d69',
    '#5a809e',
    '#8fbcc4',
    '#4d663e',
    '#729067',
    '#91af88',

    '#928a98',
    '#4a4354',
    '#2c4d69',
    '#5a809e',
    // '#88b5c4',
    '#4d663e',
    '#729067',
    '#91af88',
    '#ffffff',

  ]

  const colorComp = altColors[0   ]

  return (
    <div className='color-pallette'>
      {/* <div className='main-colors'>
        <div className='white'>#efefef</div>
        <div className='black'>#333333</div>
        <div className='current-comp' style={{"backgroundColor": colorComp}}>{colorComp}</div>
        <div className='primary'>#666693</div>
        <div className='secondary'>#e5cf87</div>
      </div> */}
      <div className='alt-colors'>
        {altColors.map(color => <div className="altColor" style={{"backgroundColor": color}}>{color}</div>)}
      </div>
    </div>
  )
}