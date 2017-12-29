import { Control } from '../Control';
import { applyMixins, debounce } from '../../helpers';

interface JoystickInterface {
    start: () => void;
    stop: () => void;
    move: (degree: number, force: number) => void;
}

class Joystick extends Control implements JoystickInterface {
    initState() {
        this.state = {
            isActive: false,
            degree: 0,
            force: 0
        };
    }

    start() {
        this.setState({ isActive: true });
    }

    stop() {
        this.setState({
            isActive: false,
            degree: 0,
            force: 0
        });
    }

    @debounce(100)
    move(degree: number, force: number) {
        this.setState({
            isActive: false,
            degree: degree,
            force: force
        });
    }
}

applyMixins(Joystick, [Control]);

export default Joystick;