import React, { Component } from 'react';
import {
  Badge, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane,
} from 'reactstrap';
import classnames from 'classnames';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, '
  + 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim '
  + 'ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex '
  + 'ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate '
  + 'velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat '
  + 'cupidatat non proident, sunt in culpa qui officia deserunt mollit.';

const tabPaneContent = (
  <>
    <TabPane tabId="1">
      {`1. ${lorem}`}
    </TabPane>
    <TabPane tabId="2">
      {`2. ${lorem}`}
    </TabPane>
    <TabPane tabId="3">
      {`3. ${lorem}`}
    </TabPane>
  </>
);

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: new Array(4).fill('1'),
    };
  }

  toggle(tabPane, tab) {
    this.setState((previousState) => {
      const newArray = previousState.activeTab.slice();
      newArray[tabPane] = tab;
      return { activeTab: newArray };
    });
  }

  render() {
    const { activeTab } = this.state;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="6" className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={activeTab[0] === '1'}
                  onClick={() => {
                    this.toggle(0, '1');
                  }}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={activeTab[0] === '2'}
                  onClick={() => {
                    this.toggle(0, '2');
                  }}
                >
                  Profile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={activeTab[0] === '3'}
                  onClick={() => {
                    this.toggle(0, '3');
                  }}
                >
                  Messages
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab[0]}>
              {tabPaneContent}
            </TabContent>
          </Col>
          <Col xs="12" md="6" className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={activeTab[1] === '1'}
                  onClick={() => {
                    this.toggle(1, '1');
                  }}
                >
                  <i className="icon-calculator" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={activeTab[1] === '2'}
                  onClick={() => {
                    this.toggle(1, '2');
                  }}
                >
                  <i className="icon-basket-loaded" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={activeTab[1] === '3'}
                  onClick={() => {
                    this.toggle(1, '3');
                  }}
                >
                  <i className="icon-pie-chart" />
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab[1]}>
              {tabPaneContent}
            </TabContent>
          </Col>
          <Col xs="12" md="6" className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={activeTab[2] === '1'}
                  onClick={() => {
                    this.toggle(2, '1');
                  }}
                >
                  <i className="icon-calculator" />
                  {' '}
                  <span className={activeTab[2] === '1' ? '' : 'd-none'}> Calculator</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={activeTab[2] === '2'}
                  onClick={() => {
                    this.toggle(2, '2');
                  }}
                >
                  <i className="icon-basket-loaded" />
                  {' '}
                  <span
                    className={activeTab[2] === '2' ? '' : 'd-none'}
                  >
                    {' '}
                    Shopping cart
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab[2] === '3' })}
                  onClick={() => {
                    this.toggle(2, '3');
                  }}
                >
                  <i className="icon-pie-chart" />
                  {' '}
                  <span className={activeTab[2] === '3' ? '' : 'd-none'}> Charts</span>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab[2]}>
              {tabPaneContent}
            </TabContent>
          </Col>
          <Col xs="12" md="6" className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={activeTab[3] === '1'}
                  onClick={() => {
                    this.toggle(3, '1');
                  }}
                >
                  <i className="icon-calculator" />
                  <span className={activeTab[3] === '1' ? '' : 'd-none'}> Calc</span>
                  {'\u00A0'}
                  <Badge color="success">New</Badge>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={activeTab[3] === '2'}
                  onClick={() => {
                    this.toggle(3, '2');
                  }}
                >
                  <i className="icon-basket-loaded" />
                  <span className={activeTab[3] === '2' ? '' : 'd-none'}> Cart</span>
                  {'\u00A0'}
                  <Badge pill color="danger">29</Badge>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={activeTab[3] === '3'}
                  onClick={() => {
                    this.toggle(3, '3');
                  }}
                >
                  <i className="icon-pie-chart" />
                  <span className={activeTab[3] === '3' ? '' : 'd-none'}> Charts</span>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab[3]}>
              {tabPaneContent}
            </TabContent>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Tabs;
