import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Header, Grid, Segment } from 'semantic-ui-react';
import ConnectorManager from '../../classes/Connectors/ConnectorManager';

class NewGameView extends React.Component<RouteComponentProps<{}>, any> {
  connection: any;
  connectorManager: any;
  constructor(props: any) {
    super(props);
    this.state = {
      roomKey: "JH1E2KJL"
    }

    this.connectorManager = new ConnectorManager(this.state.roomKey);
    this.connectorManager.on('start', (data: {}) => {
      this.props.history.push('/game');
    })
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
            <Header as="h1">{this.state.roomKey}</Header>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

export default NewGameView;