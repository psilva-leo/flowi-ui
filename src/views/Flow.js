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
import { Card, Container, Row, Col,
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
// import PreprocessingFlowChart from "components/Flows/PreprocessingFlowChart";
import TrainingFlowChart from "components/Flows/TrainingFlowChart";
import Deploy from "components/Flows/Deploy";
import Schedule from "components/Flows/Schedule";
import axios from 'axios';
import { connect } from 'react-redux';
import { updateTrainingNode } from 'store/actions/trainingFlowChart';


const mapStateToProps = state => {
  return {
    chart: state.trainingChart,
    schedule: state.schedule,
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
    }
  }
}

class Flow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tabs: 1
    };
    this.runFlow = this.runFlow.bind(this);
  }

  
  
  runFlow(e) {
    e.preventDefault()
    console.log('Running chart');
    // validate chart
    // send to server
    let data = {
      'conf': {
        'flow_name': this.props.match.params.id,
        'deploy': {
          'api': '',
          'batch': '',
        },
        "schedule_interval": this.props.schedule.schedule_interval,
        "version": "1",
        "experiment_tracking": this.props.schedule.experiment_tracking,
        'flow_chart': this.props.chart
      }
    }
    console.log(data);
    let url = "localhost:8080"
    axios.post('http://' + url + '/api/trigger_dag', data,
    {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => {

        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }


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
                <Button color="secondary" type="button" onClick={this.runFlow}>
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

Flow = connect(mapStateToProps, mapDispatchToProps, null, {forwardRef: true})(Flow);
export default Flow;
