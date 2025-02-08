import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="top-nav">
      <ul>
        <li>
          <a href="/Login">Login</a>
        </li>
        <li>
          <a href="/Signup">Signup</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;