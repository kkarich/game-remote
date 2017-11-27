import * as React from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'

const JoinView = () => (
  <Grid
    textAlign='center'
    style={{ height: '100%' }}
    verticalAlign='middle'
  >
    <Grid.Column style={{ maxWidth: 450 }}>
      <Form size='large'>
        <Segment raised>
          <Button primary fluid>Join Game</Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
)

export default JoinView

