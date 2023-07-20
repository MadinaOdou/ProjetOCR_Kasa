import './index.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Slideshow({ pictures }) {
  const [slide, setSlide] = useState(0)

  const nextSlide = () => {
    setSlide(slide === pictures.length - 1 ? 0 : slide + 1)
  }
  const previousSlide = () => {
    setSlide(slide === 0 ? pictures.length - 1 : slide - 1)
  }

  if (pictures.length <= 1) {
    return (
      <div className="diapo">
        <img src={pictures[slide]} alt="Logement" className="diapo-image" />
      </div>
    )
  }

  return (
    <div className="diapo">
      <img src={pictures[slide]} alt="Logement" className="diapo-image" />
      <div className="diapo-arrows">
        <div className="diapo-arrows__left" onClick={previousSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div className="diapo-arrows__right" onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
      <div className="diapo-numeration">
        {slide + 1}/{pictures.length}
      </div>
    </div>
  )
}

export default Slideshow
