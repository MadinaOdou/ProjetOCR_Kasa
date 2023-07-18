import { useState } from 'react'
import CollapseList from '../../data/collapses.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

function Collapse() {
  const [selected, setSelected] = useState(null)
  const toggle = (i) => {
    if (selected === i) {
      setSelected(null)
    } else {
      setSelected(i)
    }
  }

  return (
    <div className="collapse">
      {CollapseList.map((item, i) => (
        <div key={item.id} className="collapse-item">
          <div className="collapse-item__title">
            <h2>{item.title}</h2>
            <div
              className={`collapse-item__title--icon ${
                selected === i ? 'rotateDown' : 'rotateUp'
              }`}
              onClick={() => toggle(i)}
            >
              <FontAwesomeIcon icon={faChevronUp} />
            </div>
          </div>
          {selected === i && (
            <div
              className={`collapse-item__text ${
                selected === i ? 'openMode' : 'closeMode'
              }`}
            >
              <p>{item.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Collapse
