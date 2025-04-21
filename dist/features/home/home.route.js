"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/homes', (req, res) => {
    res.send("dddd");
});
exports.default = router;
