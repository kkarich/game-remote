import ButtonInterface from './ButtonInterface'
class Button implements ButtonInterface{
    isDown: boolean;
    constructor(public key:string) {
        this.isDown = false;
    }

    pressDown() {
        this.isDown = true;
    }

    pressUp() {
        this.isDown = false;
    }
}

export default Button;