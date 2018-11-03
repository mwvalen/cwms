import React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  TableFooter
} from 'material-ui/Table'
import Currency from 'common/components/Currency'
import School from 'common/components/School'
import Teacher from 'common/components/Teacher'
import TimeOfDay from 'common/components/TimeOfDay'
import styles from './styles.css'

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

const getPriceColumn = course => {
  //Restore this as necessary

  // if (course.soldOut) {
  //   return (
  //     <strong style={{textTransform: "uppercase", color: "red"}}>Sold out</strong>
  //   )
  // } else if (course.isCamp) {
  //   return (
  //     <span>
  //       <Currency cents={course.price * 100} /><br />
  //       <strong>{course.magicNumber - course.registered} spots left</strong>
  //     </span>
  //   )
  // }
  return (
    <Currency cents={course.price * 100} />
  )
}

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

export default props => {
  const handleRowSelection = selectedRows => {
    if (props.handleRowSelect) {
      props.handleRowSelect(selectedRows);
    }
  }
  return (
    <Table className={styles.courseTable}>
       <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
         <TableRow>
           <TableHeaderColumn>Location</TableHeaderColumn>
           <TableHeaderColumn>Teacher</TableHeaderColumn>
           <TableHeaderColumn>Time</TableHeaderColumn>
           <TableHeaderColumn>Dates</TableHeaderColumn>
           <TableHeaderColumn>Price</TableHeaderColumn>
         </TableRow>
       </TableHeader>
       <TableBody deselectOnClickaway={false}
         displayRowCheckbox={props.readonly !== true}>
        {
          props.courses.map((course, idx) => {
            return (
              <TableRow key={idx} selected={props.readonly !== true &&
                props.selectedRows.includes(idx)} selectable={course.soldOut !== true}>
                <TableRowColumn>
                  <div className={styles.courseCell}>
                    {course.school.name}
                  </div>
                </TableRowColumn>
                <TableRowColumn>
                  <div className={styles.courseCell}>
                    {`${course.teacher.firstName} ${course.teacher.lastName}`}
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
                      getPriceColumn(course)
                    }
                  </div>
                </TableRowColumn>
              </TableRow>
            )
          })
        }
       </TableBody>
       <TableFooter adjustForCheckbox={props.readonly !== true}>
          <TableRow>
            <TableRowColumn colSpan={3}></TableRowColumn>
            <TableRowColumn style={{textAlign: 'center'}}>
              <div className={styles.courseCell}>
                <strong>Total:</strong>
              </div>
            </TableRowColumn>
            <TableRowColumn>
              <div className={styles.courseCell}>
                <strong><Currency cents={props.total * 100} /></strong>
              </div>
            </TableRowColumn>
          </TableRow>
        </TableFooter>
     </Table>
  )
}
