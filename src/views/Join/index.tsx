import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Form, Grid, Button, Input, Segment } from 'semantic-ui-react';
import Socket from '../../classes/Socket';
import ControllerConnector from '../../classes/Connectors/ControllerConnector';

class NewGameView extends React.Component<RouteComponentProps<{}>, any> {
  connector: any;
  constructor(props: any) {
    super(props);
    let socket:any = new Socket();
    socket.on('open', () => {
      this.connector = new ControllerConnector(socket);
    })
    this.state = {
      value: ''
    };
  }

  handleChange(event: any) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: any) {
    event.preventDefault();
    if (this.state.connected) {
      this.connector.send({ action: 'message', data: this.state.value });
    } else {
      this.connector.joinGame(this.state.value).then(() => {
        this.setState({ connected: true });
      });
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
          <Form size="large" onSubmit={(e) => this.handleSubmit(e)}>
            <Segment raised>
              <Input id="incoming" value={this.state.value} onChange={(e) => this.handleChange(e)} />
              <Button type="submit" fluid>Send</Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}
export default NewGameView;