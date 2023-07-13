import image from '../../assets/images/cover-home.png'

function Banner() {
  return (
    <div className="banner">
      <img
        src={image}
        alt="Roches au bord de la mer"
        className="banner__image"
      />
      <h1 className="banner__text">Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Banner
