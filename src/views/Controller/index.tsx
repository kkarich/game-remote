import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import GlobalState from '../../classes/State';
import ControlMap from '../../classes/ControlMap';

import ControllerButton from '../../components/Button';

class GameView extends React.Component<RouteComponentProps<{}>, any> {
    player: any;
    constructor(props: any) {
        super(props);
        this.player = GlobalState.get('player');
        // if (!this.player) {
        //     this.props.history.push('/join');
        // }
    }

    handlePressDown(key: string) {
        this.player.controller.button(key).pressDown();
    }

    handlePressUp(key: string) {
        this.player.controller.button(key).pressUp();
    }

    renderButtons() {
        return ControlMap.buttons.map((buttonConfig: any) => {
            return this.renderButton(buttonConfig);
        });
    }

    renderButton(buttonConfig: any) {
        return (
            <ControllerButton
                buttonConfig={buttonConfig}
                onPressDown={(key: string) => { this.handlePressDown(key) }}
                onPressUp={(key: string) => { this.handlePressUp(key) }}
                fluid />
        )
    }

    render() {
        return (
            <Container 
                style={{ background: '#2A2A2A', height: '100%' }}>
                    {this.renderButtons()}
            </Container>
        );
    }
}
export default GameView;