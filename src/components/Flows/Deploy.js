import * as React from 'react';
import { connect } from 'react-redux';
import { updateDeploy } from 'store/actions/deploy';
import {
  Card,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";
import Select from 'react-select';
// import ComponentsList from "components/Sidebar/ComponentsList";
// import * as LoadNodes from "components/DiagramNodes/Load";
import * as LoadNodes from "components/ComponentDetails/Load";
import * as SaveNodes from "components/ComponentDetails/Save";
// import * as LoadNodes from "components/ComponentDetails/Preprocessing";


const mapStateToProps = state => {
  return {deploy: state.deploy}
}


const mapDispatchToProps = dispatch => {
  return {
    updateDeploy: (deploy) => {
      dispatch(updateDeploy(deploy))
    }
  }
}


const options = [
  <option key="accuracy" value='accuracy'>Accuracy</option>,
  <option key="precision" value='precision'>Precision</option>,
]



export class Deploy extends React.Component {      


  constructor(props){
    super(props);

    
    this.state = {
      apiEnabled: this.props.deploy.api.enabled,
      batchEnabled: this.props.deploy.batch.enabled
    }
    this.batch_sechedule_interval = this.props.deploy.batch.schedule_interval;
    this.load_option = "";
    this.save_option = "";
    

    this.changeApiEnabled = this.changeApiEnabled.bind(this);
    this.changeBatchEnabled = this.changeBatchEnabled.bind(this);
    // this.changeScheduleInterval = this.changeScheduleInterval.bind(this);
    
    // this.changeExperimentTracking = this.changeExperimentTracking.bind(this);
  }

  getOptions (nodes) {
    let list = Object.keys(nodes)
    console.log(list);
    let options = [];

    for (let i = 0; i < list.length; i++) {
      options.push(<option key={list[i]} value={list[i]}>{list[i]}</option>);
    }

    return options;
  }


  getLoadOptions () {
    return this.getOptions(LoadNodes)
  }

  getSaveOptions () {
    return this.getOptions(SaveNodes)
  }


  renderSaveComponent() {

    if (this.save_option == "") {
      let list = Object.keys(SaveNodes)
      this.save_option = list[0];
    }


    let attributes = {
      'label_column': 'label',
      'save_label_column_only': 'false',
      'file_name': 'temp',
      'file_type': 'csv'
    };
    
    const TagName = SaveNodes[this.save_option];
    return (
      <TagName attributes={attributes} nodeAttributes={attributes}></TagName>
    );
  }

  renderLoadComponent() {

    if (this.load_option == "") {
      let list = Object.keys(LoadNodes)
      this.load_option = list[0];
    }


    let attributes = {
      "train_path":"train/",
      "test_path":"test/",
      "file_type":"csv",
      "test_split":0.2,
    };
    
    const TagName = LoadNodes[this.load_option];
    return (
      <TagName attributes={attributes} nodeAttributes={attributes}></TagName>
    );
  }

  changeApiEnabled(e) {
    let deploy = this.props.deploy;
    let enabled = e.target.checked;

    deploy.api.enabled = enabled;
    this.props.updateDeploy(deploy)
    this.setState({ apiEnabled: enabled })    
  }

  changeBatchEnabled(e) {
    let deploy = this.props.deploy;
    let enabled = e.target.checked;

    if (enabled) {
      deploy.batch.schedule_interval = this.batch_sechedule_interval;
    } else {
      deploy.batch.schedule_interval = "None";
    }

    deploy.batch.enabled = enabled;
    this.props.updateDeploy(deploy)
    this.setState({ batchEnabled: enabled })
  }

  changeBatchScheduleInterval(e){
    let deploy = this.props.deploy;
    deploy.batch.schedule_interval = e.target.value;
    
    this.batch_sechedule_interval =  deploy.batch.schedule_interval;
    this.props.updateSchedule(deploy)
  }
  
  render () {

    return (
      <>
      <Row>
        <Col lg="6" xl="9">
          <Card className="bg-secondary shadow">
            <CardBody>
              <Form>
                <h6 className="heading-small text-muted mb-4">
                  Model Comparison Function
                </h6>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                          Function
                        </label>
                        <Input
                          className="form-control-alternative"
                          // id={input_id}
                          defaultValue={options[0]}
                          // onChange={this.changeText}
                          type="select">
                          {options}
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                          Threshold
                        </label>
                        <Input
                          className="form-control-alternative"
                          defaultValue="0.9"
                          id="input-last-name"
                          placeholder="Threshold"
                          type="number"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
                <hr className="my-4" />
                
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="heading-small text-muted mb-0">Online</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <label className="custom-toggle">
                      <input
                      checked={this.state.apiEnabled}
                      onChange={this.changeApiEnabled}
                      type="checkbox" />
                      <span className="custom-toggle-slider rounded-circle" />
                    </label>
                  </Col>
                </Row>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="8">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-city"
                        >
                          Link
                        </label>
                        <Input
                          className="form-control-alternative"
                          disabled={!this.state.apiEnabled}
                          value="flowi.com/api/mnist/v1/prediction"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
                <hr className="my-4" />
                {/* Offline */}
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="heading-small text-muted mb-0">Offline</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <label className="custom-toggle">
                      <input
                      checked={this.state.batchEnabled}
                      onChange={this.changeBatchEnabled}
                      type="checkbox" />
                      <span className="custom-toggle-slider rounded-circle" />
                    </label>
                  </Col>
                </Row>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="8">
                      <FormGroup>
                      <label
                          className="form-control-label"
                          htmlFor="input-city"
                        >
                          Cron
                        </label>
                        <InputGroup className="input-group-alternative mb-4">
                          <Input placeholder="0 0 * * *" type="text" onChange={this.changeBatchScheduleInterval} disabled={!this.state.batchEnabled}/>
                        </InputGroup>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                      <label
                          className="form-control-label"
                          htmlFor="input-city"
                        >
                          Input Data
                        </label>
                        <Input
                          className="form-control-alternative"
                          // id={input_id}
                          defaultValue={this.getLoadOptions()[0]}
                          // onChange={this.changeText}
                          type="select">
                          {this.getLoadOptions()}
                        </Input>
                        {/* <InputGroup className="input-group-alternative mb-4">
                          <Input placeholder="s3://flowi/mnist.csv" type="text" />
                          <InputGroupAddon addonType="append">
                            <InputGroupText>
                              <i className="ni ni-collection" />
                            </InputGroupText>
                          </InputGroupAddon>
                        </InputGroup> */}
                        {/* <ComponentsList componentsNodes={LoadNodes}/> */}
                        {/* let nodeName = this.props.node.properties.name + 'Details';
                        const TagName = this.nodeComponents[nodeType][nodeName]; */}
                        <Card>
                          <CardBody>
                            {this.renderLoadComponent()}
                          </CardBody>
                        </Card>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="8">
                      <FormGroup>
                      <label
                          className="form-control-label"
                          htmlFor="input-city"
                        >
                          Output Data
                        </label>
                        <Input
                          className="form-control-alternative"
                          // id={input_id}
                          defaultValue={this.getSaveOptions()[0]}
                          // onChange={this.changeText}
                          type="select">
                          {this.getSaveOptions()}
                        </Input>
                        <Card>
                          <CardBody>
                            {this.renderSaveComponent()}
                          </CardBody>
                        </Card>

                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
        <Col lg="6" xl="3">
          <Card className="bg-secondary shadow">
            <CardBody>
              <Row>

                <div className="col">
                  <CardTitle className="h1 text-uppercase text-muted mb-0">
                    V1
                  </CardTitle>
                  <span className="p mb-0">Production Version</span>
                  <br/>
                  <span className="p mb-0"><i>Today at 10:00 AM</i></span>
                </div>
                <Col className="col-auto">
                  <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                    <i className="ni ni-sound-wave" />
                  </div>
                </Col>
              </Row>
              <p className="mt-3 mb-0 text-muted text-sm">
                <span className="text-nowrap">current version</span>
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
    )
  }
}


Deploy = connect(mapStateToProps, mapDispatchToProps, null, {forwardRef: true})(Deploy);
export default Deploy;
