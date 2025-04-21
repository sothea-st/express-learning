"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const router = (0, express_1.Router)();
const routesPath = path_1.default.join(__dirname, '../features');
// Loop through features folders and load route files automatically
fs_1.default.readdirSync(routesPath).forEach((folder) => {
    const routePath = path_1.default.join(routesPath, folder, `${folder}.route.ts`);
    if (fs_1.default.existsSync(routePath)) {
        const route = require(routePath).default;
        router.use(route); // Mount the route
    }
});
exports.default = router;
