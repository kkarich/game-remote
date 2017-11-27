import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom'
import { Button, Form, Grid, Divider, Segment } from 'semantic-ui-react';


class MainView extends React.Component<RouteComponentProps<{}>, any> {
  nextPath(path:string) {
    this.props.history.push(path);
  }
  render() {
    return (
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size='large'>
              <Segment raised>
                <Button onClick={() => this.nextPath('/join')} primary fluid>Join Game</Button>
                <Divider horizontal>Or</Divider>
                <Button onClick={() => this.nextPath('/newgame')} secondary fluid>Start New Game</Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
    )
  }
}

export default MainView

