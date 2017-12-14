class Controller {
    constructor(private controls: {}) {}

    control(key: string) {
        return this.controls[key];
    }
}

export default Controller;