import ButtonActionDecorator from './ButtonActionDecorator';
class ButtonJumpDecorator implements ButtonActionDecorator{
    constructor(private button:any) {}

    pressDown() {
        console.log("pressDown BUTTON KEY", this.button.key)
    }

    pressUp() {
        console.log("pressUp BUTTON KEY", this.button.key)
    }
}

export default ButtonJumpDecorator;