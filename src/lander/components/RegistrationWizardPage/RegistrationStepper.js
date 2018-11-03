import React from 'react'
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper'

export default props => {
  return (
    <Stepper activeStep={props.activeStep}>
      <Step>
        <StepLabel>Select your courses</StepLabel>
      </Step>
      <Step>
        <StepLabel>Enter student details</StepLabel>
      </Step>
      <Step>
        <StepLabel>Enter payment details</StepLabel>
      </Step>
      <Step>
        <StepLabel>Purchase</StepLabel>
      </Step>
    </Stepper>
  )
}
