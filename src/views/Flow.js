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
import { Card, Container, Row, Col, CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane
 } from "reactstrap";
 import { Button } from "reactstrap";
 import classnames from "classnames";

// core components
import Header from "components/Headers/HeaderDiagram.js";
import NodesSidebar from "components/Sidebar/NodesSidebar.js";
import PreprocessingFlowChart from "components/Flows/PreprocessingFlowChart";
import TrainingFlowChart from "components/Flows/TrainingFlowChart";
import Deploy from "components/Flows/Deploy";
import Schedule from "components/Flows/Schedule";


class Flow extends React.Component {

  state = {
    tabs: 1
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };

  render() {
    console.log("flow chart id: ", this.props.match.params.id);

    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col lg="6" xl="9">
              <div className="nav-wrapper">
                <Nav
                  className="nav-fill flex-column flex-md-row"
                  id="tabs-icons-text"
                  pills
                  role="tablist"
                >
                  
                  <NavItem>
                    <NavLink
                      aria-selected={this.state.tabs === 1}
                      className={classnames("mb-sm-3 mb-md-0", {
                        active: this.state.tabs === 1
                      })}
                      onClick={e => this.toggleNavs(e, "tabs", 1)}
                      href="#"
                      role="tab"
                    >
                      {/* <i className="ni ni-bell-55 mr-2" /> */}
                      Train
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      aria-selected={this.state.tabs === 2}
                      className={classnames("mb-sm-3 mb-md-0", {
                        active: this.state.tabs === 2
                      })}
                      onClick={e => this.toggleNavs(e, "tabs", 2)}
                      href="#"
                      role="tab"
                    >
                      {/* <i className="ni ni-delivery-fast mr-2" /> */}
                      Schedule
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      aria-selected={this.state.tabs === 3}
                      className={classnames("mb-sm-3 mb-md-0", {
                        active: this.state.tabs === 3
                      })}
                      onClick={e => this.toggleNavs(e, "tabs", 3)}
                      href="#"
                      role="tab"
                    >
                      {/* <i className="ni ni-delivery-fast mr-2" /> */}
                      Deploy
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </Col>

            <Col lg="6" xl="3">
              <div className="nav-wrapper float-right">
                <Button color="secondary" type="button">
                  Save
                </Button>
                <Button color="secondary" type="button">
                  Run
                </Button>
              </div>
            </Col>

            <Col lg="6" xl="12">
              <TabContent activeTab={"tabs" + this.state.tabs}>
                {/* <TabPane tabId="tabs1">
                  <Row>
                    <Col lg="6" xl="9">
                      <Card className="shadow border-0" style={{maxHeight: "100vh" }}>
                        <PreprocessingFlowChart />
                      </Card>
                    </Col>

                    <Col lg="6" xl="3">
                      <NodesSidebar/>
                    </Col>
                  </Row>
                </TabPane> */}
                <TabPane tabId="tabs1">
                  <Row>
                    <Col lg="6" xl="9">
                      <Card className="shadow border-0" style={{maxHeight: "100vh" }}>
                        <TrainingFlowChart />
                      </Card>
                    </Col>

                    <Col lg="6" xl="3">
                      <NodesSidebar/>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="tabs2">
                  <Row>
                    <Col lg="12" xl="12">
                      <Schedule/>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="tabs3">
                  <Row>
                    <Col lg="12" xl="12">
                      <Deploy/>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
              
            </Col>


          </Row>
        </Container>
      </>
    );
  }
}

export default Flow;
