function Banner({ imageSrc, imageAlt, text }) {
  return (
    <div className="banner">
      <img src={imageSrc} alt={imageAlt} className="banner__image" />
      <h1 className="banner__text">{text}</h1>
    </div>
  )
}

export default Banner
