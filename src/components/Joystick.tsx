import * as React from 'react';
import * as Nipplejs from 'nipplejs';
import { generateStyles } from '../classes/helpers';

class Joystick extends React.Component<any, any> {
    key: string;
    style: any;
    joystick: any;
    constructor(props: any) {
        super(props);
        this.state = {
            active: false
        };
        this.key = props.joystickConfig.key;
        this.style = generateStyles(props.joystickConfig);
    }

    componentDidMount() {
        var options = {
            zone: document.getElementById('zone_joystick'),
            mode: 'static',
            position: {
                top: this.style.top,
                bottom: this.style.bottom,
                left: this.style.left,
                right: this.style.right
            }
        };

        let manager = Nipplejs.create(options);
        this.joystick = manager.get(0);
        this.joystick.on('start end move', (evt: any, data: any) => {
            switch (evt.type) {
                case 'start':
                    this.onStart();
                    break;
                case 'end':
                    this.onStop();
                    break;
                case 'move':
                    this.onMove(data.angle.degree, data.force);
                    break;

                default:
                    break;
            }
        });
    }

    onStart() {
        this.props.onStart(this.key);
    }

    onStop() {
        this.props.onStop(this.key);
    }

    onMove(degree: number, force: number) {
        this.props.onMove(this.key, degree, force);
    }

    render() {
        return (
            <div id={'zone_joystick'} />
        );
    }
}

export default Joystick;