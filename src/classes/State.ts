class GlobalState {
    state: {};
    constructor() {
        this.state = {};
    }

    get(key: string) {
        return this.state[key];
    }

    set(newObject: {}) {
        Object.keys(newObject).forEach((key) => {
            this.state[key] = newObject[key];
        });
    }
}

export default new GlobalState();