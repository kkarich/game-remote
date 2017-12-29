import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Grid, Segment } from 'semantic-ui-react';
import GlobalState from '../../classes/State';

import invaders from '../../games/invaders';

class GameView extends React.Component<RouteComponentProps<{}>, any> {
  connectorManager: any;
  constructor(props: any) {
    super(props);
    this.connectorManager = GlobalState.get('connectorManager');
    if (!this.connectorManager) {
        this.props.history.push('/newgame');
    } else {
      invaders(this.connectorManager.players);
    }
  }

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: '100%' }}
        verticalAlign="middle"
      >
        <Grid.Column>
          <Segment id="game-container"/>
        </Grid.Column>
      </Grid>
    );
  }
}
export default GameView;