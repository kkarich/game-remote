import { applyMixins } from '../helpers';
import Socket from '../Socket';
import GameConnector from './GameConnector';
import Reciever from './Reciever';

class ConnectorManager implements Reciever{
    socket: any;
    reciever: any;
    connection: any;
    connectors: {};
    constructor(private roomKey: string) {
        this.socket = new Socket();
        this.connectors = {};

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
        connector.on('message', (data:any) => {
            console.log('data', data);
        });
        this.connectors[member.id] = connector;
        connector.send({ action: 'connected' });
    }

    handleIncomingData(data: any, member: any) {
        let connector = this.connector(member.id);
        if (connector) {
            connector.notifyObservers(data.action, data);
        }
    }

    // Reciever
    registerListener: () => void;
    initReciever: (connectionId: string) => void;
}

applyMixins(ConnectorManager, [Reciever]);
export default ConnectorManager;