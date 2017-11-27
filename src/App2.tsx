import * as React from 'react';
import './App.css';
declare var ScaleDrone: any;
var drone = new ScaleDrone('ALx3kB8B7oGM8cod');

import Button from './classes/Button';
import ButtonLoggerDecorator from './classes/ButtonActionDecorators/ButtonLoggerDecorator';

let button1 = new Button('a');
let buttonLoggerDecorator = new ButtonLoggerDecorator(button1);

buttonLoggerDecorator.pressDown();


drone.on('open', (error:any) => {
  // Subscribe after the 'open' or 'authenticate' event
  var room = drone.subscribe('room_name');
  room.on('open', (error:any) => {
    if (error) return console.error(error);
    // Connected to room
    // You can access room name using 'room.name'
  });
  room.on('data', (data:any, error:any) => {
    // Received data from room
    console.log('data', data)
  });
  drone.publish({
    room: 'room_name',
    message: {hello: 'world'}
  });
});

class App extends React.Component {
  state: {
    value: ''
  }
  constructor(props:any) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event:any) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event:any) {
    event.preventDefault();
    drone.publish({
      room: 'room_name',
      message: this.state.value
    });
  }

  render() {
    return (
      <div className="App">
    <form onSubmit={this.handleSubmit}>
      <textarea id="incoming" value={this.state.value} onChange={this.handleChange} ></textarea>
      <button type="submit">submit</button>
    </form>
    <pre id="outgoing"></pre>
      </div>
    );
  }
}

export default App;
