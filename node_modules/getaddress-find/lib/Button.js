export default class Button {
    constructor(config) {
        this.config = config;
        this.setup = () => {
            let button = document.createElement("button");
            button.type = "button";
            button.id = this.config.id;
            button.innerHTML = this.config.label;
            if (this.config.class) {
                button.className = this.config.class;
            }
            button.addEventListener("submit", () => { return false; });
            let container = document.getElementById(this.config.container_id);
            if (container) {
                container.appendChild(button);
            }
            return button;
        };
        this.disable = () => {
            this.buttonElement.innerHTML = this.config.disabled_message;
            this.buttonElement.disabled = true;
        };
        this.enable = () => {
            this.buttonElement.innerHTML = this.config.label;
            this.buttonElement.disabled = false;
        };
        this.click = () => {
            this.buttonElement.click();
        };
        this.onClick = (action) => {
            this.buttonElement.addEventListener("click", action);
        };
        this.buttonElement = this.setup();
    }
}
//# sourceMappingURL=Button.js.map