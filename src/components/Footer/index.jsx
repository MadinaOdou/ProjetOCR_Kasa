import logo from '../../assets/images/logo-white.png'

function Footer() {
  return (
    <footer>
      <div className="footer">
        <img
          src={logo}
          alt="Version blanche du logo-kasa"
          className="footer__logo"
        />
        <p className="footer__text">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
