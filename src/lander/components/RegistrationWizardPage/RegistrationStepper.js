import React from 'react'
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper'
import withWidth from 'material-ui/utils/withWidth'

export default withWidth()(props => {
  let orientation = props.width > 1 ? "horizontal" : "vertical"
  return (
    <Stepper activeStep={props.activeStep} orientation={orientation} >
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
})
