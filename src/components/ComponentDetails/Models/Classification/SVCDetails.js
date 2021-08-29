import React from 'react'
import { Row } from "reactstrap";
import InputDetails from 'components/ComponentDetails/InputDetails';
import SelectInputDetails from 'components/ComponentDetails/SelectInputDetails';


const kernelOptions = [
  <option key="kernel0" value='linear'>Linear</option>,
  <option key="kernel1" value='poly'>Poly</option>,
  <option key="kernel2" value='rbf'>RBF</option>,
  <option key="kernel3" value='sigmoid'>Sigmoid</option>,
  <option key="kernel4" value='precomputed'>Precomputed</option>
]

const gammaOptions = [
  <option key="gamma0" value='scale'>Scale</option>,
  <option key="gamma1" value='auto'>Auto</option>
]

const shrinkingOptions = [
  <option key="shrinking0" value='true'>True</option>,
  <option key="shrinking1" value='false'>False</option>
]

const classWeightOptions = [
  <option key="class_weight0" value='None'>None</option>,
  <option key="class_weight1" value='balanced'>Balanced</option>,
  <option key="class_weight2" value='custom'>Custom</option>
]

const DecisionFunctionOptions = [
  <option key="decision_function_shape0" value='ovo'>OVO</option>,
  <option key="decision_function_shape1" value='ovr'>OVR</option>
]

const breakTiesOptions = [
  <option key="break_ties0" value='true'>True</option>,
  <option key="break_ties1" value='false'>False</option>
]

export class SVCDetails extends React.Component {
    render () {
      return (
        <>
          <h6 className="heading-small text-muted">Parameters</h6>
          <Row>
              
            <InputDetails name="Label Column" tooltip="Label column."
                          attributes={this.props.attributes}
                          attributeName={'target_column'}
                          defaultValue={this.props.nodeAttributes.target_column}
                          isArray={false}
            />

            <InputDetails name="C" tooltip="Regularization parameter. The strength of the regularization is inversely proportional to C. Must be strictly positive."
                          attributes={this.props.attributes}
                          attributeName={'C'}
                          defaultValue={this.props.nodeAttributes.C}
                          isArray={true}
                          inputType='number'
            />

            <SelectInputDetails name="Kernel" tooltip="Specifies the kernel type to be used in the algorithm."
                          attributes={this.props.attributes}
                          attributeName='kernel'
                          options={kernelOptions}
                          defaultValue={this.props.nodeAttributes.kernel}
                          isArray={true}
            />

            <InputDetails name="Degree" tooltip="Degree of the polynomial kernel function (‘poly’). Ignored by all other kernels."
                          attributes={this.props.attributes}
                          attributeName={'degree'}
                          defaultValue={this.props.nodeAttributes.degree}
                          isArray={true}
                          inputType='number'
            />

            <SelectInputDetails name="Gamma" tooltip="Kernel coefficient for ‘rbf’, ‘poly’ and ‘sigmoid’."
                          attributes={this.props.attributes}
                          attributeName={'gamma'}
                          options={gammaOptions}
                          defaultValue={this.props.nodeAttributes.gamma}
                          isArray={true}
                          inputType='number'
            />

            <InputDetails name="Coef0" tooltip="Independent term in kernel function. It is only significant in ‘poly’ and ‘sigmoid’."
                          attributes={this.props.attributes}
                          attributeName={'coef0'}
                          defaultValue={this.props.nodeAttributes.coef0}
                          isArray={true}
                          inputType='number'
            />

            <SelectInputDetails name="Shrinking" tooltip="Whether to use the shrinking heuristic."
                          attributes={this.props.attributes}
                          attributeName={'shrinking'}
                          options={shrinkingOptions}
                          defaultValue={this.props.nodeAttributes.shrinking}
                          isArray={true}
            />

            <InputDetails name="Tol" tooltip="Tolerance for stopping criterion."
                          attributes={this.props.attributes}
                          attributeName={'tol'}
                          defaultValue={this.props.nodeAttributes.tol}
                          isArray={true}
                          inputType='number'
            />

            <InputDetails name="Cache Size" tooltip="Specify the size of the kernel cache (in MB)."
                          attributes={this.props.attributes}
                          attributeName={'cache_size'}
                          defaultValue={this.props.nodeAttributes.cache_size}
                          isArray={true}
                          inputType='number'
            />

            <SelectInputDetails name="Class Weight" tooltip="Set the parameter C of class i to class_weight[i]*C for SVC. If not given, all classes are supposed to have weight one."
                          attributes={this.props.attributes}
                          attributeName={'class_weight'}
                          options={classWeightOptions}
                          defaultValue={this.props.nodeAttributes.class_weight}
                          isArray={true}
            />

            <InputDetails name="Max Iter" tooltip="Hard limit on iterations within solver, or -1 for no limit."
                          attributes={this.props.attributes}
                          attributeName={'max_iter'}
                          defaultValue={this.props.nodeAttributes.max_iter}
                          isArray={true}
                          inputType='number'
            />

            <SelectInputDetails name="Decision Function Shape" tooltip="Whether to return a one-vs-rest (‘ovr’) or the original one-vs-one (‘ovo’) decision function."
                          attributes={this.props.attributes}
                          attributeName={'decision_function_shape'}
                          options={DecisionFunctionOptions}
                          defaultValue={this.props.nodeAttributes.decision_function_shape}
                          isArray={true}
            />

            <SelectInputDetails name="Break Ties" tooltip="If true, decision_function_shape='ovr', and number of classes > 2, predict will break ties according to the confidence values of decision_function; otherwise the first class among the tied classes is returned."
                          attributes={this.props.attributes}
                          attributeName={'break_ties'}
                          options={breakTiesOptions}
                          defaultValue={this.props.nodeAttributes.break_ties}
                          isArray={true}
            />

          </Row>
        </>
      )
    }
}
  

export default SVCDetails