import JoystickInterface from './JoystickInterface';
class JoystickConnector {
    constructor(public joystick: JoystickInterface, public connector: any) {
        this.connector.on(`joystick.${this.joystick.key}.start`, (data: any) => {
            console.log("Start: ", this.joystick.key);
            this.joystick.start();
        });
        this.connector.on(`joystick.${this.joystick.key}.stop`, (data: any) => {
            console.log("Stop: ", this.joystick.key);
            this.joystick.stop();
        });
        this.connector.on(`joystick.${this.joystick.key}.move`, (data: any) => {
            console.log("Move: ", this.joystick.key, data);
            this.joystick.move(data.degree, data.force);
        });
    };
}

export default JoystickConnector;