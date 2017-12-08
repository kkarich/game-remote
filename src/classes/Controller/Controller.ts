import Button from '../Button/Button';
import ButtonConnector from '../Button/ButtonConnector';
class Controller {
    buttons: {};
    constructor(private connector: any) {
        this.buttons = {};
        this.buttons['a'] = new Button('a');
        new ButtonConnector(this.buttons['a'], this.connector);
    }
}

export default Controller;