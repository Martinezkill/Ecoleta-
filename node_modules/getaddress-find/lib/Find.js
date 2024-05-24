var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Button from './Button';
import Input from './Input';
import Dropdown from './Dropdown';
import ErrorMessage from './ErrorMessage';
import OutputFields from './OutputFields';
import { AddressSelectedEvent, AddressSelectedFailedEvent, SuggestionsEvent, SuggestionsFailedEvent } from './Events';
export default class Find {
    constructor(context, getAddress, inputConfig, buttonConfig, dropdownConfig, errorMessgeConfig, outputFieldConfig, autocomplete_options) {
        this.context = context;
        this.getAddress = getAddress;
        this.autocomplete_options = autocomplete_options;
        this.clearAll = () => {
            this.errorMessage.remove();
            this.dropdown.remove();
            this.outputFields.clear();
        };
        this.setupDropdown = (suggestions) => {
            const onChange = (() => __awaiter(this, void 0, void 0, function* () {
                let id = this.dropdown.getValue();
                if (id !== this.dropdown.firstOptionValue) {
                    let addressResult = yield this.getAddress.get(id);
                    if (addressResult.isSuccess) {
                        let success = addressResult.toSuccess();
                        this.outputFields.bind(success.address);
                        AddressSelectedEvent.dispatch(this.context, success.address);
                    }
                    else {
                        let failed = addressResult.toFailed();
                        this.errorMessage.setup(failed.status, failed.message);
                        AddressSelectedFailedEvent.dispatch(this.context, failed.status, failed.message);
                    }
                }
            }));
            this.dropdown.setup(onChange, suggestions);
        };
        this.lookup = (query) => __awaiter(this, void 0, void 0, function* () {
            let autocompleteOptions = {};
            autocompleteOptions.all = true;
            if (this.dropdown.config.template) {
                autocompleteOptions.template = this.dropdown.config.template;
            }
            if (this.autocomplete_options) {
                autocompleteOptions = Object.assign(autocompleteOptions, this.autocomplete_options);
            }
            let result = yield this.getAddress.autocomplete(query, autocompleteOptions);
            this.button.enable();
            if (result.isSuccess) {
                let success = result.toSuccess();
                this.setupDropdown(success.suggestions);
                SuggestionsEvent.dispatch(this.context, query, success.suggestions);
            }
            else {
                let failed = result.toFailed();
                this.errorMessage.setup(failed.status, failed.message);
                SuggestionsFailedEvent.dispatch(this.context, query, failed.status, failed.message);
            }
        });
        this.setupEvents = (button, input) => {
            input.onKeyPress(button.click);
            button.onClick(() => __awaiter(this, void 0, void 0, function* () {
                let query = input.getValue();
                if (query && query !== this.input.config.label) {
                    button.disable();
                    this.clearAll();
                    yield this.lookup(query);
                }
                return false;
            }));
        };
        this.input = new Input(inputConfig);
        this.button = new Button(buttonConfig);
        this.dropdown = new Dropdown(dropdownConfig);
        this.errorMessage = new ErrorMessage(errorMessgeConfig);
        this.outputFields = new OutputFields(outputFieldConfig);
        this.setupEvents(this.button, this.input);
    }
}
//# sourceMappingURL=Find.js.map