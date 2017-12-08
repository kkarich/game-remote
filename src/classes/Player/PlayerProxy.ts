import Controller from '../Controller/ControllerProxy';

class Player {
    controller: any;
    constructor(connector: any) {
        this.controller = new Controller(connector);
    }
}

export default Player;

