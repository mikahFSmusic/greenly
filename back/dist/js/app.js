"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
require('dotenv').config();
const app = express_1.default();
const PORT = process.env.PORT || 4000;
// Middleware
app.use((req, res, next) => { next(); }, cors_1.default({ maxAge: 84600 }));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
// MongoDB Setup
const mongoURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@maisonettecluster0.p8m37.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose_1.default.set("useFindAndModify", false);
mongoose_1.default
    .connect(mongoURI, options)
    .then(() => {
    app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
})
    .catch(error => {
    throw error;
});
