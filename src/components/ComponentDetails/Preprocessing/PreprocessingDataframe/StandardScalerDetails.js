import React from 'react'
import { Row } from "reactstrap";
import InputDetails from 'components/ComponentDetails/InputDetails';
import SelectInputDetails from 'components/ComponentDetails/SelectInputDetails';


const withMeanOptions = [
  <option key="with_mean_0" value='true'>True</option>,
  <option key="with_mean_1" value='false'>False</option>,
]

const withSdtOptions = [
  <option key="with_sdt_0" value='true'>True</option>,
  <option key="with_sdt_1" value='false'>False</option>,
]

export class StandardScalerDetails extends React.Component {
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

            <SelectInputDetails name="With Mean" tooltip="If True, center the data before scaling."
                          attributes={this.props.attributes}
                          attributeName={'with_mean'}
                          options={withMeanOptions}
                          defaultValue={this.props.nodeAttributes.with_mean}
                          isArray={false}
            />

            <SelectInputDetails name="With Standard Deviation" tooltip="If True, scale the data to unit variance (or equivalently, unit standard deviation)."
                          attributes={this.props.attributes}
                          attributeName={'with_std'}
                          options={withSdtOptions}
                          defaultValue={this.props.nodeAttributes.with_std}
                          isArray={false}
            />
          </Row>
        </>
      )
    }
}
  

export default StandardScalerDetails