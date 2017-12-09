import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Grid, Segment } from 'semantic-ui-react';
import GlobalState from '../../classes/State';

class GameView extends React.Component<RouteComponentProps<{}>, any> {
  connectorManager: any;
  constructor(props: any) {
    super(props);
    this.connectorManager = GlobalState.get('connectorManager');
    if (!this.connectorManager) {
        this.props.history.push('/newgame');
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
            Game
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
export default GameView;