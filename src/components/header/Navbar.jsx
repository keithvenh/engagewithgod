import Button from '../button/Button';

export default function Navbar() {

  function toggleNav() {
    const navbar = document.getElementById("navbar");

    if(navbar.classList.contains("closed")) {
      // Update the navbar to be open
      navbar.classList.remove('closed');
      navbar.classList.add('open');

      // Display the menu
      const menu = document.getElementById("nav-menu");
      menu.style.display = "flex";

      // Change the icon to an x
      const icon = document.getElementById('nav-icon');
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-x");
    }
    else {
      // Update the navbar to be closed
      navbar.classList.remove('open');
      navbar.classList.add('closed');

      // Hide the menu
      const menu = document.getElementById("nav-menu");
      menu.style.display = "none";

      // Change the icon to a hamburger
      const icon = document.getElementById('nav-icon');
      icon.classList.remove("fa-x");
      icon.classList.add("fa-bars");
    }

  }
  
  return (
    <nav className='navbar closed' id='navbar'>
      <i className='nav-icon fa-solid fa-bars' id='nav-icon' onClick={toggleNav}></i>

      <ul className='menu' id='nav-menu'>
        <li><a href='#work'>Our Work</a></li>
        <li><a href='#funding'>Funding</a></li>
        <li><a href='#faqs'>FAQ</a></li>
        <li><a href='#contact' onClick={toggleNav}>Contact Us</a></li>
        <li onClick={toggleNav}><Button text='Donate' link='https://bit.ly/venhuizen-giving' /></li>
      </ul>
    </nav>
  )
}