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
        <li>Work</li>
        <li>About</li>
        <li>FAQ</li>
        <li>Donate</li>
      </ul>
    </nav>
  )
}