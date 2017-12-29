import { ControllerFactory } from '../Controller/ControllerFactories';

class Player {
    controller: any;
    constructor(connector: any, controllerFactory: ControllerFactory) {
        this.controller = controllerFactory.createController(connector);
    }
}

export default Player;