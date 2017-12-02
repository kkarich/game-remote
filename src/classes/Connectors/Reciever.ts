class Reciever {
    socket: any;
    connection: any;
    handleIncomingData: Function;
    initReciever(connectionId:  string) {
        this.connection = this.socket.subscribe(connectionId);
        this.registerListener();
    }
    registerListener() {
        this.connection.on('data', (data: any, error: any) => {
            this.handleIncomingData(data, error);
        });
    }
}

export default Reciever;