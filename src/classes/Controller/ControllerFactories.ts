import Button from '../Button/Button';
import ButtonConnector from '../Button/ButtonConnector';
import ButtonProxy from '../Button/ButtonProxy';
import Controller from './Controller';
import ControlMap from '../ControlMap';

interface ControllerFactoryInterFace {
    createController: Function;
    createButton: Function
}

class ControllerFactory implements ControllerFactoryInterFace{
    createController(connector: any) {
        let buttons = {};
        
        ControlMap.buttons.forEach((buttonData) => {
            buttons[buttonData.key] = this.createButton(buttonData.key, connector);
        });

        return new Controller(buttons);
    }

    createButton(key: string, connector: any) {
        let button = new Button(key);
        new ButtonConnector(button, connector);
        return button;
    }
}

class ControllerProxyFactory extends ControllerFactory{
    createButton(key: string, connector: any) {
        return new ButtonProxy(key, connector);
    }
}

let controllerFactory = new ControllerFactory();
let controllerProxyFactory = new ControllerProxyFactory();
export { ControllerFactory, controllerFactory, controllerProxyFactory } ;

