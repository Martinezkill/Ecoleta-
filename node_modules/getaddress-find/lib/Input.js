export default class Input {
    constructor(config) {
        this.config = config;
        this.setup = () => {
            let input = document.createElement("input");
            input.id = this.config.id;
            input.type = "text";
            input.value = this.config.label;
            if (this.config.class) {
                input.className = this.config.class;
            }
            input.name = this.config.name;
            input.autocomplete = "off";
            let styleAttr = this.getDefaultStyle();
            input.attributes.setNamedItem(styleAttr);
            input.addEventListener("submit", () => { return false; });
            input.addEventListener("focus", () => {
                input.removeAttribute('style');
                if (input.value === this.config.label) {
                    input.value = '';
                }
            });
            input.addEventListener("blur", () => {
                if (!input.value) {
                    input.value = this.config.label;
                    let styleAttr = this.getDefaultStyle();
                    input.attributes.setNamedItem(styleAttr);
                }
            });
            let container = document.getElementById(this.config.container_id);
            if (container) {
                container.append(input);
            }
            return input;
        };
        this.getDefaultStyle = () => {
            let styleAttr = document.createAttribute("style");
            styleAttr.value = this.config.muted_style;
            return styleAttr;
        };
        this.onKeyPress = (action) => {
            this.inputElement.addEventListener("keypress", (e) => {
                if (e.key === 'Enter') {
                    action();
                }
            });
        };
        this.getValue = () => {
            return this.inputElement.value;
        };
        this.inputElement = this.setup();
    }
}
//# sourceMappingURL=Input.js.map