import React from 'react'
import { Row } from "reactstrap";
import * as actions from "components/ComponentDetails/actions";


const fileTypeOptions = [
  { value: 'binaryFile', label: 'Image/Audio' }
]

export class F1ScoreDetails extends React.Component {
  
    render () {
      return (
          <>
          <h6 className="heading-small text-muted">Parameters</h6>
          <Row>
              {actions.createSelect(6, 'Directory Paths', 'Directory paths to load data from.', actions.stringListToDictList(this.props.nodeAttributes.directory_paths), this.props.nodeAttributes.directory_paths, 
                true, // isCreatable
                true, // isSearchtable
                true, // isMulti
                this.props.handleChange('directory_paths'))
              }
              {actions.createSelect(6, 'File Type', 'File type to load (e.g. image, audio).', fileTypeOptions, this.props.nodeAttributes.file_type, false, true, false, this.props.handleChange('file_type'))}
            </Row>
          </>
      )
    }
}
  

export default F1ScoreDetails