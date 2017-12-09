import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Grid, Button, Segment } from 'semantic-ui-react';
import GlobalState from '../../classes/State';
import ControlMap from '../../classes/ControlMap';

class GameView extends React.Component<RouteComponentProps<{}>, any> {
    player: any;
    constructor(props: any) {
        super(props);
        this.player = GlobalState.get('player');
        if (!this.player) {
            this.props.history.push('/join');
        }
    }

    handleMouseDown(key: string) {
        this.player.controller.button(key).pressDown();
    }

    handleMouseUp(key: string) {
        this.player.controller.button(key).pressUp();
    }

    renderButtons() {
        return ControlMap.buttons.map((buttonData) => {
            return this.renderButton(buttonData.key);
        });
    }

    renderButton(key: string) {
        return (
            <Button 
                onMouseDown = {() => {this.handleMouseDown(key)}} 
                onMouseUp = {() => {this.handleMouseUp(key)}}
                onMouseLeave = {() => {this.handleMouseUp(key)}}
                fluid> {key.toUpperCase()}
            </Button>
        )
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
                        {this.renderButtons()}
                    </Segment>
                </Grid.Column>
            </Grid>
        );
    }
}
export default GameView;