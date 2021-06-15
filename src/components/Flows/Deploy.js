import * as React from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";
import Select from 'react-select';


const mapStateToProps = state => {
  return {trainingChart: state.trainingChart}
}

const options = [
  { value: 'precision', label: 'precision' },
  { value: 'accuracy', label: 'accuracy' },
  { value: 'false positive rate', label: 'false positive rate' }
]

const experimentation_options = [
  { value: 'mlflow', label: 'mlflow' },
  { value: 'polyaxon', label: 'polyaxon' },
]

export class ExternalReactState extends React.Component {

      
  
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
                        <Select className="form-control-alternative" defaultValue={options[0]} options={options}
                                isSearchable={true}
                                isMulti={true}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                          Threashold
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
                      <input defaultChecked type="checkbox" />
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
                          disabled
                          placeholder="flowi.com/api/mnist/v1/prediction"
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
                      <input defaultChecked type="checkbox" />
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
                          <Input placeholder="0 0 * * *" type="text" />
                          <InputGroupAddon addonType="append">
                            <InputGroupText>
                              <i className="ni ni-calendar-grid-58" />
                            </InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
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
                          Input Data
                        </label>
                        <InputGroup className="input-group-alternative mb-4">
                          <Input placeholder="s3://flowi/mnist.csv" type="text" />
                          <InputGroupAddon addonType="append">
                            <InputGroupText>
                              <i className="ni ni-collection" />
                            </InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
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
                        <InputGroup className="input-group-alternative mb-4">
                          <Input placeholder="s3://flowi/mnist-out.csv" type="text" />
                          <InputGroupAddon addonType="append">
                            <InputGroupText>
                              <i className="ni ni-book-bookmark" />
                            </InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
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
                  <span class="p mb-0"><i>Today at 10:00 AM</i></span>
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
ExternalReactState = connect(mapStateToProps)(ExternalReactState)
export default ExternalReactState;
