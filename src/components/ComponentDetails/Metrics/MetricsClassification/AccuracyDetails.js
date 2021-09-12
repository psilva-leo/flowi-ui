import React from 'react'
import { Row } from "reactstrap";
import SelectInputDetails from 'components/ComponentDetails/SelectInputDetails';
import InputDetails from 'components/ComponentDetails/InputDetails';


const normalizeOptions = [
  <option key="normalize0" value='true'>True</option>,
  <option key="normalize1" value='false'>False</option>
]

export class AccuracyDetails extends React.Component {
  
    render () {
      return (
          <>
          <h6 className="heading-small text-muted">Parameters</h6>
          <Row>
            <InputDetails name="Target Column" tooltip="Target/Class column."
                          attributes={this.props.attributes}
                          attributeName={'target_column'}
                          defaultValue={this.props.nodeAttributes.target_column}
                          isArray={false}
            />

            <SelectInputDetails name="Normalize" tooltip="If False, return the number of correctly classified samples. Otherwise, return the fraction of correctly classified samples."
                          attributes={this.props.attributes}
                          attributeName={'normalize'}
                          options={normalizeOptions}
                          defaultValue={this.props.nodeAttributes.normalize}
                          isArray={false}
            />
          </Row>
          </>
      )
    }
}
  

export default AccuracyDetails