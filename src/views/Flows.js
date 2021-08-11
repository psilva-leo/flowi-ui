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
import { withRouter } from 'react-router-dom';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardFooter,
  Col,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
  UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";


class Tables extends React.Component {

  constructor(props) {
    super();
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange() {
    let path = '/admin/flows/MNIST';
    this.props.history.push(path);
  }

  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Flows</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="#pablo"
                        // onClick={this.saveChart}
                        size="sm"
                      >
                        New Flow
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Scheduling</th>
                      <th scope="col">Experiments</th>
                      <th scope="col">User</th>
                      <th scope="col">Last run</th>
                      <th scope="col">Active</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <span className="mb-0 text-sm">
                          MNIST
                        </span>
                      </th>
                      <td>
                        <Media className="align-items-center">
                          <a
                            className="avatar avatar-sm rounded-circle mr-3"
                            href="/#"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("assets/img/providers/airflow_white_bg.png")}
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              cron(0 * * * *)
                            </span>
                          </Media>
                        </Media>
                      </td>
                      <td>
                        <Media className="align-items-center">
                          <a
                            style={{width: 36, height: 36, display: "inline-flex"}}
                            href="/#"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("assets/img/providers/polyaxon.png")}
                            />
                          </a>
                        </Media>
                      </td>
                      <td>
                        <div className="avatar-group">
                          <a
                            className="avatar avatar-sm"
                            href="/#"
                            id="tooltip742438047"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              src={require("assets/img/theme/team-1-800x800.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip742438047"
                          >
                            Ryan Tompson
                          </UncontrolledTooltip>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">11/09/2020 20:20:03</span>
                        </div>
                      </td>
                      <td>
                        <label className="custom-toggle">
                          <input defaultChecked type="checkbox" />
                          <span className="custom-toggle-slider rounded-circle" />
                        </label>
                      </td>
                      <td className="text-right">
                        <Button className="btn-icon btn-3" size="sm" color="primary" type="button" onClick={this.routeChange}>
                          <span className="btn-inner--icon">
                            <i className="ni ni-ruler-pencil" />
                          </span>
                          <span className="btn-inner--text">Edit</span>
                        </Button>
                        <Button className="btn-icon btn-3" size="sm" color="primary" type="button">
                          <span className="btn-inner--icon">
                            <i className="ni ni-button-play" />
                          </span>
                          <span className="btn-inner--text">Run</span>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <span className="mb-0 text-sm">
                          Credit Fraud
                        </span>
                      </th>
                      <td>
                        <Media className="align-items-center">
                          <a
                            className="avatar avatar-sm rounded-circle mr-3"
                            href="/#"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("assets/img/providers/airflow_white_bg.png")}
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              cron(0 * * * *)
                            </span>
                          </Media>
                        </Media>
                      </td>
                      <td>
                        <Media className="align-items-center">
                          <a
                            style={{width: 36, height: 36, display: "inline-flex"}}
                            href="/#"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("assets/img/providers/mlflow.jpeg")}
                            />
                          </a>
                        </Media>
                      </td>
                      <td>
                        <div className="avatar-group">
                          <a
                            className="avatar avatar-sm"
                            href="/#"
                            id="tooltip441753266"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              src={require("assets/img/theme/team-2-800x800.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip441753266"
                          >
                            Romina Hadid
                          </UncontrolledTooltip>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">12/09/2020 20:20:03</span>
                        </div>
                      </td>
                      <td>
                        <label className="custom-toggle">
                          <input type="checkbox" />
                          <span className="custom-toggle-slider rounded-circle" />
                        </label>
                      </td>
                      <td className="text-right">
                        <Button className="btn-icon btn-3" size="sm" color="primary" type="button">
                          <span className="btn-inner--icon">
                            <i className="ni ni-ruler-pencil" />
                          </span>
                          <span className="btn-inner--text">Edit</span>
                        </Button>
                        <Button className="btn-icon btn-3" size="sm" color="primary" type="button">
                          <span className="btn-inner--icon">
                            <i className="ni ni-button-play" />
                          </span>
                          <span className="btn-inner--text">Run</span>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <span className="mb-0 text-sm">
                          Cat Classification
                        </span>
                      </th>
                      <td>
                        <Media className="align-items-center">
                          <a
                            className="avatar avatar-sm rounded-circle mr-3"
                            href="/#"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("assets/img/providers/airflow_white_bg.png")}
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              cron(0 * * * *)
                            </span>
                          </Media>
                        </Media>
                      </td>
                      <td>
                        <Media className="align-items-center">
                          <a
                            style={{width: 36, height: 36, display: "inline-flex"}}
                            href="/#"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("assets/img/providers/mlflow.jpeg")}
                            />
                          </a>
                        </Media>
                      </td>
                      <td>
                        <div className="avatar-group">
                          <a
                            className="avatar avatar-sm"
                            href="/#"
                            id="tooltip188462246"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              src={require("assets/img/theme/team-3-800x800.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip188462246"
                          >
                            Alexander Smith
                          </UncontrolledTooltip>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">11/09/2020 20:20:03</span>
                        </div>
                      </td>
                      <td>
                        <label className="custom-toggle">
                          <input type="checkbox" />
                          <span className="custom-toggle-slider rounded-circle" />
                        </label>
                      </td>
                      <td className="text-right">
                        <Button className="btn-icon btn-3" size="sm" color="primary" type="button">
                          <span className="btn-inner--icon">
                            <i className="ni ni-ruler-pencil" />
                          </span>
                          <span className="btn-inner--text">Edit</span>
                        </Button>
                        <Button className="btn-icon btn-3" size="sm" color="primary" type="button">
                          <span className="btn-inner--icon">
                            <i className="ni ni-button-play" />
                          </span>
                          <span className="btn-inner--text">Run</span>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <span className="mb-0 text-sm">
                          Stock Market Time Series
                        </span>
                      </th>
                      <td>
                        <Media className="align-items-center">
                          <a
                            className="avatar avatar-sm rounded-circle mr-3"
                            href="/#"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("assets/img/providers/airflow_white_bg.png")}
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              cron(0 * * * *)
                            </span>
                          </Media>
                        </Media>
                      </td>
                      <td>
                        <Media className="align-items-center">
                          <a
                            style={{width: 36, height: 36, display: "inline-flex"}}
                            href="/#"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("assets/img/providers/polyaxon.png")}
                            />
                          </a>
                        </Media>
                      </td>
                      <td>
                        <div className="avatar-group">
                          <a
                            className="avatar avatar-sm"
                            href="/#"
                            id="tooltip108714769"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              src={require("assets/img/theme/team-4-800x800.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip108714769"
                          >
                            Jessica Doe
                          </UncontrolledTooltip>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">12/09/2020 20:20:03</span>
                        </div>
                      </td>
                      <td>
                        <label className="custom-toggle">
                          <input defaultChecked type="checkbox" />
                          <span className="custom-toggle-slider rounded-circle" />
                        </label>
                      </td>
                      <td className="text-right">
                        <Button className="btn-icon btn-3" size="sm" color="primary" type="button">
                          <span className="btn-inner--icon">
                            <i className="ni ni-ruler-pencil" />
                          </span>
                          <span className="btn-inner--text">Edit</span>
                        </Button>
                        <Button className="btn-icon btn-3" size="sm" color="primary" type="button">
                          <span className="btn-inner--icon">
                            <i className="ni ni-button-play" />
                          </span>
                          <span className="btn-inner--text">Run</span>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <span className="mb-0 text-sm">
                          Audio Classification
                        </span>
                      </th>
                      <td>
                        <Media className="align-items-center">
                          <a
                            className="avatar avatar-sm rounded-circle mr-3"
                            href="/#"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("assets/img/providers/airflow_white_bg.png")}
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              cron(0 * * * *)
                            </span>
                          </Media>
                        </Media>
                      </td>
                      <td>
                      <Media className="align-items-center">
                          <a
                            style={{width: 36, height: 36, display: "inline-flex"}}
                            href="/#"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("assets/img/providers/polyaxon.png")}
                            />
                          </a>
                        </Media>
                      </td>
                      <td>
                        <div className="avatar-group">
                          <a
                            className="avatar avatar-sm"
                            href="/#"
                            id="tooltip757459971"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              className="rounded-circle"
                              src={require("assets/img/theme/team-4-800x800.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip757459971"
                          >
                            Jessica Doe
                          </UncontrolledTooltip>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">12/09/2020 20:20:03</span>
                        </div>
                      </td>
                      <td>
                        <label className="custom-toggle">
                          <input defaultChecked type="checkbox" />
                          <span className="custom-toggle-slider rounded-circle" />
                        </label>
                      </td>
                      <td className="text-right">
                        <Button className="btn-icon btn-3" size="sm" color="primary" type="button">
                          <span className="btn-inner--icon">
                            <i className="ni ni-ruler-pencil" />
                          </span>
                          <span className="btn-inner--text">Edit</span>
                        </Button>
                        <Button className="btn-icon btn-3" size="sm" color="primary" type="button">
                          <span className="btn-inner--icon">
                            <i className="ni ni-button-play" />
                          </span>
                          <span className="btn-inner--text">Run</span>
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="/#"
                          onClick={e => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="/#"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="/#"
                          onClick={e => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="/#"
                          onClick={e => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="/#"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default withRouter(Tables);
