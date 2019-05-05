import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from 'reactstrap';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

class Modals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      large: false,
      small: false,
      primary: false,
      success: false,
      warning: false,
      danger: false,
      info: false,
    };

    this.toggle = this.toggle.bind(this);
    this.toggleLarge = this.toggleLarge.bind(this);
    this.toggleSmall = this.toggleSmall.bind(this);
    this.togglePrimary = this.togglePrimary.bind(this);
    this.toggleSuccess = this.toggleSuccess.bind(this);
    this.toggleWarning = this.toggleWarning.bind(this);
    this.toggleDanger = this.toggleDanger.bind(this);
    this.toggleInfo = this.toggleInfo.bind(this);
  }

  toggle() {
    this.setState(previousState => ({
      modal: !previousState.modal,
    }));
  }

  toggleLarge() {
    this.setState(previousState => ({
      large: !previousState.large,
    }));
  }

  toggleSmall() {
    this.setState(previousState => ({
      small: !previousState.small,
    }));
  }

  togglePrimary() {
    this.setState(previousState => ({
      primary: !previousState.primary,
    }));
  }

  toggleSuccess() {
    this.setState(previousState => ({
      success: !previousState.success,
    }));
  }

  toggleWarning() {
    this.setState(previousState => ({
      warning: !previousState.warning,
    }));
  }

  toggleDanger() {
    this.setState(previousState => ({
      danger: !previousState.danger,
    }));
  }

  toggleInfo() {
    this.setState(previousState => ({
      info: !previousState.info,
    }));
  }

  render() {
    const { className } = this.props;
    const {
      modal,
      large,
      small,
      primary,
      success,
      warning,
      danger,
      info,
    } = this.state;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" />
                {' '}
                Bootstrap Modals
              </CardHeader>
              <CardBody>
                <Button onClick={this.toggle} className="mr-1">Launch demo modal</Button>
                <Modal
                  isOpen={modal}
                  toggle={this.toggle}
                  className={className}
                >
                  <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Do Something</Button>
                    {' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>

                <Button onClick={this.toggleLarge} className="mr-1">Launch large modal</Button>
                <Modal
                  isOpen={large}
                  toggle={this.toggleLarge}
                  className={`modal-lg ${className}`}
                >
                  <ModalHeader toggle={this.toggleLarge}>Modal title</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggleLarge}>Do Something</Button>
                    {' '}
                    <Button color="secondary" onClick={this.toggleLarge}>Cancel</Button>
                  </ModalFooter>
                </Modal>

                <Button onClick={this.toggleSmall} className="mr-1">Launch small modal</Button>
                <Modal
                  isOpen={small}
                  toggle={this.toggleSmall}
                  className={`modal-sm ${className}`}
                >
                  <ModalHeader toggle={this.toggleSmall}>Modal title</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggleSmall}>Do Something</Button>
                    {' '}
                    <Button color="secondary" onClick={this.toggleSmall}>Cancel</Button>
                  </ModalFooter>
                </Modal>

                <hr />

                <Button color="primary" onClick={this.togglePrimary} className="mr-1">
Primary
                  modal
                </Button>
                <Modal
                  isOpen={primary}
                  toggle={this.togglePrimary}
                  className={`modal-primary ${className}`}
                >
                  <ModalHeader toggle={this.togglePrimary}>Modal title</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.togglePrimary}>Do Something</Button>
                    {' '}
                    <Button color="secondary" onClick={this.togglePrimary}>Cancel</Button>
                  </ModalFooter>
                </Modal>

                <Button color="success" onClick={this.toggleSuccess} className="mr-1">
Success
                  modal
                </Button>
                <Modal
                  isOpen={success}
                  toggle={this.toggleSuccess}
                  className={`modal-success ${className}`}
                >
                  <ModalHeader toggle={this.toggleSuccess}>Modal title</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="success" onClick={this.toggleSuccess}>Do Something</Button>
                    {' '}
                    <Button color="secondary" onClick={this.toggleSuccess}>Cancel</Button>
                  </ModalFooter>
                </Modal>

                <Button color="warning" onClick={this.toggleWarning} className="mr-1">
Warning
                  modal
                </Button>
                <Modal
                  isOpen={warning}
                  toggle={this.toggleWarning}
                  className={`modal-warning ${className}`}
                >
                  <ModalHeader toggle={this.toggleWarning}>Modal title</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="warning" onClick={this.toggleWarning}>Do Something</Button>
                    {' '}
                    <Button color="secondary" onClick={this.toggleWarning}>Cancel</Button>
                  </ModalFooter>
                </Modal>

                <Button color="danger" onClick={this.toggleDanger} className="mr-1">
Danger
                  modal
                </Button>
                <Modal
                  isOpen={danger}
                  toggle={this.toggleDanger}
                  className={`modal-danger ${className}`}
                >
                  <ModalHeader toggle={this.toggleDanger}>Modal title</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" onClick={this.toggleDanger}>Do Something</Button>
                    {' '}
                    <Button color="secondary" onClick={this.toggleDanger}>Cancel</Button>
                  </ModalFooter>
                </Modal>

                <Button color="info" onClick={this.toggleInfo} className="mr-1">Info modal</Button>
                <Modal
                  isOpen={info}
                  toggle={this.toggleInfo}
                  className={`modal-info ${className}`}
                >
                  <ModalHeader toggle={this.toggleInfo}>Modal title</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggleInfo}>Do Something</Button>
                    {' '}
                    <Button color="secondary" onClick={this.toggleInfo}>Cancel</Button>
                  </ModalFooter>
                </Modal>

              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

Modals.propTypes = propTypes;
Modals.defaultProps = defaultProps;

export default Modals;
