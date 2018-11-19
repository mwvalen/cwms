import React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import Currency from 'common/components/Currency'
import TimeOfDay from 'common/components/TimeOfDay'
import styles from './styles.css'
import withWidth from 'material-ui/utils/withWidth'

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

const SignupButton = ({handleOnClick}) => (
  <div>
    <RaisedButton
      primary={true}
      onClick={handleOnClick}
      label="Sign up" />
  </div>
)

const getSignupColumn = (course, handleOnClick) => (
  <div>
    <Currency cents={course.price * 100} />
    {
      course.soldOut
        ? (
          <div>
            <strong style={{textTransform: "uppercase", color: "red"}}>
              Sold out
            </strong>
          </div>
        ) : <SignupButton handleOnClick={handleOnClick} />
    }
  </div>
)

const getClassDate = chessClass => {
  const startDT = new Date(chessClass.startTime)
  return months[startDT.getMonth()] + ' ' + startDT.getDate()
}

const ClassTime = props => {
  const startDT = new Date(props.startTime)
  const endDT = new Date(props.endTime)
  return (
    <div>
      <TimeOfDay date={startDT} />-<TimeOfDay date={endDT} />
    </div>
  )
}

const pairUp = (result, item, idx) => {
  if (idx % 2) {
    result[result.length - 1] = `${result[result.length - 1]}, ${getClassDate(item)}${idx !== result.length - 1 ? ',' : ''}`
  } else {
    result.push(getClassDate(item));
  }
  return result
}

const Address = ({school}) => {
  const {address, mapUrl, city, province, postalCode} = school
  if (mapUrl) {
    return (
      <div>
        <a href={mapUrl} title="map" target="_blank">{address}</a>
        <div>
          {`${city} ${province}, ${postalCode}`}
        </div>
      </div>
    )
  }
  return (
    <div>
      <div>{address}</div>
      <div>
        {`${city} ${province}, ${postalCode}`}
      </div>
    </div>
  )
}

export default withWidth()(props => {
  const {width, courses} = props
  return (
    <div>
    {width && width > 1 &&
    <Table className={styles.courseTable}>
       <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
         <TableRow>
           <TableHeaderColumn>Location</TableHeaderColumn>
           <TableHeaderColumn>Description</TableHeaderColumn>
           <TableHeaderColumn>Time</TableHeaderColumn>
           <TableHeaderColumn>Dates</TableHeaderColumn>
           <TableHeaderColumn>Sign up</TableHeaderColumn>
         </TableRow>
       </TableHeader>
       <TableBody style={{verticalAlign: "top"}}
        deselectOnClickaway={false} displayRowCheckbox={false}>
        {
          courses.map((course, idx) => {
            return (
              <TableRow key={idx} selected={false} selectable={false}>
                <TableRowColumn>
                  <div className={styles.courseCell}>
                    <div>{course.school.name}</div>
                    {
                      <Address school={course.school} />
                    }
                  </div>
                </TableRowColumn>
                <TableRowColumn>
                  <div className={styles.courseCell}>
                    <div><strong>Teacher: </strong></div>
                    <p>{`${course.teacher.firstName} ${course.teacher.lastName}`}</p>
                    <div><strong>Description: </strong></div>
                    <p>{course.description}</p>
                  </div>
                </TableRowColumn>
                <TableRowColumn>
                  <div className={styles.courseCell}>
                    <ClassTime {...course.classes[0]} />
                  </div>
                </TableRowColumn>
                <TableRowColumn>
                  <div className={styles.courseCell}>
                    {
                      course.classes.reduce(pairUp, [])
                        .map(str => {
                          return (
                            <div key={str}>{str}</div>
                          )
                        })
                    }
                  </div>
                </TableRowColumn>
                <TableRowColumn>
                  <div className={styles.courseCell}>
                    {
                      getSignupColumn(course, () => {
                        props.handleSignup(course)
                      })
                    }
                  </div>
                </TableRowColumn>
              </TableRow>
            )
          })
        }
       </TableBody>
     </Table>
   }
     {width && width <= 1 &&
       <div className={styles.mobileCoursesWrapper}>
        <span style={{'fontSize': '14px'}}>{courses.length} {courses.length === 1 ? "class" : "classes"} found.</span>
        {courses.map((course, idx) => {
          return (
            <Paper key={idx} zDepth={2} rounded={false} className={styles.coursePaper}>
              <div className={styles.coursePaperContentWrapper}>
              <br />
              <div>{course.school.name}</div>
              {
                <Address school={course.school} />
              }
              <br />
              <div className={styles.coursePaperRow}>
                <div className={styles.coursePaperRowHeader}>Teacher: </div>
                <div className={styles.coursePaperRowContent}>{`${course.teacher.firstName} ${course.teacher.lastName}`}</div>
              </div>
              <div className={styles.coursePaperRow}>
                <div className={styles.coursePaperRowHeader}>Course Level: </div>
                <div className={styles.coursePaperRowContent}>{course.description}</div>
              </div>
              <div className={styles.coursePaperRow}>
                <div className={styles.coursePaperRowHeader}>Time: </div>
                &nbsp;&nbsp;&nbsp;<ClassTime {...course.classes[0]} />
              </div>
              <div className={styles.coursePaperRow}>
                <div className={styles.coursePaperRowHeader}>Dates: </div>
                <div className={styles.coursePaperRowContent}>{getClassDate(course.classes[0])} - {getClassDate(course.classes.slice(-1)[0])}</div>
              </div>
              <div className={styles.coursePaperRow}>
                <div className={styles.coursePaperRowHeader}># of Classes: </div>
                <div className={styles.coursePaperRowContent}>{course.classes.length}</div>
              </div>
              <div className={styles.coursePaperRow}>
                <div className={styles.coursePaperRowHeader}>Price: </div>
                &nbsp;&nbsp;&nbsp;<Currency cents={course.price * 100} />
              </div>
              <div style={{'marginTop': '12px'}}>
                {
                  course.soldOut ? <div>
                    <strong style={{textTransform: "uppercase", color: "red"}}>
                      Sold out
                    </strong>
                  </div> : <SignupButton handleOnClick={() => props.handleSignup(course)} />
                }
              </div>
              <br />
              </div>
            </Paper>
          )
        })}
       </div>
     }
     </div>
  )
})
