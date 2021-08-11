import * as React from 'react';
import { connect } from 'react-redux';
import { updateSchedule } from 'store/actions/schedule';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";


const mapStateToProps = state => {
  return {schedule: state.schedule}
}

const mapDispatchToProps = dispatch => {
  return {
    updateSchedule: (schedule) => {
      dispatch(updateSchedule(schedule))
    }
  }
}


const experimentationOptions = [
  <option key="mlflow" value='MLflow'>MLflow</option>,
  <option key="polyaxon" value='polyaxon'>Polyaxon</option>
]

export class Schedule extends React.Component {

  constructor(props){
    super(props);

    
    this.state = {
      enabled: this.props.schedule.schedule_interval === "None"
    }
    this.sechedule_interval = this.props.schedule.schedule_interval
    

    this.changeScheduleInterval = this.changeScheduleInterval.bind(this);
    this.changeScheduleIntervalEnabled = this.changeScheduleIntervalEnabled.bind(this);
    this.changeExperimentTracking = this.changeExperimentTracking.bind(this);
  }

  changeScheduleIntervalEnabled(e) {
    let schedule = this.props.schedule;
    let enabled = e.target.checked;
    if (enabled) {
      schedule.schedule_interval = this.sechedule_interval;
    } else {
      schedule.schedule_interval = "None";
    }

    this.props.updateSchedule(schedule)
    this.setState({ enabled: enabled })    
  }

  changeScheduleInterval(e) {
    let schedule = this.props.schedule;
    schedule.schedule_interval = e.target.value;
    
    this.sechedule_interval =  schedule.schedule_interval;
    this.props.updateSchedule(schedule)
  }

  changeExperimentTracking(e) {
    let schedule = this.props.schedule;
    schedule.experiment_tracking = e.target.value
    this.props.updateSchedule(schedule)
  }
  
  render () {
    

    return (
      <>
      <Row>
        <Col lg="6" xl="9">
          <Card className="bg-secondary shadow">
            <CardBody>
              <Form>
              <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="heading-small text-muted mb-0">Model Training Schedule</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <label className="custom-toggle">
                      <input
                      checked={this.state.enabled}
                      onChange={this.changeScheduleIntervalEnabled}
                      type="checkbox"/>
                      <span className="custom-toggle-slider rounded-circle" />
                    </label>
                  </Col>
                </Row>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="6">
                    <FormGroup>
                      <label
                          className="form-control-label"
                          htmlFor="input-city"
                        >
                          Cron
                        </label>
                        <InputGroup className="input-group-alternative mb-4">
                          <Input placeholder="0 0 * * *" type="text" onChange={this.changeScheduleInterval} disabled={!this.state.enabled}/>
                          <InputGroupAddon addonType="append">
                            <InputGroupText>
                              <i className="ni ni-calendar-grid-58" />
                            </InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    
                  </Row>
                </div>
                {/* <hr className="my-4" /> */}
              </Form>
            </CardBody>
          </Card>
        </Col>
        <Col lg="6" xl="3">
          <Card className="bg-secondary shadow">
            <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                <Col xs="8">
                  <h3 className="mb-0">Experimentation</h3>
                </Col>
                <Col className="text-right" xs="4">
                  <Button
                    color="primary"
                    href="#"
                    onClick={e => e.preventDefault()}
                    size="sm"
                  >
                    Save
                  </Button>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Input
                className="form-control-alternative"
                // id={input_id}
                defaultValue={this.props.schedule.experiment_tracking}
                onChange={this.changeExperimentTracking}
                type='select'
              >
              {experimentationOptions}
              </Input>
              {/* <Select className="form-control-alternative" defaultValue={experimentation_options[0]} options={experimentation_options}
                                isSearchable={true}
                                isMulti={false}
                                isClearable={false}
                                allowCreateWhileLoading={false}
                        /> */}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
    )
  }
}

Schedule = connect(mapStateToProps, mapDispatchToProps, null, {forwardRef: true})(Schedule);
export default Schedule;
