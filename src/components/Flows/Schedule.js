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
              <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="heading-small text-muted mb-0">Model Training Schedule</h3>
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
                    <Col lg="6">
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
                    <Col lg="6">
                      <FormGroup>
                      <label
                          className="form-control-label"
                          htmlFor="input-city"
                        >
                        </label>
                        <div className="custom-control custom-checkbox mb-3">
                          <input
                            className="custom-control-input"
                            id="customCheck1"
                            type="checkbox"
                          />
                          <label className="custom-control-label" htmlFor="customCheck1">
                            Trigger mannualy only
                          </label>
                        </div>



                      
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
              <Select className="form-control-alternative" defaultValue={experimentation_options[0]} options={experimentation_options}
                                isSearchable={true}
                                isMulti={false}
                                isClearable={false}
                                allowCreateWhileLoading={false}
                        />
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
