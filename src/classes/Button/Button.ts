import ButtonInterface from './ButtonInterface'
class Button implements ButtonInterface{
    isDown: boolean;
    constructor(public key:string) {}

    pressDown() {
        this.isDown = true;
    }

    pressUp() {
        this.isDown = false;
    }
}

export default Button;