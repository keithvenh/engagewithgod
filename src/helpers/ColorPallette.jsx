import './color-pallette.scss'

export default function ColorPallette() {
  const altColors = [
    "#d16587",
    "#F28C82",
    "#40e0D0"
  ]

  const colorComp = altColors[0   ]

  return (
    <div className='color-pallette'>
      <div className='main-colors'>
        <div className='white'>#efefef</div>
        <div className='black'>#333333</div>
        <div className='current-comp' style={{"backgroundColor": colorComp}}>{colorComp}</div>
        <div className='primary'>#666693</div>
        <div className='secondary'>#e5cf87</div>
      </div>
      <div className='alt-colors'>
        {altColors.map(color => <div className="altColor" style={{"backgroundColor": color}}>{color}</div>)}
      </div>
    </div>
  )
}