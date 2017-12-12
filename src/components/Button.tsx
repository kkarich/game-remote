import * as React from 'react';

class Button extends React.Component<any, any> {
    key: string;
    style: any;
    constructor(props: any) {
        super(props);
        this.state = {
            active: false
        }
        this.key = props.buttonConfig.key;
        this.style = Object.assign({},props.buttonConfig.position, props.buttonConfig.size);
    }

    onPressDown() {
        this.setState({active: true});
        this.props.onPressDown(this.key);
    }

    onPressUp() {
        this.setState({active: false});
        this.props.onPressUp(this.key);
    }

    render() {
        return (
            <div style= {this.style}
                className={"button " + (this.state.active?'active':'')}
                onMouseDown = {() => {this.onPressDown()}}
                onTouchStart = {() => {this.onPressDown()}}
                onMouseUp = {() => {this.onPressUp()}}
                onMouseLeave = {() => {this.onPressUp()}}
                onTouchEnd = {() => {this.onPressUp()}}
                > {this.key.toUpperCase()}
            </div>
        );
    }
}
export default Button;