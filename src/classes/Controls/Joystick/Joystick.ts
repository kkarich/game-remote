import JoystickInterface from './JoystickInterface';
class Joystick implements JoystickInterface{
    isActive: Boolean;
    degree: number;
    force: number
    constructor(public key:string) {
        this.isActive = false;
        this.degree = 0;
        this.force = 0;
    }

    start() {
        this.isActive = true;
    }

    stop() {
        this.isActive = false;
        this.degree = 0;
        this.force = 0;
    }

    move(degree: number, force: number) {
        this.degree = degree;
        this.force = force;
    }
}

export default Joystick;