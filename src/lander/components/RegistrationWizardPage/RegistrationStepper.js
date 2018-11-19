import React from 'react'
import {
  Step,
  Stepper,
  StepLabel,
  StepConnector
} from 'material-ui/Stepper'
import { Divider } from 'material-ui/Divider'
import withWidth from 'material-ui/utils/withWidth'

export default withWidth()(props => {
  let orientation = props.width > 1 ? "horizontal" : "vertical"
  return (
    <Stepper activeStep={props.activeStep} orientation={orientation}
        connector={props.width <= 1 ? null : undefined}>      
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
