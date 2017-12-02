import { applyMixins } from '../helpers';
import Observable from './Observable';
import Transmitter from './Transmitter';
import Reciever from './Reciever';

class ControllerConnector implements Transmitter, Reciever, Observable {
    socket: any;
    connectedId: any;
    connection: any;
    observers: {};
    constructor(socket: any) {
        this.observers = {};
        this.socket = socket;

        this.initReciever(this.socket.clientId);
    }

    joinGame(gameKey: string) {
        return new Promise((resolve, reject) => {
            this.socket.subscribe('observable-' + gameKey);
            this.on('connected', (data: any, error: any) => {
                if (error) {
                    reject();
                }
                this.connectedId = 'observable-' + gameKey;
                resolve();
            });
        });
    }

    handleIncomingData(data: any, error: any) {
        this.notifyObservers(data.action, data);
    }

    // Transmitter
    send: (message: any) => void;
    // Reciever
    initReciever: (connectionId: string) => void;
    registerListener: () => void;
    // Observable
    on: (action: string, callback: Function) => void;
    off: (action: string, callback: Function) => void;
    notifyObservers: (action: string, data: any) => void;
}

applyMixins(ControllerConnector, [Transmitter, Reciever, Observable]);
export default ControllerConnector;