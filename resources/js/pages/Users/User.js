import React from 'react';
import {
  Card, CardBody, CardHeader, Col, Row, Table,
} from 'reactstrap';
import PropTypes from 'prop-types';

import usersData from './UsersData';

const propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
};

const defaultProps = {
  match: {
    params: {
      id: null,
    },
  },
};

const User = (props) => {
  const { match } = props;
  const user = usersData.find(userInfo => userInfo.id.toString() === match.params.id);

  const userDetails = user ? Object.entries(user) : [['id', (
    <span>
      <i className="text-muted icon-ban" />
      {' '}
      Not found
    </span>)]];

  return (
    <div className="animated fadeIn">
      <Row>
        <Col lg={6}>
          <Card>
            <CardHeader>
              <strong>
                <i className="icon-info pr-1" />
                User id:
                {' '}
                {match.params.id}
              </strong>
            </CardHeader>
            <CardBody>
              <Table responsive striped hover>
                <tbody>
                  {
                    userDetails.map(([key, value]) => (
                      <tr key={key}>
                        <td>{`${key}:`}</td>
                        <td><strong>{value}</strong></td>
                      </tr>
                    ))
                  }
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

User.propTypes = propTypes;
User.defaultProps = defaultProps;

export default User;
