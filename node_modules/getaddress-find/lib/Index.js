import { ButtonConfig, DropdownConfig, ErrorMessgeConfig, InputConfig, OutputFieldConfig, SetupOptions } from './Types';
import Client from 'getaddress-api';
import Find from './Find';
class Instances {
}
Instances.All = [];
export function find(container_id, api_key = "", options = new SetupOptions()) {
    var _a, _b, _c;
    let client = new Client(api_key, (_a = options.endpoints) === null || _a === void 0 ? void 0 : _a.autocomplete_url, (_b = options.endpoints) === null || _b === void 0 ? void 0 : _b.get_url);
    let context = document.getElementById(container_id);
    if (context && client) {
        let count = Instances.All.length;
        let inputConfig = Object.assign(new InputConfig(count, container_id), options.input);
        let buttonConfig = Object.assign(new ButtonConfig(count, container_id), options.button);
        let dropdownConfig = Object.assign(new DropdownConfig(count, container_id), options.dropdown);
        let errorMessgeConfig = Object.assign(new ErrorMessgeConfig(count, container_id), options.error_message);
        let mergedOutputFields = Object.assign(new OutputFieldConfig(), options.output_fields);
        let find = new Find(context, client, inputConfig, buttonConfig, dropdownConfig, errorMessgeConfig, mergedOutputFields, (_c = options.endpoints) === null || _c === void 0 ? void 0 : _c.autocomplete_options);
        Instances.All.push(find);
    }
    return context;
}
export { SetupOptions };
//# sourceMappingURL=Index.js.map