import React from 'react'
import { Row } from "reactstrap";
import InputDetails from 'components/ComponentDetails/InputDetails';
import SelectInputDetails from 'components/ComponentDetails/SelectInputDetails';


const fileTypeOptions = [
  <option key="file_type0" value='csv'>CSV</option>,
  <option key="file_type1" value='parquet'>Parquet</option>,
  <option key="file_type2" value='image'>Image</option>,
  <option key="file_type3" value='audio'>Audio</option>
]

export class LabelEncoderDetails extends React.Component {
    render () {
      return (
        <>
          <h6 className="heading-small text-muted">Parameters</h6>
          <Row>
              
            <InputDetails name="Column" tooltip="Column to encode."
                          attributes={this.props.attributes}
                          attributeName={'target_column'}
                          defaultValue={this.props.nodeAttributes.target_column}
                          isArray={false}
            />
          </Row>
        </>
      )
    }
}
  

export default LabelEncoderDetails