import React from "react";


class ComponentsList extends React.Component {

  renderComponents(componentsNodes){
    let componentsList = []
    for (let key of Object.keys(componentsNodes)) {
      const TagName = componentsNodes[key];
      componentsList.push(<TagName key={key}/>)
    }

    return componentsList
  }
  

  render() {
    return (
    <>
      <div style={{maxHeight: "100vh", overflowY: "auto"}}>
        {this.renderComponents(this.props.componentsNodes)}
        </div>
      </>
    );
  }
}

export default ComponentsList;
