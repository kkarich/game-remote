class ObservableConnector {
    observers: {};

    on(eventName: string, callback: Function) {
        if (!this.observers[eventName]) {
            this.observers[eventName] = [];
        }

        this.observers[eventName].push(callback);
    }

    // TODO: Remove observable function
    off(eventName: string, callback: Function) {
        let observers = this.observers[eventName];
        return observers;
    }

    notifyObservers(eventName: string, data: {}) {
        if (!this.observers[eventName]) {
            return;
        }
        this.observers[eventName].forEach((callback: Function) => {
            callback(data);
        });
    }
}

export default ObservableConnector;
