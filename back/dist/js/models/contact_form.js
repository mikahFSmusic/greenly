"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ContactFormSchema = new mongoose_1.Schema({
    first: {
        type: String
    },
    last: {
        type: String
    },
    email: {
        type: String
    },
    reason: {
        type: String
    },
    message: {
        type: String
    }
});
exports.default = mongoose_1.model("contact_form", ContactFormSchema);
