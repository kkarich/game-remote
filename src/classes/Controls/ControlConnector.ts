import { Control } from './Control';
class ControlConnector {
    registerListener(control: Control, connector: any) {
        connector.on(`control.${control.key}.state`, (data: any) => {
            control.setState(data.state);
        });
    }
}

export default new ControlConnector();