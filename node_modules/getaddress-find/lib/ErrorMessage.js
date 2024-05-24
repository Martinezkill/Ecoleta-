export default class ErrorMessage {
    constructor(config) {
        this.config = config;
        this.setup = (status, message) => {
            let errorMessage = document.createElement("p");
            errorMessage.id = this.config.id;
            if (this.config.class) {
                errorMessage.className = this.config.class;
            }
            errorMessage.innerText = this.config.not_found;
            if (this.container) {
                this.container.appendChild(errorMessage);
            }
            this.replace(errorMessage);
            return errorMessage;
        };
        this.remove = () => {
            if (this.pElement) {
                this.pElement.remove();
                this.pElement = undefined;
            }
        };
        this.replace = (replacment) => {
            this.remove();
            this.pElement = replacment;
        };
        this.container = document.getElementById(this.config.container_id);
    }
}
//# sourceMappingURL=ErrorMessage.js.map