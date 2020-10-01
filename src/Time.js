import React, { Component } from "react";
import { Card } from "react-bootstrap";

class Time extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    setInterval(() => {
        this.setState({
            time: new Date().toLocaleTimeString()
        });
    }, 1000);
  }

  render() {
    return (
      <>
        <Card style={{ width: "15rem", margin: 20 }}>
          <Card.Header as="h3">The Time</Card.Header>
          <Card.Body as="h2">{this.state.time}</Card.Body>
        </Card>
      </>
    );
  }
}
export default Time;
