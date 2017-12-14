interface JoystickInterface {
    key: string;
    isActive: Boolean;
    degree: number;
    force: number;
    start: () => void;
    stop: () => void;
    move: (degree: number, force: number) => void;
}

export default JoystickInterface;