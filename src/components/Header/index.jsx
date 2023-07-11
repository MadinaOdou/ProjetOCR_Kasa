import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/about/2">A propos</Link>
    </nav>
  )
}

export default Header
