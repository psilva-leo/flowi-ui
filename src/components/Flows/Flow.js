import * as actions from "components/Flows/actions";
import ComponentModal from "components/ComponentDetails/ComponentModal.js";

import { mapValues } from 'lodash'
import * as React from 'react'
import { FlowChart } from "@mrblenny/react-flow-chart";
import NodeInnerCustom from "components/DiagramNodes/NodeInnerCustom.js";
import { connect } from 'react-redux'
import { updateChart } from 'store/actions/flowChart'


const mapStateToProps = state => {
  return {chart: state.chart}
}


export class ExternalReactState extends React.Component {

      
  constructor(props) {
    super(props);
    this.state = this.props.chart;
  }

  setStateCallback () {
    this.props.dispatch(updateChart(this.state));
  }

  triggerComponentModal() {
    this.componentModal.toggleComponentModal();
  }
  
  render () {
    const stateActions = mapValues(actions, (func: any) => (...args) => {
      if (this.props.chart !== this.state) {
        this.setState(this.props.chart);
      }
      return this.setState(func(...args, this), this.setStateCallback);
    });

    return (
      <>
        <ComponentModal ref={componentModal => this.componentModal = componentModal}/>
        <FlowChart
          chart={this.props.chart}
          Components={{
            NodeInner: NodeInnerCustom,
          }}
          callbacks={stateActions}
        />
      </>
    )
  }
}
ExternalReactState = connect(mapStateToProps)(ExternalReactState)
export default ExternalReactState;
