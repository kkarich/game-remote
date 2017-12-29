import { BehaviorSubject } from 'rxjs/Rx';

export interface ControlInterface {
    key: string;
    state: {};
    initState: () => void;
    setState: (state: {}) => void;
    getState: () => {};
}

export abstract class Control implements ControlInterface {
    key: string;
    state: {};
    subscribe: Function;
    private subject: BehaviorSubject<{}>;
    constructor(key: string) {
        this.key = key;
        this.initState();
        this.subject = new BehaviorSubject(this.state);
        this.subscribe = this.subject.subscribe.bind(this.subject);
    }

    abstract initState(): void;

    setState(state: {}) {
        Object.assign(this.state, state);
        this.subject.next(this.state);
    }

    getState() {
        return this.state;
    }
}