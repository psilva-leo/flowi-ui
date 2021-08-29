import React from 'react'
import { Row } from "reactstrap";
import InputDetails from 'components/ComponentDetails/InputDetails';
import SelectInputDetails from 'components/ComponentDetails/SelectInputDetails';


const strategyOptions = [
  <option key="file_type0" value='mean'>Mean</option>,
  <option key="file_type1" value='median'>Median</option>,
  <option key="file_type2" value='most_frequent'>Most Frequent</option>,
  <option key="file_type3" value='constant'>Constant</option>
]

export class FillnaDetails extends React.Component {
    render () {
      return (
        <>
          <h6 className="heading-small text-muted">Parameters</h6>
          <Row>
              
            <InputDetails name="Columns" tooltip="Columns to apply transform."
                          attributes={this.props.attributes}
                          attributeName={'columns'}
                          defaultValue={this.props.nodeAttributes.columns}
                          isArray={true}
            />

            <InputDetails name="Exclude Columns" tooltip="Columns excluded on apply transform."
                          attributes={this.props.attributes}
                          attributeName={'exclude_columns'}
                          defaultValue={this.props.nodeAttributes.exclude_columns}
                          isArray={true}
            />
            <InputDetails name="Missing Values" tooltip="The placeholder for the missing values."
                          attributes={this.props.attributes}
                          attributeName={'missing_values'}
                          defaultValue={this.props.nodeAttributes.missing_values}
                          isArray={false}
            />

            <SelectInputDetails name="Strategy" tooltip="The imputation strategy (e.g. mean, constant)."
                          attributes={this.props.attributes}
                          attributeName={'strategy'}
                          options={strategyOptions}
                          defaultValue={this.props.nodeAttributes.strategy}
                          isArray={false}
            />

            <InputDetails name="Fill Value" tooltip="When strategy is “constant”, fill_value is used to replace all occurrences of missing_values."
                          attributes={this.props.attributes}
                          attributeName={'fill_value'}
                          defaultValue={this.props.nodeAttributes.fill_value}
                          isArray={false}
            />
          </Row>
        </>
      )
    }
}
  

export default FillnaDetails