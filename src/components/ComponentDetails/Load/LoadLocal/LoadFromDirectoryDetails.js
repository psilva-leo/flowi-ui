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

export class LoadFromDirectoryDetails extends React.Component {
  
    render () {
      return (
        <>
          <h6 className="heading-small text-muted">Parameters</h6>
          <Row>
              
            <InputDetails name="Train Path" tooltip="Train path to load data."
                          attributes={this.props.attributes}
                          attributeName={'train_path'}
                          defaultValue={this.props.nodeAttributes.train_path}
                          isArray={false}
            />

            <InputDetails name="Test Path" tooltip="Test path to load data."
                          attributes={this.props.attributes}
                          attributeName={'test_path'}
                          defaultValue={this.props.nodeAttributes.test_path}
                          isArray={false}
            />
            <InputDetails name="Test Split" tooltip="Test split size between 0.0 and 1.0 and represent the proportion of the dataset to include in the test split."
                          attributes={this.props.attributes}
                          attributeName={'test_split'}
                          defaultValue={this.props.nodeAttributes.test_split}
                          isArray={true}
                          inputType='number'
            />

            <SelectInputDetails name="File Type" tooltip="File type (e.g. image, audio)."
                          attributes={this.props.attributes}
                          attributeName='file_type'
                          options={fileTypeOptions}
                          defaultValue={this.props.nodeAttributes.file_type}
                          isArray={true}
            />
          </Row>
        </>
      )
    }
}
  

export default LoadFromDirectoryDetails