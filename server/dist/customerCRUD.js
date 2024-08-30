"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.status(201).json();
});
router.post('/', (req, res) => {
    res.status(201).json();
});
router.put('/:id', (req, res) => {
});
router.delete('/:id', (req, res) => {
});
exports.default = router;
