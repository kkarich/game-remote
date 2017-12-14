import Button from '../Button/Button';
import ButtonConnector from '../Button/ButtonConnector';
import ButtonProxy from '../Button/ButtonProxy';
import Joystick from '../Controls/Joystick/Joystick';
import JoystickConnector from '../Controls/Joystick/JoystickConnector';
import JoystickProxy from '../Controls/Joystick/JoystickProxy';

import Controller from './Controller';
import ControlMap from '../ControlMap';

interface ControllerFactoryInterFace {
    createController: Function;
    createButton: Function;
    createJoystick: Function;
}

class ControllerFactory implements ControllerFactoryInterFace{
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
        new ButtonConnector(button, connector);
        return button;
    }

    createJoystick(key: string, connector: any) {
        let joystick = new Joystick(key);
        new JoystickConnector(joystick, connector);
        return joystick;
    }
}

class ControllerProxyFactory extends ControllerFactory{
    createButton(key: string, connector: any) {
        return new ButtonProxy(key, connector);
    }
    createJoystick(key: string, connector: any) {
        return new JoystickProxy(key, connector);
    }
}

let controllerFactory = new ControllerFactory();
let controllerProxyFactory = new ControllerProxyFactory();
export { ControllerFactory, controllerFactory, controllerProxyFactory } ;

