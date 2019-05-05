import React from 'react';
import { Link } from 'react-router-dom';
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
} from 'reactstrap';

import usersData from './UsersData';

function UserRow(userData) {
  const { user } = userData;
  const userLink = `/users/${user.id}`;

  const getBadge = (status) => {
    let badgeState = '';
    switch (status) {
    case 'Active':
      badgeState = 'success';
      break;
    case 'Inactive':
      badgeState = 'secondary';
      break;
    case 'Pending':
      badgeState = 'warning';
      break;
    case 'Banned':
      badgeState = 'danger';
      break;
    default:
      badgeState = 'primary';
      break;
    }
    return badgeState;
  };


  return (
    <tr key={user.id.toString()}>
      <th scope="row"><Link to={userLink}>{user.id}</Link></th>
      <td><Link to={userLink}>{user.name}</Link></td>
      <td>{user.registered}</td>
      <td>{user.role}</td>
      <td><Link to={userLink}><Badge color={getBadge(user.status)}>{user.status}</Badge></Link></td>
    </tr>
  );
}

const Users = () => {
  const userList = usersData.filter(user => user.id < 10);

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xl={6}>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify" />
              {' '}
              Users
              {' '}
              <small className="text-muted">example</small>
            </CardHeader>
            <CardBody>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">registered</th>
                    <th scope="col">role</th>
                    <th scope="col">status</th>
                  </tr>
                </thead>
                <tbody>
                  {userList.map(user => <UserRow key={user.id} user={user} />)}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Users;
