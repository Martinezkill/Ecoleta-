import { ButtonConfig } from './Types';
export default class Button {
    readonly config: ButtonConfig;
    private readonly buttonElement;
    constructor(config: ButtonConfig);
    private setup;
    disable: () => void;
    enable: () => void;
    click: () => void;
    onClick: (action: () => void) => void;
}
