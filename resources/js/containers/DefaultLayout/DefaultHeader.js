import React from 'react';
import {
  NavLink,
} from 'react-router-dom';
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
} from 'reactstrap';
import PropTypes from 'prop-types';

import {
  AppAsideToggler,
  AppHeaderDropdown,
  AppNavbarBrand,
  AppSidebarToggler,
} from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg';
import sygnet from '../../assets/img/brand/sygnet.svg';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = { children: React.createElement('div') };

const DefaultHeader = (props) => {
  // eslint-disable-next-line
  const { children, onLogout, ...attributes } = props;

  return (
    <React.Fragment>
      <AppSidebarToggler className="d-lg-none" display="md" mobile />
      <AppNavbarBrand
        full={{
          src: logo,
          width: 89,
          height: 25,
          alt: 'CoreUI Logo',
        }}
        minimized={{
          src: sygnet,
          width: 30,
          height: 30,
          alt: 'CoreUI Logo',
        }}
      />
      <AppSidebarToggler className="d-md-down-none" display="lg" />

      <Nav className="ml-auto" navbar>
        <NavItem className="d-md-down-none">
          <NavLink to="#" className="nav-link">
            <i className="icon-bell" />
            <Badge pill color="danger">5</Badge>
          </NavLink>
        </NavItem>
        <AppHeaderDropdown direction="down">
          <DropdownToggle nav>
            <img src="/img/avatars/6.jpg" className="img-avatar" alt="admin@bootstrapmaster.com" />
          </DropdownToggle>
          <DropdownMenu right style={{ right: 'auto' }}>
            <DropdownItem
              header
              tag="div"
              className="text-center"
            >
              <strong>Account</strong>
            </DropdownItem>
            <DropdownItem>
              <i className="fa fa-bell-o" />
              {' '}
              Updates
              <Badge color="info">42</Badge>
            </DropdownItem>
            <DropdownItem>
              <i className="fa fa-envelope-o" />
              {' '}
              Messages
              <Badge color="success">42</Badge>
            </DropdownItem>
            <DropdownItem>
              <i className="fa fa-tasks" />
              {' '}
              Tasks
              <Badge color="danger">42</Badge>
            </DropdownItem>
            <DropdownItem>
              <i className="fa fa-comments" />
              {' '}
              Comments
              <Badge color="warning">42</Badge>
            </DropdownItem>
            <DropdownItem
              header
              tag="div"
              className="text-center"
            >
              <strong>Settings</strong>
            </DropdownItem>
            <DropdownItem>
              <i className="fa fa-user" />
              {' '}
              Profile
            </DropdownItem>
            <DropdownItem>
              <i className="fa fa-wrench" />
              {' '}
              Settings
            </DropdownItem>
            <DropdownItem>
              <i className="fa fa-usd" />
              {' '}
              Payments
              <Badge color="secondary">42</Badge>
            </DropdownItem>
            <DropdownItem>
              <i className="fa fa-file" />
              {' '}
              Projects
              <Badge color="primary">42</Badge>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              <i className="fa fa-shield" />
              {' '}
              Lock Account
            </DropdownItem>
            <DropdownItem onClick={e => onLogout(e)}>
              <i className="fa fa-lock" />
              {' '}
              Logout
            </DropdownItem>
          </DropdownMenu>
        </AppHeaderDropdown>
      </Nav>
      <AppAsideToggler className="d-md-down-none" />
      {/* <AppAsideToggler className="d-lg-none" mobile /> */}
    </React.Fragment>
  );
};

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
