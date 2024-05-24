export class AddressSelectedEvent {
    static dispatch(element, address) {
        const evt = new Event("getaddress-find-address-selected", { bubbles: true });
        evt["address"] = address;
        element.dispatchEvent(evt);
    }
}
export class AddressSelectedFailedEvent {
    static dispatch(element, status, message) {
        const evt = new Event("getaddress-find-address-selected-failed", { bubbles: true });
        evt["status"] = status;
        evt["message"] = message;
        element.dispatchEvent(evt);
    }
}
export class SuggestionsEvent {
    static dispatch(element, query, suggestions) {
        const evt = new Event("getaddress-find-suggestions", { bubbles: true });
        evt["suggestions"] = suggestions;
        evt["query"] = query;
        element.dispatchEvent(evt);
    }
}
export class SuggestionsFailedEvent {
    static dispatch(element, query, status, message) {
        const evt = new Event("getaddress-find-suggestions-failed", { bubbles: true });
        evt["status"] = status;
        evt["message"] = message;
        evt["query"] = query;
        element.dispatchEvent(evt);
    }
}
//# sourceMappingURL=Events.js.map