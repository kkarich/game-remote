import JoystickInterface from './JoystickInterface';
import { debounce } from '../../helpers';
class JoystickProxy implements JoystickInterface {
    isActive: Boolean;
    degree: number;
    force: number;
    constructor(public key: string, private connector: any) { }
    
    start() {
        this.connector.send({
            action: `joystick.${this.key}.start`
        });
    }
    stop() {
        this.connector.send({
            action: `joystick.${this.key}.stop`
        });
    }

    @debounce(100)
    move(degree: number, force: number) {
        this.connector.send({
            action: `joystick.${this.key}.move`,
            degree,
            force
        });
    }
}

export default JoystickProxy;