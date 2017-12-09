class Controller {
    constructor(private buttons: {}) {}

    button(key: string) {
        return this.buttons[key];
    }
}

export default Controller;