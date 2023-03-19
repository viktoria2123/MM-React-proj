import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
        <ul>
          <li className="header__link">
           
            <Link to='/'>Home</Link>
          </li>
          <li className="header__link">
           
            <Link to='/contact'>Contact</Link>
          </li>
          <li className="header__link">
           
            <Link to='/blog'>Blog</Link>
          </li>
          <li className="header__link">
           
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </header> 
    )
}

export default Header;