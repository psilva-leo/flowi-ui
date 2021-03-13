import React from 'react'
import { Row } from "reactstrap";
import * as actions from "components/ComponentDetails/actions";


export class SubstringDetails extends React.Component {
  
    render () {
      return (
          <>
            <h6 className="heading-small text-muted">Inputs</h6>
            <Row>
              {actions.createText(6, 'Data column name', 'Name of the column to apply mel spectrogram.', this.props.handleChange('data_column_name'), this.props.nodeAttributes.data_column_name)}
            </Row>
            <hr className="my-1" />
            <h6 className="heading-small text-muted">Parameters</h6>
            <Row>
              {actions.createText(4, 'Delimiter', 'Delimiter.', this.props.handleChange('delimiter'), this.props.nodeAttributes.delimiter)}
              {actions.createNumber(4, 'Count', 'Count', this.props.handleChange('count'), this.props.nodeAttributes.count, 100, -1)}
            </Row>
            <hr className="my-1" />
            <h6 className="heading-small text-muted">Outputs</h6>
            <Row>
              {actions.createText(6, 'Output column name', 'Name of the column to place the computed melspectogram data.', this.props.handleChange('output_column_name'), this.props.nodeAttributes.output_column_name)}
            </Row>
          </>
      )
    }
}
  

export default SubstringDetails