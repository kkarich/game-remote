import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Grid, Segment } from 'semantic-ui-react';

class GameView extends React.Component<RouteComponentProps<{}>, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      connected: false,
      value: ''
    };
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