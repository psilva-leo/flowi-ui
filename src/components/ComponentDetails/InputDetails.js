import React from 'react';
import { Row, Col, Input, FormGroup, UncontrolledTooltip } from "reactstrap";



export class InputDetails extends React.Component {

  constructor(props) {
    super(props);
    this.propagateChange = this.propagateChange.bind(this);
    this.addInput = this.addInput.bind(this);
    this.deleteInput = this.deleteInput.bind(this);
    this.changeText = this.changeText.bind(this);

    this.inputType = this.props.inputType || 'text';
    this.inputs = this.props.defaultValue;
    if (this.props.isArray){
      if (this.inputs.constructor !== Array) {
        this.inputs = [this.inputs];
      }
    }
    this.state = {inputs: this.inputs};
  }

  propagateChange(){
    this.props.attributes[this.props.attributeName] = this.inputs
  }

  changeText(e) {
    if (this.props.isArray){
      let idx = e.target.id;
      idx = idx.replace(this.props.attributeName, "");
      let value = e.target.value;
      this.inputs[idx] = value;
    } else {
      let value = e.target.value;
      this.inputs = value;
    }
    
    this.propagateChange()
  }

  addInput(e){
    e.preventDefault()

    this.inputs = [...this.inputs, this.props.defaultValue]
    this.setState({
      inputs: this.inputs
    });
    this.propagateChange()
  }

  deleteInput(e){
    e.preventDefault()
    let idx = e.target.value;
    this.inputs.splice(idx, 1);
    this.setState({
      inputs: this.inputs
    });
    this.propagateChange()
  }

  Inputs() {
    let inputs = this.inputs;

    if (this.props.isArray){
      let renderedInputs = [];
      inputs.forEach((element, idx) => {
        renderedInputs.push(this.createArrayInput(element,  idx, idx === (inputs.length - 1)));
      });

      return renderedInputs;
    } else {
      return this.createInput(inputs)
    }
  }

  createInput(value){
    let input_id = this.props.attributeName + '0';

    return (
      <Row className="mb-1">
        <Col lg="10">
          <Input
            className="form-control-alternative"
            id={input_id}
            defaultValue={value}
            onChange={this.changeText}
            type={this.inputType}
          />
        </Col>
      </Row>
    )
  }

  createArrayInput(value, idx, isLast){
    let input_id = this.props.attributeName + idx;
    let row_id = 'row_' + Math.floor(9999 * Math.random()).toString();

    return (
      <Row key={row_id} className="mb-1">
        <Col lg="10">
          <Input
            className="form-control-alternative"
            id={input_id}
            defaultValue={this.inputs[idx]}
            onChange={this.changeText}
            type={this.inputType}
          />
        </Col>
        <Col lg="1">
          <button key={idx} value={idx} className="btn btn-primary btn-neutral" onClick={isLast ? this.addInput : this.deleteInput}>
            <i className={isLast ? "ni ni-fat-add" : "ni ni-fat-delete"}></i>
          </button>
        </Col>
      </Row>
    )
  }

  render () {
    let id = 'tooltip_' + Math.floor(9999 * Math.random()).toString();

    return (
        <>
        <Col lg="6">
          <FormGroup>
            <label
              className="form-control-label"
              htmlFor="input-username"
            >
              {this.props.name}
            </label>
            <i id={id} className="fas fa-info-circle float-right" />
            <UncontrolledTooltip
              delay={0}
              placement="top"
              target={id}
            >
              {this.props.tooltip}
            </UncontrolledTooltip>
            
            {this.Inputs()}
          </FormGroup>
        </Col>
        </>
    )
  }
}
  

export default InputDetails