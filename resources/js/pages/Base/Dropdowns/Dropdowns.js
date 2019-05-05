import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledDropdown,
} from 'reactstrap';

class Dropdowns extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: new Array(6).fill(false),
    };
  }

  toggle(i) {
    this.setState((previousState) => {
      const newArray = previousState.dropdownOpen.map((element, index) => (
        index === i ? !element : false
      ));
      return { dropdownOpen: newArray };
    });
  }

  render() {
    const { dropdownOpen } = this.state;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" />
                <strong>Dropdowns</strong>
                <div className="card-header-actions">
                  <a
                    href="https://reactstrap.github.io/components/dropdowns/"
                    rel="noreferrer noopener"
                    target="_blank"
                    className="card-header-action"
                  >
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <Dropdown
                  isOpen={dropdownOpen[0]}
                  toggle={() => {
                    this.toggle(0);
                  }}
                >
                  <DropdownToggle caret>
                    Dropdown
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" />
                <strong>Dropdowns</strong>
                <small> alignment</small>
              </CardHeader>
              <CardBody>
                <Dropdown
                  isOpen={dropdownOpen[1]}
                  toggle={() => {
                    this.toggle(1);
                  }}
                >
                  <DropdownToggle caret>
                    This dropdown&apos;s menu is right-aligned
                  </DropdownToggle>
                  <DropdownMenu right style={{ right: 'auto' }}>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" />
                <strong>Dropdowns</strong>
                <small> sizing</small>
              </CardHeader>
              <CardBody>
                <Dropdown
                  isOpen={dropdownOpen[2]}
                  toggle={() => {
                    this.toggle(2);
                  }}
                  size="lg"
                  className="mb-3"
                >
                  <DropdownToggle caret>
                    Large Dropdown
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown
                  isOpen={dropdownOpen[3]}
                  toggle={() => {
                    this.toggle(3);
                  }}
                  className="mb-3"
                >
                  <DropdownToggle caret>
                    Normal Dropdown
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown
                  isOpen={dropdownOpen[4]}
                  toggle={() => {
                    this.toggle(4);
                  }}
                  size="sm"
                >
                  <DropdownToggle caret>
                    Small Dropdown
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" />
                <strong>Custom Dropdowns</strong>
              </CardHeader>
              <CardBody>
                <Dropdown
                  isOpen={dropdownOpen[5]}
                  toggle={() => {
                    this.toggle(5);
                  }}
                >
                  <DropdownToggle
                    tag="span"
                    onClick={() => {
                      this.toggle(5);
                    }}
                    data-toggle="dropdown"
                    aria-expanded={dropdownOpen[5]}
                  >
                    Custom Dropdown Content
                    {' '}
                    <strong> * </strong>
                  </DropdownToggle>
                  <DropdownMenu>
                    { /* eslint-disable-next-line */ }
                    <div
                      className="dropdown-item"
                      onClick={() => {
                        this.toggle(5);
                      }}
                    >
Custom dropdown item 1
                    </div>
                    { /* eslint-disable-next-line */ }
                    <div
                      className="dropdown-item"
                      onClick={() => {
                        this.toggle(5);
                      }}
                    >
Custom dropdown item 2
                    </div>
                    { /* eslint-disable-next-line */ }
                    <div
                      className="dropdown-item-text"
                      onClick={() => {
                        this.toggle(5);
                      }}
                    >
Custom dropdown text 3
                    </div>
                    <hr className="my-0 dropdown-item-text" />
                    { /* eslint-disable-next-line */ }
                    <div
                      role="menuitem"
                      tabIndex={0}
                      onClick={() => {
                        this.toggle(5);
                      }}
                    >
Custom dropdown item 4
                    </div>
                  </DropdownMenu>
                </Dropdown>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" />
                <strong>Uncontrolled Dropdown</strong>
              </CardHeader>
              <CardBody>
                <UncontrolledDropdown>
                  <DropdownToggle caret>
                    Uncontrolled Dropdown
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dropdowns;
