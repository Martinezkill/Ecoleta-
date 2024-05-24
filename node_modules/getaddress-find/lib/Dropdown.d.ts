import { Suggestion } from 'getaddress-api';
import { DropdownConfig } from './Types';
export default class Dropdown {
    readonly config: DropdownConfig;
    private selectElement;
    readonly container: HTMLElement | null;
    constructor(config: DropdownConfig);
    firstOptionValue: string;
    setup: (onChange: () => void, suggestions: Suggestion[]) => HTMLSelectElement;
    private replace;
    remove: () => void;
    getValue: () => string;
}
