class ButtonConnector{
    constructor(public button: any, public connector: any) {
        this.connector.on(`button.${this.button.key}.pressDown`, () => {
            console.log("PRESS Down: ", this.button.key);
            this.button.pressDown();
        });
        this.connector.on(`button.${this.button.key}.pressUp`, () => {
            console.log("PRESS UP: ", this.button.key);
            this.button.pressUp();
        });
    };
}

export default ButtonConnector;