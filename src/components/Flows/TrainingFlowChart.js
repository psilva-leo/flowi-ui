import * as actions from "components/Flows/actions";
import ComponentModal from "components/ComponentDetails/TrainingComponentModal.js";

import { mapValues } from 'lodash'
import * as React from 'react'
import { FlowChart } from "@mrblenny/react-flow-chart";
import NodeInnerCustom from "components/DiagramNodes/NodeInnerCustom.js";
import { connect } from 'react-redux'
import { updateTrainingChart } from 'store/actions/trainingFlowChart'


const mapStateToProps = state => {
  return {trainingChart: state.trainingChart}
}


export class ExternalReactState extends React.Component {

      
  constructor(props) {
    super(props);
    this.state = this.props.trainingChart;
  }

  setStateCallback () {
    this.props.dispatch(updateTrainingChart(this.state));
  }

  triggerComponentModal() {
    this.componentModal.toggleComponentModal();
  }
  
  render () {
    const stateActions = mapValues(actions, (func: any) => (...args) => {
      if (this.props.trainingChart !== this.state) {
        this.setState(this.props.trainingChart);
      }
      return this.setState(func(...args, this), this.setStateCallback);
    });

    return (
      <>
        <ComponentModal ref={componentModal => this.componentModal = componentModal}/>
        <FlowChart
          chart={this.props.trainingChart}
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
