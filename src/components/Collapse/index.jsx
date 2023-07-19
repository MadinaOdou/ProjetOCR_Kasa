import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

function Collapse(props) {
  const [open, setOpen] = useState(false)

  function handleToggle() {
    setOpen(!open)
  }

  return (
    <div className="collapse">
      <div className="collapse-title">
        {props.title}
        <div
          className={`collapse-title--icon ${open ? 'rotateDown' : 'rotateUp'}`}
          onClick={handleToggle}
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
      </div>
      <div className={open ? 'collapse-text open' : 'collapse-text'}>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default Collapse
