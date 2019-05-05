import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Popover,
  PopoverBody,
  PopoverHeader,
} from 'reactstrap';
import PopoverItem from '../../../components/PopoverItem';

class Popovers extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false,
      popovers: [
        {
          id: 1,
          placement: 'top',
          text: 'Top',
        },
        {
          id: 2,
          placement: 'bottom',
          text: 'Bottom',
        },
        {
          id: 3,
          placement: 'left',
          text: 'Left',
        },
        {
          id: 4,
          placement: 'right',
          text: 'Right',
        },
      ],
    };
  }

  toggle() {
    this.setState(previousState => ({
      popoverOpen: !previousState.popoverOpen,
    }));
  }

  render() {
    const { popovers, popoverOpen } = this.state;
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify" />
            <strong>Popovers</strong>
            <div className="card-header-actions">
              <a
                href="https://reactstrap.github.io/components/popovers/"
                rel="noreferrer noopener"
                target="_blank"
                className="card-header-action"
              >
                <small className="text-muted">docs</small>
              </a>
            </div>
          </CardHeader>
          <CardBody>
            <Button id="Popover1" onClick={this.toggle}>
              Launch Popover
            </Button>
            <Popover
              placement="bottom"
              isOpen={popoverOpen}
              target="Popover1"
              toggle={this.toggle}
            >
              <PopoverHeader>Popover Title</PopoverHeader>
              <PopoverBody>
Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque
                ornare sem lacinia quam venenatis vestibulum.
              </PopoverBody>
            </Popover>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify" />
            <strong>Popovers</strong>
            <small> list</small>
          </CardHeader>
          <CardBody>
            {popovers.map(popover => (
              <PopoverItem key={popover.id} item={popover} id={popover.id} />
            ))}
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Popovers;
