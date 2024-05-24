import { InputConfig } from './Types';
export default class Input {
    readonly config: InputConfig;
    private readonly inputElement;
    constructor(config: InputConfig);
    private setup;
    private getDefaultStyle;
    onKeyPress: (action: () => void) => void;
    getValue: () => string;
}
