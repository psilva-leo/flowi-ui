import React from 'react'
import { Row } from "reactstrap";
import * as actions from "components/ComponentDetails/actions";

const mergePolicyOptions = [
  { value: 'none', label: 'None' },
  { value: 'sum', label: 'Sum' },
]

const dctTypeOptions = [
  { value: 1, label: 1 },
  { value: 2, label: 2 },
]

export class MelSpectrogramDetails extends React.Component {
  
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
              {actions.createSelect(4, 'Number of Mels', 'Number of Mels components to calculate.', actions.stringListToDictList(this.props.nodeAttributes.n_mels), this.props.nodeAttributes.n_mels, 
              true, // isCreatable
              true, // isSearchtable
              true, // isMulti
              this.props.handleChange('n_mels'))}
              
              {actions.createSelect(4, 'Max Freq', 'Max frequency.', actions.stringListToDictList(this.props.nodeAttributes.fmax), this.props.nodeAttributes.fmax, 
              true, // isCreatable
              true, // isSearchtable
              true, // isMulti
              this.props.handleChange('fmax'))}
              
              {actions.createSelect(4, 'DCT Type', 'Discrete cosine transform (DCT) type.', dctTypeOptions, this.props.nodeAttributes.dct_type, 
              true, // isCreatable
              true, // isSearchtable
              true, // isMulti
              this.props.handleChange('dct_type'))}

              {actions.createSelect(6, 'Returning Mels', 'List of Mel Components to use.', actions.stringListToDictList(this.props.nodeAttributes.returning_mels), this.props.nodeAttributes.returning_mels,
              true, // isCreatable
              true, // isSearchtable
              true, // isMulti
              this.props.handleChange('returning_mels'))}

              {actions.createSelect(6, 'Merge Policy', 'How to handle returnig mels. Sumup, return all, etc.', mergePolicyOptions, this.props.nodeAttributes.merge_policy,
              false, // isCreatable
              true, // isSearchtable
              true, // isMulti
              this.props.handleChange('merge_policy'))}
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
  

export default MelSpectrogramDetails