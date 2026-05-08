import '../Style/navbar.scss';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='container'>
        <h2 className="logo"> Portfolio</h2>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Process</li>
          <li>Portfoilo</li>
          <li>Blog</li>
          <li>Service</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;