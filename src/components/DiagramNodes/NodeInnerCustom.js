import * as React from 'react'
import { INodeInnerDefaultProps } from "@mrblenny/react-flow-chart"
import * as LoadNodes from "components/DiagramNodes/Load";
import * as ModelsNodes from "components/DiagramNodes/Models";
import * as LabelNodes from "components/DiagramNodes/Label";
import * as PreprocessingNodes from "components/DiagramNodes/Preprocessing";
import * as TrainingNodes from "components/DiagramNodes/Training";
import * as MetricsNodes from "components/DiagramNodes/Metrics";


const componentsNodes = {
    'Load': LoadNodes,
    'Models': ModelsNodes,
    'Label': LabelNodes,
    'Preprocessing': PreprocessingNodes,
    'Training': TrainingNodes,
    'Metrics': MetricsNodes
}


const NodeInnerCustom = ({ node, config }: INodeInnerDefaultProps) => {

    function renderComponent() {
        const nodeType = node.type;
        const nodeName = node.properties.name  + 'Node';
        const TagName = componentsNodes[nodeType][nodeName];
        return (
            <>
                <TagName draggable={false}/>
            </>
        );
    };


    return (
        renderComponent()
    );

  }
  
  export default NodeInnerCustom;
