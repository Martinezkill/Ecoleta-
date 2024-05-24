import { ErrorMessgeConfig } from './Types';
export default class ErrorMessage {
    readonly config: ErrorMessgeConfig;
    private pElement;
    readonly container: HTMLElement | null;
    constructor(config: ErrorMessgeConfig);
    setup: (status: number, message: string) => HTMLParagraphElement;
    remove: () => void;
    private replace;
}
