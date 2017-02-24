import React, { Component } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Highlight from 'react-highlight';
import classNames from 'classnames';
import resourceTimer from './resourceTimer';
import * as statuses from './statuses';
import * as runners from './runners';
import * as util from './util';
import * as styles from './style.css';

export default class Async extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: statuses.READY,
      infoLog: [],
    };
  }

  async run({ type, status, doneStatus, runner }) {
    this.setState({
      status,
      infoLog: [],
    });

    await util.time(
      type,
      this.log,
      () => runner(resourceTimer.generateResources(type), this.log),
    );

    this.setState({ status: doneStatus });
  }

  runSequential = () => {
    this.run({
      type: 'sequential',
      status: statuses.RUNNING_SEQUENTIAL,
      doneStatus: statuses.DONE_SEQUENTIAL,
      runner: runners.sequential,
    });
  }

  runParallel = () => {
    this.run({
      type: 'parallel',
      status: statuses.RUNNING_PARALLEL,
      doneStatus: statuses.DONE_PARALLEL,
      runner: runners.parallel,
    });
  }

  log = (value) => {
    this.setState(prevState => ({
      infoLog: prevState.infoLog.concat(value),
    }));
  }

  render() {
    const { status, infoLog } = this.state;
    const isRunning = statuses.isRunning(status);

    const sequentialClassName = classNames({
      hidden: !statuses.isRunningSequential(status) && !statuses.isDoneSequential(status),
    });

    const parallelClassName = classNames({
      hidden: !statuses.isRunningParallel(status) && !statuses.isDoneParallel(status),
    });

    return (
      <Row>
        <Col xs={6}>
          <h2>Async Function Timing:<br />Sequential vs. Parallel</h2>

          <p>
            <Button
              disabled={isRunning}
              onClick={this.runSequential}
            >
              Run Sequentially
            </Button>
          </p>

          <p>
            <Button
              disabled={isRunning}
              onClick={this.runParallel}
            >
              Run in Parallel
            </Button>
          </p>

          <div className={sequentialClassName}>
            <Highlight className="javascript">
              {`async function printOrders(orderIds) {
  for (const id of orderIds) {
    const order = await fetchOrder(id);
    console.log(order);
  }
}`}
            </Highlight>
          </div>

          <div className={parallelClassName}>
            <Highlight className="javascript">
              {`async function printOrders(orderIds) {
  const orders = await Promise.all(
    orderIds.map(fetchOrder)
  );

  orders.forEach(order => {
    console.log(order)
  });
}`}
            </Highlight>
          </div>
        </Col>

        <Col xs={6}>
          <h2>Results:</h2>

          <pre className={styles.infoLog}>
            {infoLog.join('\n')}
          </pre>
        </Col>
      </Row>
    );
  }
}
