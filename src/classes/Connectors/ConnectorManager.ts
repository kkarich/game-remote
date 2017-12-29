import { applyMixins } from '../helpers';
import Socket from '../Socket';
import GameConnector from './GameConnector';
import Reciever from './Reciever';
import Observable from './Observable';
import Player from '../Player/Player';
import { controllerFactory } from '../Controller/ControllerFactories';

class ConnectorManager implements Reciever, Observable {
    // ConnectorManager
    socket: any;
    reciever: any;
    connection: any;
    observers: {};
    connectors: {};
    players: any[];
    // Reciever
    registerListener: () => void;
    initReciever: (connectionId: string) => void;
    // Observable
    on: (action: string, callback: Function) => void;
    off: (action: string, callback: Function) => void;
    notifyObservers: (action: string, data: any) => void;

    constructor(private roomKey: string) {
        this.socket = new Socket();
        this.connectors = {};
        this.observers = {};
        this.players = [];

        this.socket.on('open', (error: any) => {
            this.initReciever('observable-' + this.roomKey);
            this.connection.on('member_join', (member: any) => {
                this.handleNewMember(member);
            });
        });
    }

    connector(clientId: string) {
        return this.connectors[clientId];
    }

    handleNewMember(member: any) {
        let connector = new GameConnector(this.socket, member.id);
        this.players.push(new Player(connector, controllerFactory));

        connector.on('start', (data: any) => {
            this.handleStartGame(data);
        });
        this.connectors[member.id] = connector;
        connector.send({ action: 'connected' });
    }

    handleStartGame(data: {}) {
        Object.keys(this.connectors).forEach(key => {
            let connector = this.connectors[key];
            connector.send({
                action: 'start'
            });
        });
        this.notifyObservers('start', data);
    }

    handleIncomingData(data: any, member: any) {
        let connector = this.connector(member.id);
        if (connector) {
            connector.notifyObservers(data.action, data);
        }
    }
}

applyMixins(ConnectorManager, [Reciever, Observable]);
export default ConnectorManager;