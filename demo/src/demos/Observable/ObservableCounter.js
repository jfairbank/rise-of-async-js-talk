import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Observable } from 'rxjs';
import Highlight from 'react-highlight';
import sourceCode from '!!raw-loader!../../../../code/observables/dom-events/dom-events-2';

export default class ObservableCounter extends Component {
  componentDidMount() {
    const incrementBtn = document.getElementById('increment');
    const decrementBtn = document.getElementById('decrement');
    const counterEl = document.getElementById('counter');

    const source = Observable.merge(
      Observable.fromEvent(incrementBtn, 'click').mapTo(1),
      Observable.fromEvent(decrementBtn, 'click').mapTo(-1),
    );

    const counterSource = source
      .scan((acc, curr) => acc + curr);

    this.subscription = counterSource.subscribe((counter) => {
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

          {' '}

          <button id="decrement">
            Decrement
          </button>
        </Col>
      </Row>
    );
  }
}
