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
import FlatButton from 'material-ui/FlatButton'
import styles from './styles.css'

const Entity = props => {
  const {entity} = props
  return (
    <TableRow>
      {
        props.colList.map((key, idx) => {
          return (
            <TableRowColumn key={idx}>
              <div className={styles.courseCell}>
                {entity[key].toString()}
              </div>
            </TableRowColumn>
          )
        })
      }
      <TableRowColumn>
        <div className={styles.courseCell}>
          <FlatButton label="Edit" onClick={() => {props.onEditClick(entity)}} />
        </div>
      </TableRowColumn>
    </TableRow>
  )
}

export const EntityTable = props => {
  return (
    <Table className={styles.courseTable}>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          {
            props.colList.map(({name, key}) => {
              return (
                <TableHeaderColumn key={key}>{name}</TableHeaderColumn>
              )
            }).concat(<TableHeaderColumn key="edit">Update</TableHeaderColumn>)
          }
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {
          props.items.map((item, key) => (
            <Entity onEditClick={props.onEditClick}
              colList={props.colList.map(({key}) => key)}
              key={key} entity={item}/>
          ))
        }
      </TableBody>
    </Table>
  )
}
