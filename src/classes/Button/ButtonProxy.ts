import ButtonInterface from './ButtonInterface'
class ButtonProxy implements ButtonInterface{
    isDown: boolean;
    constructor(public key:string, private connector: any) {}

    pressDown() {
        this.connector.send({
            action: `button.${this.key}.pressDown`
        })
    }

    pressUp() {
        this.connector.send({
            action: `button.${this.key}.pressUp`
        })
    }
}

export default ButtonProxy;