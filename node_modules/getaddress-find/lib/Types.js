export class Config {
    constructor(count, container_id) {
        this.count = count;
        this.container_id = container_id;
    }
    getIdSuffix() {
        if (this.count > 0) {
            return "_" + this.count;
        }
        return "";
    }
}
export class InputConfig extends Config {
    constructor() {
        super(...arguments);
        this.label = "Search..";
        this.muted_style = "color:#CBCBCB;";
        this.class = "";
        this.id = "getaddress_input" + this.getIdSuffix();
        this.name = "getaddress_input" + this.getIdSuffix();
    }
}
export class ButtonConfig extends Config {
    constructor() {
        super(...arguments);
        this.label = "Search";
        this.id = "getaddress_button" + this.getIdSuffix();
        this.class = "";
        this.disabled_message = "Fetching Addresses...";
    }
}
export class DropdownConfig extends Config {
    constructor() {
        super(...arguments);
        this.id = "getaddress_dropdown" + this.getIdSuffix();
        this.class = "";
        this.select_message = "Select your Address";
        this.template = null;
    }
}
export class ErrorMessgeConfig extends Config {
    constructor() {
        super(...arguments);
        this.id = "getaddress_error_message" + this.getIdSuffix();
        this.not_found = "Address not found";
        this.class = "";
    }
}
export class OutputFieldConfig {
    constructor() {
        this.formatted_address_0 = "formatted_address_0";
        this.formatted_address_1 = "formatted_address_1";
        this.formatted_address_2 = "formatted_address_2";
        this.formatted_address_3 = "formatted_address_3";
        this.formatted_address_4 = "formatted_address_4";
        this.line_1 = "line_1";
        this.line_2 = "line_2";
        this.line_3 = "line_3";
        this.line_4 = "line_4";
        this.town_or_city = "town_or_city";
        this.county = "county";
        this.country = "country";
        this.postcode = "postcode";
        this.latitude = "latitude";
        this.longitude = "longitude";
        this.building_number = "building_number";
        this.building_name = "building_name";
        this.sub_building_number = "sub_building_number";
        this.sub_building_name = "sub_building_name";
        this.thoroughfare = 'thoroughfare';
        this.locality = "locality";
        this.district = "district";
        this.residential = "residential";
    }
}
export class SetupOptions {
    constructor() {
        this.endpoints = {
            autocomplete_url: undefined,
            get_url: undefined,
            autocomplete_options: {}
        };
        this.input = {};
        this.button = {};
        this.dropdown = {};
        this.error_message = {};
        this.output_fields = {};
    }
}
//# sourceMappingURL=Types.js.map