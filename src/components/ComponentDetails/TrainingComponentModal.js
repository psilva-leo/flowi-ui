import React from "react";
import { connect } from 'react-redux'
import { updateTrainingNode } from 'store/actions/trainingFlowChart'
import { addSharedVariables, removeSharedVariables } from 'store/actions/sharedVariables'
// reactstrap components
import {
  Button,
  Form,
  Modal,
} from "reactstrap";

import * as LoadNodes from "components/ComponentDetails/Load";
import * as PreprocessingNodes from "components/ComponentDetails/Preprocessing";
import * as TrainingNodes from "components/ComponentDetails/Training";
import * as MetricsNodes from "components/ComponentDetails/Metrics";


const mapStateToProps = state => {
  if (state.trainingChart.selected !== undefined && state.trainingChart.selected.type === 'node'){
      let selected_id = state.trainingChart.selected.id
      return { node: state.trainingChart.nodes[selected_id], properties:  state.trainingChart.nodes[selected_id].properties, sharedVariables: state.sharedVariables };
  } else{
      return {};
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onNodeClick: (e, node) => {
        e.preventDefault();

        dispatch(updateTrainingNode(node))
    },
    updateTrainingNode: (node) => {
      // e.preventDefault();

      dispatch(updateTrainingNode(node))
    },
    addSharedVariables: (newVariables) => {
      dispatch(addSharedVariables(newVariables))
    },
    removeSharedVariables: (newVariables) => {
      dispatch(removeSharedVariables(newVariables))
    }
  }
}


class ComponentModal extends React.Component {

  constructor(props) {
    super(props);

    this.attributes = null;

    this.state = {
      componentModal: false,
      node: {}
    };
    this.nodeComponents = {
      'Load': LoadNodes,
      'Preprocessing': PreprocessingNodes,
      'Training': TrainingNodes,
      'Metrics': MetricsNodes
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = name => value => {
    if (value === null){
      value = null;
    } else if (value.constructor === Object) {
      value = value.value;
    } else if (value.constructor === Array) {
      value = value.map(element => {
        return element.value
      });
    } else if (typeof value.constructor === 'function') {
      value = value.target.value;
    }

    let type = '';
    if ((name === 'input_variables') || (name === 'output_variables') || (name === 'output_policy')) {
      type = 'property';
    } else {
      type = 'attribute';
    }
    this.updateNode(name, value, type);
  }

  toggleComponentModal() {
    this.setState({
      componentModal: !this.state.componentModal,
      node: {},
      resetNode: {}
    });
  };

  getType(){
    if (this.props.node !== undefined) {
      return this.props.node.properties.class.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
    } else {
        return ;
    }
  }
  
  getName(){
    if (this.props.node !== undefined) {
      return this.props.node.properties.name;
    } else {
        return ;
    }
  }

  getDescription(){
    if (this.props.node !== undefined) {
      return this.props.node.properties.description;
    } else {
        return ;
    }
  }

  variablesToRemove(newVariables, previousOutputVariables){
    let variablesToRemove = [];
    previousOutputVariables.forEach(element => {
      if (newVariables.indexOf(element) === -1){
        variablesToRemove.push(element);
      }
    });

    return variablesToRemove;
  }

  variablesToAdd(newVariables, sharedVariables){
    let variablesToAdd = [];
    newVariables.forEach(element => {
      if ((element != null) && (sharedVariables.indexOf(element) === -1)){
        variablesToAdd.push(element);
      }
    });
    
    return variablesToAdd;
  }

  getOutputVariables(nodeAttributes){
    let outputs = [];
    Object.entries(nodeAttributes).forEach(([key, value]) => {
      if (key.startsWith("output_variable_name_for")){
        outputs.push(value);
      }
   });

   return outputs;
  }

  saveChanges(e){
    // if (this.state.node.properties.output_policy === 'create'){
    //   let outputVariables = this.getOutputVariables(this.state.node.properties.attributes);
    //   let previousOutputVariables = this.getOutputVariables(this.state.resetNode.properties.attributes);

    //   let variablesToAdd = this.variablesToAdd(outputVariables, this.props.sharedVariables);
    //   let variablesToRemove = this.variablesToRemove(outputVariables, previousOutputVariables);
  
    //   this.props.removeSharedVariables(variablesToRemove);
    //   this.props.addSharedVariables(variablesToAdd);
    // }
    
    let previousProperties = this.state.node.properties;
    let node = Object.assign(this.state.node, {properties: {
      ...previousProperties,
      attributes: this.attributes
    }});
    this.setState({
      node: node
    });

    this.props.updateTrainingNode(this.state.node);
    this.toggleComponentModal();
  }

  updateNode(name, value, type){
    let previesProperties = {};
    let node = null;
    switch (type) {
      case 'property':
        previesProperties = this.state.node.properties;
        node = Object.assign(this.state.node, {properties: {
          ...previesProperties,
          [name]: value
        }});
        break
      default:
        previesProperties = this.state.node.properties;
        const previesAttributes = this.state.node.properties.attributes;
        node = Object.assign(this.state.node, {properties: {
          ...previesProperties,
          attributes: {
            ...previesAttributes,
            [name]: value
          }
        }});
    }
    this.setState({
      node: node
    });

  }

  static getDerivedStateFromProps(props, state) {
    if ((props.node !== undefined) && (props.node.id !== state.node.id)) {
      return {
        node: Object.assign({}, props.node),
        resetNode: Object.assign({}, props.node)
      };
    }
    return null;
  }

  renderComponent(){
    if (this.props.node !== undefined){
      let nodeType = this.props.node.type;
      let nodeName = this.props.node.properties.name + 'Details';
      const TagName = this.nodeComponents[nodeType][nodeName];

      let nodeProperties = this.state.node.properties !== undefined ? this.state.node.properties : this.props.node.properties;
      let nodeAttributes = Object.assign({}, nodeProperties.attributes);
      this.attributes = Object.assign({}, nodeProperties.attributes);

      return (
        <>
          <TagName attributes={this.attributes} nodeAttributes={nodeAttributes} handleChange={(node) => this.handleChange(node)}/>
        </>
      );
    }

    return ;
  }

  render() {
    return (
      <>
        <Modal
          size="lg"
          className="modal-dialog-centered"
          isOpen={this.state.componentModal}
          toggle={() => this.toggleComponentModal()}
        >
          <div className="modal-header">
            <h3 className="modal-title text-muted">{this.getType()}&nbsp;</h3>
            <h3 className="modal-title" id="modal-title-default">
              {this.getName()}
            </h3>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleComponentModal()}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body" style={{paddingTop: 0}}>
          <Form>
            <p>
              {this.getDescription()}
            </p>
            <hr className="my-1" />
            
            {this.renderComponent()}

            </Form>
          </div>
          <div className="modal-footer">
            <Button color="primary" type="button" onClick={(e) => this.saveChanges(e)}>
              Save changes
            </Button>
            <Button
              className="ml-auto"
              color="link"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleComponentModal()}
            >
              Close
            </Button>
          </div>
        </Modal>
      </>
    );
  }
}

ComponentModal = connect(mapStateToProps, mapDispatchToProps, null, {forwardRef: true})(ComponentModal);
export default ComponentModal;
