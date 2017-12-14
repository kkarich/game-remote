import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import GlobalState from '../../classes/State';
import ControlMap from '../../classes/ControlMap';

import ControllerButton from '../../components/Button';
import ControllerJoystick from '../../components/Joystick';

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
        this.player.controller.control(key).pressDown();
    }

    handlePressUp(key: string) {
        this.player.controller.control(key).pressUp();
    }
    
    handleStart(key: string) {
        this.player.controller.control(key).start();
    }
    
    handleStop(key: string) {
        this.player.controller.control(key).stop();
    }

    handleMove(key: string, degree: number, force: number) {
        this.player.controller.control(key).move(degree, force);
    }

    renderControls() {
        return ControlMap.controls.map((controlConfig: any) => {
            return this.renderControl(controlConfig);
        });
    }

    renderControl(controlConfig: any) {
        switch (controlConfig.type) {
            case 'button':
                return this.renderButton(controlConfig);
            case 'joystick':
                return this.renderJoyStick(controlConfig);
            default:
                return null;
        }
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

    renderJoyStick(joystickConfig: any) {
        return <ControllerJoystick
            joystickConfig={joystickConfig}
            onStart={(key: string) => { this.handleStart(key) }}
            onStop={(key: string) => { this.handleStop(key) }}
            onMove={(key: string, degree: number, force: number) => { this.handleMove(key, degree, force) }} />;
    }

    render() {
        return (
            <Container
                style={{ background: '#2A2A2A', height: '100%' }}>
                {this.renderControls()}
            </Container>
        );
    }
}
export default GameView;