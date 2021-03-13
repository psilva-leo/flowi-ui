import React from 'react';
import { Row } from "reactstrap";
import * as actions from "components/ComponentDetails/actions";

const outputPolicyOptions = [
  { value: 'none', label: 'None' },
  { value: 'override', label: 'Override' },
  { value: 'create', label: 'Create' }
]

export class OutputDetails extends React.Component {

  render () {
    return (
        <>
        <Row>
          {actions.createSelect(4, 'Output Policy', 'How to handle output data.', outputPolicyOptions, this.props.nodeProperties.output_policy, false, true, false, this.props.handleChange('output_policy'))}  
        </Row>
        </>
    )
  }
}
  

export default OutputDetails