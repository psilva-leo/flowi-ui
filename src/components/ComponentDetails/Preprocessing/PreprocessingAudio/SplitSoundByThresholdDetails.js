import React from 'react'
import { Row } from "reactstrap";
import * as actions from "components/ComponentDetails/actions";


export class SplitSoundByThresholdDetails extends React.Component {
  
    render () {
      return (
          <>
            <h6 className="heading-small text-muted">Inputs</h6>
            <Row>
              {actions.createText(6, 'Data column name', 'Name of the column to split by threashold.', this.props.handleChange('data_column_name'), this.props.nodeAttributes.data_column_name)}
            </Row>
            <hr className="my-1" />
            <h6 className="heading-small text-muted">Parameters</h6>
            <Row>
              {actions.createSelect(4, 'Threshold', 'Threshold number.', actions.stringListToDictList(this.props.nodeAttributes.threshold), this.props.nodeAttributes.threshold, 
              true, // isCreatable
              true, // isSearchtable
              true, // isMulti
              this.props.handleChange('threshold'))}

              {actions.createSelect(4, 'Min Window size', 'Minimum window size to consider as a signal.', actions.stringListToDictList(this.props.nodeAttributes.min_window), this.props.nodeAttributes.min_window, 
              true, // isCreatable
              true, // isSearchtable
              true, // isMulti
              this.props.handleChange('min_window'))}

              {actions.createText(4, 'Label column name', 'If label column is set, it will be exploded row wise along with data column.', this.props.handleChange('label_column'), this.props.nodeAttributes.label_column)}
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
  

export default SplitSoundByThresholdDetails