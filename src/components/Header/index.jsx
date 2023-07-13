import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'

function Header() {
  return (
    <header>
      <div className="header">
        <img src={logo} alt="logo-kasa" />
        <nav className="header__nav">
          <Link to="/">Accueil</Link>
          <Link to="/about">A Propos</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
