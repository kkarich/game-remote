import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Form, Grid, Button, Input, Segment } from 'semantic-ui-react';
import Player from '../../classes/Player/Player';
import Socket from '../../classes/Socket';
import ControllerConnector from '../../classes/Connectors/ControllerConnector';
import { controllerProxyFactory } from '../../classes/Controller/ControllerFactories';
import GlobalState from '../../classes/State';

class NewGameView extends React.Component<RouteComponentProps<{}>, any> {
  connector: ControllerConnector;
  player: Player;
  constructor(props: RouteComponentProps<{}>) {
    super(props);
    let socket: any = new Socket();
    socket.on('open', () => {
      this.connector = new ControllerConnector(socket);
    });
    this.state = {
      connected: false,
      value: ''
    };
  }

  handleChange(event: any) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: any) {
    this.connector.joinGame(this.state.value).then(() => {
      this.setState({ connected: true });

      this.player = new Player(this.connector, controllerProxyFactory);

    });
  }
  startGame() {
    this.connector.send({
      action: 'start'
    });
    this.connector.on('start', () => {
      GlobalState.set({ 'player': this.player });
      this.props.history.push('/controller');
    });
  }

  renderSection() {
    if (this.state.connected) {
      return <Button onClick={() => { this.startGame(); }} fluid>Start Game</Button>;
    } else {
      return (
        <Form size="large" onSubmit={(e) => this.handleSubmit(e)}>
          <Input id="incoming" value={this.state.value} onChange={(e) => this.handleChange(e)} />
          <Button type="submit" fluid>Send</Button>
        </Form>
      );
    }
  }

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: '100%' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Segment raised>
            {this.renderSection()}
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
export default NewGameView;