// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {item} = props
  const {projectTitle, description, duration, projectUrl, imageUrl} = item
  return (
    <div className="project-container">
      <img className="image" src={imageUrl} alt="project" />
      <div className="top-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="icon-container">
          <AiFillCalendar />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a className="project-url" href={projectUrl} target="__blank">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
