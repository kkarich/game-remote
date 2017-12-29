import Button from '../Controls/Button/Button';
import Joystick from '../Controls/Joystick/Joystick';
import ControlConnector from '../Controls/ControlConnector';
import ControlTransmitter from '../Controls/ControlTransmitter';

import Controller from './Controller';
import ControlMap from '../ControlMap';

interface ControllerFactoryInterFace {
    createController: Function;
    createButton: Function;
    createJoystick: Function;
}

class ControllerFactory implements ControllerFactoryInterFace {
    createController(connector: any) {
        let controls = {};
        
        ControlMap.controls.forEach((controlConfig) => {
            let control = this.createControl(controlConfig, connector);
            if (control) {
                controls[controlConfig.key] = control;
            }
        });

        return new Controller(controls);
    }

    createControl(controlConfig: any, connector: any) {
        switch (controlConfig.type) {
            case 'button':
                return this.createButton(controlConfig.key, connector);
            case 'joystick':
                return this.createJoystick(controlConfig.key, connector);
            default:
                return false;
        }
    }

    createButton(key: string, connector: any) {
        let button = new Button(key);
        ControlConnector.registerListener(button, connector);
        return button;
    }

    createJoystick(key: string, connector: any) {
        let joystick = new Joystick(key);
        ControlConnector.registerListener(joystick, connector);
        return joystick;
    }
}

class ControllerProxyFactory extends ControllerFactory {
    createButton(key: string, connector: any) {
        let button = new Button(key);
        ControlTransmitter.registerTransmitter(button, connector);
        return button;
    }
    createJoystick(key: string, connector: any) {
        let joystick = new Joystick(key);
        ControlTransmitter.registerTransmitter(joystick, connector);
        return joystick;
    }
}

let controllerFactory = new ControllerFactory();
let controllerProxyFactory = new ControllerProxyFactory();
export { ControllerFactory, controllerFactory, controllerProxyFactory };