"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers/");
const router = express_1.Router();
router.post("/submit-email", controllers_1.addEmail);
router.post("/submit-contact-form", controllers_1.addContactForm);
exports.default = router;
