import ButtonInterface from './ButtonInterface'
class ButtonProxy implements ButtonInterface{
    isDown: boolean;
    constructor(public key:string, private connector: any) {}

    pressDown() {
        this.connector.send({
            action: 'button.pressDown',
            key: this.key
        })
    }

    pressUp() {
        this.connector.send({
            action: 'button.pressUp',
            key: this.key
        })
    }
}

export default ButtonProxy;