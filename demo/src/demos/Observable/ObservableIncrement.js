import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Observable } from 'rxjs';
import Highlight from 'react-highlight';
import sourceCode from '!!raw-loader!../../../../code/observables/dom-events/dom-events-1';

export default class ObservableIncrement extends Component {
  componentDidMount() {
    const incrementEl = document.getElementById('increment');
    const counterEl = document.getElementById('counter');

    const source = Observable.fromEvent(incrementEl, 'click')
      .mapTo(1)
      .scan((acc, curr) => acc + curr);

    this.subscription = source.subscribe((counter) => {
      counterEl.innerHTML = counter;
    });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    return (
      <Row>
        <Col xs={7}>
          <Highlight className="javascript">
            {sourceCode}
          </Highlight>
        </Col>

        <Col xs={5}>
          <p id="counter">0</p>

          <button id="increment">
            Increment
          </button>
        </Col>
      </Row>
    );
  }
}
