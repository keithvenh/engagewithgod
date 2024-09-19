export default function Faq({props}) {

  const {num, q, a} = props;

  function toggleCollapseState(e) {

    const faq = e.currentTarget;
    const icon = document.getElementById(`icon${faq.id}`);

    console.log(icon);

    if(faq.classList.contains('collapsed')) {
      faq.classList.remove('collapsed');
      faq.classList.add('expanded');
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-minus');
    }
    else {
      faq.classList.remove('expanded');
      faq.classList.add('collapsed');
      icon.classList.remove('fa-minus');
      icon.classList.add('fa-plus');
    }
  }

  return (
    <div id={num} className='faq collapsed' onClick={toggleCollapseState}>
      <p className='question'>{q} <i id={`icon${num}`} className='fas fa-plus'></i></p>
      <p className='answer'>{a}</p>
    </div>
  )
}