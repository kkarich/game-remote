import { applyMixins } from '../helpers';
import Observable from './Observable';
import Transmitter from './Transmitter';

class GameConnector implements Transmitter, Observable {
    // GameConnector
    socket: any;
    connectedId: any;
    // Transmitter
    send: (message: any) => void;
    // Observable
    observers: {};
    on: (action: string, callback: Function) => void;
    off: (action: string, callback: Function) => void;
    notifyObservers: (action: string, data: any) => void;

    constructor(socket: any, connectedId: string) {
        this.observers = {};
        this.socket = socket;
        this.connectedId = connectedId;
    }

}

applyMixins(GameConnector, [Transmitter, Observable]);

export default GameConnector;