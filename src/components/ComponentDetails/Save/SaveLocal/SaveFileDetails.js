import React from 'react'
import { Row } from "reactstrap";
import InputDetails from 'components/ComponentDetails/InputDetails';
import SelectInputDetails from 'components/ComponentDetails/SelectInputDetails';


const fileTypeOptions = [
  <option key="file_type0" value='csv'>CSV</option>
]

const saveLabelColumnOnlyOptions = [
  <option key="save_label_column_only0" value='true'>True</option>,
  <option key="save_label_column_only1" value='false'>False</option>
]


export class SVCDetails extends React.Component {
    render () {
      return (
        <>
          <h6 className="heading-small text-muted">Parameters</h6>
          <Row>
              
            <InputDetails name="Label Column" tooltip="Label column."
                          attributes={this.props.attributes}
                          attributeName={'label_column'}
                          defaultValue={this.props.nodeAttributes.label_column}
                          isArray={false}
            />

            <SelectInputDetails name="Label Column Only" tooltip="Save label column only."
                          attributes={this.props.attributes}
                          attributeName={'save_label_column_only'}
                          options={saveLabelColumnOnlyOptions}
                          defaultValue={this.props.nodeAttributes.save_label_column_only}
                          isArray={false}
            />

            <InputDetails name="File name" tooltip="File name."
                          attributes={this.props.attributes}
                          attributeName={'file_name'}
                          defaultValue={this.props.nodeAttributes.file_name}
                          isArray={false}
            />

            <SelectInputDetails name="File Type" tooltip="File type."
                          attributes={this.props.attributes}
                          attributeName='file_type'
                          options={fileTypeOptions}
                          defaultValue={this.props.nodeAttributes.file_type}
                          isArray={false}
            />            
          </Row>
        </>
      )
    }
}
  

export default SVCDetails