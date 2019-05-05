import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Tooltip,
  UncontrolledTooltip,
} from 'reactstrap';
import TooltipItem from '../../../components/TooltipItem';

class Tooltips extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: [false, false],
      tooltips: [
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

  toggle(i) {
    this.setState((previousState) => {
      const newArray = previousState.tooltipOpen.map((element, index) => (
        index === i ? !element : false
      ));
      return { tooltipOpen: newArray };
    });
  }

  render() {
    const { tooltips, tooltipOpen } = this.state;
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify" />
            <strong>Tooltips</strong>
            <div className="card-header-actions">
              <a
                href="https://reactstrap.github.io/components/tooltips/"
                rel="noreferrer noopener"
                target="_blank"
                className="card-header-action"
              >
                <small className="text-muted">docs</small>
              </a>
            </div>
          </CardHeader>
          <CardBody>
            {/* eslint-disable-next-line */}
            <p>Somewhere in here is a <a href="#" id="TooltipExample">tooltip</a>.</p>
            <Tooltip
              placement="right"
              isOpen={tooltipOpen[0]}
              target="TooltipExample"
              toggle={() => {
                this.toggle(0);
              }}
            >
              Hello world!
            </Tooltip>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify" />
            <strong>Tooltip</strong>
            <small> disable autohide</small>
          </CardHeader>
          <CardBody>
            {/* eslint-disable-next-line */}
            <p>Sometimes you need to allow users to select text within a <a href="#" id="DisabledAutoHideExample">tooltip</a>.
            </p>
            <Tooltip
              placement="top"
              isOpen={tooltipOpen[1]}
              autohide={false}
              target="DisabledAutoHideExample"
              toggle={() => {
                this.toggle(1);
              }}
            >
              Try to select this text!
            </Tooltip>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify" />
            <strong>Tooltip</strong>
            <small> list</small>
          </CardHeader>
          <CardBody>
            {tooltips.map(
              tooltip => <TooltipItem key={tooltip.id} item={tooltip} id={tooltip.id} />,
            )}
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify" />
            <strong>Tooltip</strong>
            <small> uncontrolled</small>
          </CardHeader>
          <CardBody>
            {/* eslint-disable-next-line */}
            <p>Somewhere in here is a <a href="#" id="UncontrolledTooltipExample">tooltip</a>.</p>
            <UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
              Hello world!
            </UncontrolledTooltip>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Tooltips;
