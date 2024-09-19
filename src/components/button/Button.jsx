import './button.scss';

export default function Button({text, link, style, target="_blank", size}) {

  return (
    <a className={`button ${style}`} href={link} target={target}>{text}</a>
  )
}