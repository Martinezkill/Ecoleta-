export declare class Config {
    readonly count: number;
    readonly container_id: string;
    constructor(count: number, container_id: string);
    protected getIdSuffix(): string;
}
export declare class InputConfig extends Config {
    label: string;
    muted_style: string;
    class: string;
    id: string;
    name: string;
}
export declare class ButtonConfig extends Config {
    label: string;
    id: string;
    class: string;
    disabled_message: string;
}
export declare class DropdownConfig extends Config {
    id: string;
    class: string;
    select_message: string;
    template: string | null;
}
export declare class ErrorMessgeConfig extends Config {
    id: string;
    not_found: string;
    class: string;
}
export declare class OutputFieldConfig {
    formatted_address_0: string;
    formatted_address_1: string;
    formatted_address_2: string;
    formatted_address_3: string;
    formatted_address_4: string;
    line_1: string;
    line_2: string;
    line_3: string;
    line_4: string;
    town_or_city: string;
    county: string;
    country: string;
    postcode: string;
    latitude: string;
    longitude: string;
    building_number: string;
    building_name: string;
    sub_building_number: string;
    sub_building_name: string;
    thoroughfare: string;
    locality: string;
    district: string;
    residential: string;
}
export declare class SetupOptions {
    endpoints: {
        autocomplete_url: undefined;
        get_url: undefined;
        autocomplete_options: {};
    };
    input: {};
    button: {};
    dropdown: {};
    error_message: {};
    output_fields: {};
}
