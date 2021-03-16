import * as actions from "components/Flows/actions";
import ComponentModal from "components/ComponentDetails/ComponentModal.js";

import { mapValues } from 'lodash'
import * as React from 'react'
import { FlowChart } from "@mrblenny/react-flow-chart";
import NodeInnerCustom from "components/DiagramNodes/NodeInnerCustom.js";
import { connect } from 'react-redux'
import { updatePreprocessingChart } from 'store/actions/preprocessingFlowChart'


const mapStateToProps = state => {
  return {preprocessingChart: state.preprocessingChart}
}


export class ExternalReactState extends React.Component {

      
  constructor(props) {
    super(props);
    this.state = this.props.preprocessingChart;
  }

  setStateCallback () {
    this.props.dispatch(updatePreprocessingChart(this.state));
  }

  triggerComponentModal() {
    this.componentModal.toggleComponentModal();
  }
  
  render () {
    const stateActions = mapValues(actions, (func: any) => (...args) => {
      if (this.props.preprocessingChart !== this.state) {
        this.setState(this.props.preprocessingChart);
      }
      return this.setState(func(...args, this), this.setStateCallback);
    });

    return (
      <>
        <ComponentModal ref={componentModal => this.componentModal = componentModal}/>
        <FlowChart
          chart={this.props.preprocessingChart}
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
