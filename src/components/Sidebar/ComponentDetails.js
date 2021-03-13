import React from 'react'
import { connect } from 'react-redux'
import { updateNode } from 'store/actions/flowChart'
import * as PreprocessingNodes from "components/ComponentDetails/Preprocessing";



const mapStateToProps = state => {
    if (state.chart.selected !== undefined && state.chart.selected.type === 'node'){
        let selected_id = state.chart.selected.id
        return { node: state.chart.nodes[selected_id], properties:  state.chart.nodes[selected_id].properties };
    } else{
        return {};
    }
}

const mapDispatchToProps = dispatch => {
  return {
    onNodeClick: (e, node) => {
        e.preventDefault();

        dispatch(updateNode(node))
    },
    onPropertyChange: (node) => {
      // e.preventDefault();

      dispatch(updateNode(node))
  }
  }
}


export class ComponentDetails extends React.Component {
      
    constructor(props) {
      super(props);
      this.nodeComponents = {
        'Preprocessing': PreprocessingNodes
      };
    }


    renderComponent(){
      let nodeType = this.props.node.type;
      let nodeName = this.props.node.properties.name + 'Details';
      const TagName = this.nodeComponents[nodeType][nodeName];
      return;
      // return <TagName node={this.props.node} onPropertyChange={(node) => this.props.onPropertyChange(node)} onClick={(e, node) => this.props.onNodeClick(e, node)}/>;
    }

    render () {
        if (this.props.node !== undefined) {
            return (
              <>
              {this.renderComponent()}
              </>
            );
        } else {
            return <h6 className="heading-small text-muted mb-4">No Component Selected</h6>
        }
    }
}


ComponentDetails = connect(mapStateToProps, mapDispatchToProps)(ComponentDetails)
export default ComponentDetails