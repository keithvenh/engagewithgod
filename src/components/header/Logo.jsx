import { ReactComponent as BlueLogoSvg } from '../../assets/images/icons/icon-color-blue.svg'
import { ReactComponent as YellowLogoSvg } from '../../assets/images/icons/icon-color-yellow.svg'
import { ReactComponent as WhiteLogoSvg } from '../../assets/images/icons/icon-white.svg'
import { ReactComponent as OffWhiteLogoSvg } from '../../assets/images/icons/icon-off-white.svg'
import { ReactComponent as BlackLogoSvg } from '../../assets/images/icons/icon-black.svg'
import { ReactComponent as OffBlackLogoSvg } from '../../assets/images/icons/icon-off-black.svg'
import { ReactComponent as BaseBlueLogoSvg } from '../../assets/images/icons/icon-color-base-blue.svg'
import { ReactComponent as VBlueLogoSvg } from '../../assets/images/icons/icon-color-v-blue.svg'

export default function Logo({color, size}) {

  console.log(color);
  console.log(size)
  const logos = {
    "blue": <BlueLogoSvg style={{height: size}}/>,
    "yellow": <YellowLogoSvg style={{height: size}}/>,
    "white": <WhiteLogoSvg style={{height: size}}/>,
    "offWhite": <OffWhiteLogoSvg style={{height: size}}/>,
    "black": <BlackLogoSvg style={{height: size}}/>,
    "OffBlack": <OffBlackLogoSvg style={{height: size}}/>,
    "baseBlue": <BaseBlueLogoSvg style={{height: size}}/>,
    "vBlue": <VBlueLogoSvg style={{height: size}}/>
  }

  return (
    <div className='logo'>
       {logos[color]}
    </div>
  )
}