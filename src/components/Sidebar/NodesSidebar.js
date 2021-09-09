import React from "react";
import { Card, Row } from "reactstrap";
import {
  Button,
  CardHeader,
  CardBody,
  Form,
  Col
} from "reactstrap";
import Select from 'react-select';
import { connect } from 'react-redux';
import axios from 'axios';


import ComponentsList from "components/Sidebar/ComponentsList";
import * as LoadNodes from "components/DiagramNodes/Load";
import * as SaveNodes from "components/DiagramNodes/Save";
import * as ModelsNodes from "components/DiagramNodes/Models";
import * as LabelNodes from "components/DiagramNodes/Label";
import * as PreprocessingNodes from "components/DiagramNodes/Preprocessing";
import * as TrainingNodes from "components/DiagramNodes/Training";
import * as MetricsNodes from "components/DiagramNodes/Metrics";



const options = [
  { value: LoadNodes, label: 'Load' },
  { value: SaveNodes, label: 'Save' },
  { value: ModelsNodes, label: 'Models' },
  { value: LabelNodes, label: 'Label' },
  { value: PreprocessingNodes, label: 'Preprocessing' },
  { value: TrainingNodes, label: 'Train' },
  { value: MetricsNodes, label: 'Metrics' }
]

const mapStateToProps = state => {
  return {chart: state.chart}
}


class NodesSidebar extends React.Component {
    
  constructor(props) {
    super(props);
    // this.saveChart = this.saveChart.bind(this);
    this.change = this.change.bind(this);
    this.state = {
      value: null
    }
  }

  change(event) {
    this.setState({value: event.value});
  }

  // saveChart(e) {
  //   e.preventDefault()
  //   console.log('Saving chart');
  //   console.log(this.props.chart);
  //   // validate chart
  //   // send to server
  //   let data = {
  //     'conf': {'chart': this.props.chart}
  //   }
  //   let url = "10.152.183.110"
  //   // let url = "localhost:8080"
  //   console.log(process.env.REACT_APP_AIRFLOW_URL);
  //   console.log(url)
  //   axios.post('http://' + url + '/api/trigger_dag', data)
  //   // axios.post('http://10.152.183.110/api/v1/dags/Helloworld/dagRuns', data,
  //   // axios.post('http://localhost:8080/api/customers', data,
  //   // {
  //   //   headers: {
  //   //     'Content-Type': 'application/json',
  //   //   }
  //   // })
  //     .then(response => {

  //       console.log(response);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }
  
  renderComponentType(param) {
    if (param !== null) {
      return <ComponentsList componentsNodes={param}/>;
    } else {
      return 'Select Component Type'; 
    }
  }

  render() {
    return (
    <>
        <Card className="bg-secondary shadow">
          <CardHeader className="bg-white border-0">
            <Row className="align-items-center">
              <Col xs="8">
                <h3 className="mb-0">Components</h3>
              </Col>
              {/* <Col className="text-right" xs="4">
                <Button
                  color="primary"
                  href="#pablo"
                  onClick={this.saveChart}
                  size="sm"
                >
                  Save
                </Button>
              </Col> */}
            </Row>
          </CardHeader>
          <CardBody>
            <Form>
              <h6 className="heading-small text-muted mb-4">
                <Select options={options} onChange={this.change} isSearchable/>
              </h6>
              <div>
                <Row className="justify-content-md-center">
                  <Col>
                    {this.renderComponentType(this.state.value)}
                  </Col>
                </Row>
              </div>
              <hr className="my-4" />
            </Form>
          </CardBody>
        </Card>
      </>
    );
  }
}

NodesSidebar = connect(mapStateToProps)(NodesSidebar)
export default NodesSidebar;
