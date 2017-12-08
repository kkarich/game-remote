class ButtonConnector{
    constructor(public button: any, public connector: any) {
        this.connector.on('button.pressDown', () => {
            this.button.pressDown();
        });
        this.connector.on('button.pressUp', () => {
            this.button.pressUp();
        });
    };
}

export default ButtonConnector;