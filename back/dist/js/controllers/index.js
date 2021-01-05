"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addContactForm = exports.addEmail = void 0;
const email_1 = __importDefault(require("../models/email"));
const contact_form_1 = __importDefault(require("../models/contact_form"));
const addEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        console.log(body);
        const email = new email_1.default({
            email: body.email
        });
        const newEmail = yield email.save();
        res.status(201).json({ message: "Email Submitted ", newEmail });
        console.log("Email submitted to mongo");
    }
    catch (error) {
        throw error;
    }
});
exports.addEmail = addEmail;
const addContactForm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        console.log("REQUEST CONTACT FORM");
        console.log(body);
        const contactForm = new contact_form_1.default({
            first: body.first,
            last: body.last,
            email: body.email,
            reason: body.reason,
            message: body.message
        });
        const newContactForm = yield contactForm.save();
        res.status(201).json({ message: "Contact Form Submitted", newContactForm });
        console.log("Contact form submitted to mongo");
    }
    catch (error) {
        throw error;
    }
});
exports.addContactForm = addContactForm;
