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
import TimeOfDay from 'common/components/TimeOfDay'

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

export default props => {
  const handleRowSelection = selectedRows => {
    if (props.handleRowSelect) {
      props.handleRowSelect(selectedRows);
    }
  }
  return (
    <Table multiSelectable={false} onRowSelection={handleRowSelection}>
       <TableHeader displaySelectAll={false}>
         <TableRow>
           <TableHeaderColumn>School</TableHeaderColumn>
           <TableHeaderColumn>Time</TableHeaderColumn>
           <TableHeaderColumn>Start Date</TableHeaderColumn>
         </TableRow>
       </TableHeader>
       <TableBody deselectOnClickaway={false}
        displayRowCheckbox={true}>
        {
          props.courses.map((course, idx) => {
            return (
              <TableRow key={idx} selected={props.readonly !== true && props.selectedRows.includes(idx)}>
                <TableRowColumn>
                  <div>
                    {course.school.name}
                  </div>
                </TableRowColumn>
                <TableRowColumn>
                  <div>
                    <ClassTime {...course.classes[0]} />
                  </div>
                </TableRowColumn>
                <TableRowColumn>
                  <div>
                    {
                      <div>
                        {getClassDate(course.classes[0])}
                      </div>
                    }
                  </div>
                </TableRowColumn>
              </TableRow>
            )
          })
        }
       </TableBody>
     </Table>
  )
}
