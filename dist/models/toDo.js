"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Schema
const schema = new mongoose_1.Schema({
    user: { type: String, required: true },
    text: { type: String, required: true },
});
