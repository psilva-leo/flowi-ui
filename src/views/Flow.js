/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create google maps

// reactstrap components
import { Card, Container, Row } from "reactstrap";
import { Col } from "reactstrap";

// core components
import Header from "components/Headers/HeaderDiagram.js";
import NodesSidebar from "components/Sidebar/NodesSidebar.js";
import FlowChart from "components/Flows/Flow";


class Flow extends React.Component {

  // constructor(props) {
  //   super(props);
  //   console.log(props);
  // }

  render() {
    console.log("flow chart id: ", this.props.match.params.id);

    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col lg="6" xl="9">
                <Card className="shadow border-0" style={{maxHeight: "100vh" }}>
                <FlowChart />
                </Card>
            </Col>

            <Col lg="6" xl="3">
              <NodesSidebar/>
            </Col>



          </Row>
        </Container>
      </>
    );
  }
}

export default Flow;
