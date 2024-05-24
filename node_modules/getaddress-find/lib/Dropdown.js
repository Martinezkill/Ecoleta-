export default class Dropdown {
    constructor(config) {
        this.config = config;
        this.firstOptionValue = "open";
        this.setup = (onChange, suggestions) => {
            let dropdown = document.createElement("select");
            dropdown.id = this.config.id;
            if (this.config.class) {
                dropdown.className = this.config.class;
            }
            let option = document.createElement("option");
            option.value = this.firstOptionValue;
            option.text = this.config.select_message;
            dropdown.append(option);
            if (suggestions && suggestions.length > 0) {
                for (let suggestion of suggestions) {
                    let option = document.createElement("option");
                    option.value = suggestion.id;
                    option.text = suggestion.address;
                    dropdown.append(option);
                }
            }
            if (this.container) {
                this.container.appendChild(dropdown);
            }
            dropdown.addEventListener('change', onChange);
            this.replace(dropdown);
            return dropdown;
        };
        this.replace = (replacment) => {
            this.remove();
            this.selectElement = replacment;
        };
        this.remove = () => {
            if (this.selectElement) {
                this.selectElement.remove();
                this.selectElement = undefined;
            }
        };
        this.getValue = () => {
            return this.selectElement.value;
        };
        this.container = document.getElementById(this.config.container_id);
    }
}
//# sourceMappingURL=Dropdown.js.map