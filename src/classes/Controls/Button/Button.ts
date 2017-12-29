import { Control } from '../Control';
import { applyMixins } from '../../helpers';

interface ButtonInterface {
    pressDown: Function;
    pressUp: Function;
}

class Button extends Control implements ButtonInterface {
    initState() {
        this.state = {
            isDown: false
        };
    }
    pressDown() {
        this.setState({
            isDown: true
        });
    }

    pressUp() {
        this.setState({
            isDown: false
        });
    }
}

applyMixins(Button, [Control]);
export default Button;