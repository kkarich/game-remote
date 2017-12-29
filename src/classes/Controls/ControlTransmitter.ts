import { Control } from './Control';
class ControlTransmitter {
    registerTransmitter(control: Control, connection: any) {
        control.subscribe(
            () => {
                connection.send({
                    action: `control.${control.key}.state`,
                    state: control.getState()
                });
            }
        );
    }
}

export default new ControlTransmitter();