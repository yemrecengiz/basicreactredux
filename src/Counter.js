import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

class Counter extends Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };

  render() {
    return (
      <>
        <Card style={{ width: "14rem", margin: 20 }}>
          <Card.Header as="h3">Counter</Card.Header>
          <Card.Body>
            <Container>
              <Row>
                <Col>
                  <Button variant="danger" onClick={this.decrement}>
                    -
                  </Button>
                </Col>
                <Col >
                  <Card.Text as="h3">{this.props.count}</Card.Text>
                </Col>
                <Col>
                  <Button variant="success" onClick={this.increment}>
                    +
                  </Button>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}
export default connect(mapStateToProps)(Counter);
