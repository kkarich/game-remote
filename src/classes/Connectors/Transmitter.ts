class Transmitter {
    socket: any;
    connectedId: any;

    send(message: any) {
        this.socket.publish({
            room: this.connectedId,
            message: message
        })
    }
}

export default Transmitter;