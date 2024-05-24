import { ButtonConfig, InputConfig, DropdownConfig, ErrorMessgeConfig, OutputFieldConfig } from './Types';
import Client from 'getaddress-api';
export default class Find {
    readonly context: HTMLElement;
    readonly getAddress: Client;
    readonly autocomplete_options: any;
    private readonly button;
    private readonly input;
    private readonly dropdown;
    private readonly errorMessage;
    private readonly outputFields;
    constructor(context: HTMLElement, getAddress: Client, inputConfig: InputConfig, buttonConfig: ButtonConfig, dropdownConfig: DropdownConfig, errorMessgeConfig: ErrorMessgeConfig, outputFieldConfig: OutputFieldConfig, autocomplete_options: any);
    private clearAll;
    private setupDropdown;
    private lookup;
    private setupEvents;
}
