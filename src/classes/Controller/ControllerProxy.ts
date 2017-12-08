import Button from '../Button/ButtonProxy';

class Controller {
    buttons: {};
    constructor(private connector: any) {
        this.buttons = {};
        this.buttons['a'] = new Button('a', this.connector);
    }
}

export default Controller;