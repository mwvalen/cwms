import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import styles from './styles.css'
import {CalendarDate} from 'common/components/FormattedDate'

const CardDetail = props => {
  return (
    <div className={`flex ${styles.cardDetail}`}>
      <div className={styles.label}>
        <strong>{`${props.label}:`}</strong>
      </div>
      <div>
        {props.children || props.value}
      </div>
    </div>
  )
}

export const PaymentCard = props => {
  return (
    <Card>
      <CardHeader title="Payment Details" />
      <CardText>
        <CardDetail label="Brand" value={props.brand} />
        <CardDetail label="Last 4 Digits" value={`*${props.last4}`} />
        <CardDetail label="Expiry Month" value={props.expiryMonth} />
        <CardDetail label="Expiry Year" value={props.expiryYear} />
      </CardText>
      <CardActions>
        <FlatButton label="Edit" onClick={props.onEditClick}/>
      </CardActions>
    </Card>
  )
}



export const StudentCard = props => {
  const guardian = props.guardians[0];
  return (
    <Card>
      <CardHeader title="Student Details"
        actAsExpander={true}
        showExpandableButton={true}/>
      <CardText>
        <CardDetail label="Student" value={`${props.firstName} ${props.lastName}`}/>
        <CardDetail label="Guardian" value={`${guardian.firstName} ${guardian.lastName}`}/>
        <CardDetail label="Email" value={guardian.email}/>
        <CardDetail label="Phone" value={guardian.phone}/>
      </CardText>
      <CardText expandable={true}>
        <CardDetail label="Date of Birth">
          <CalendarDate date={props.dateOfBirth || new Date()}/>
        </CardDetail>
        <CardDetail label="Allergies" value={props.allergies} />
        <CardDetail label="Additional Info" value={props.notes} />
      </CardText>
      <CardActions>
        <FlatButton label="Edit" onClick={props.onEditClick}/>
      </CardActions>
    </Card>
  )
}
