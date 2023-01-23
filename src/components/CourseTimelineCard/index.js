// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {item} = props
  const {courseTitle, description, duration, tagsList} = item
  return (
    <div className="CourseContainer">
      <div className="topContainer">
        <h1 className="title-heading">{courseTitle}</h1>
        <div className="icon-container">
          <AiFillClockCircle />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="tags-list">
        {tagsList.map(eachValue => (
          <li className="list-item" key={eachValue.id}>
            <p className="list-name">{eachValue.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
