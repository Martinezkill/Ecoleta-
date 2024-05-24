import { AutocompleteAddress } from 'getaddress-api';
import { OutputFieldConfig } from './Types';
export default class OutputFields {
    readonly config: OutputFieldConfig;
    constructor(config: OutputFieldConfig);
    bind: (address: AutocompleteAddress) => void;
    private setOutputfield;
    clear: () => void;
}
