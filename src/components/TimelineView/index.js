import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="main-container">
      <div className="heading-container">
        <h1 className="heading">
          MY JOURNEY OF <br />
          <h1 className="ccbp">CCBP 4.0</h1>
        </h1>
      </div>
      <div className="container">
        <Chrono
          theme={{
            secondary: 'white',
          }}
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
        >
          {timelineItemsList.map(eachValue => {
            if (eachValue.categoryId === 'COURSE') {
              return <CourseTimelineCard item={eachValue} />
            }
            return <ProjectTimelineCard item={eachValue} />
          })}
        </Chrono>
      </div>
    </div>
  )
}
export default TimelineView
