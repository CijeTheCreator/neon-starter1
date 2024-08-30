"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
helmet_1.default.referrerPolicy({
    policy: "no-referrer",
});
helmet_1.default.hsts({
    // 60 days
    maxAge: 86400,
    // removing the "includeSubDomains" option
    includeSubDomains: false,
});
helmet_1.default.contentSecurityPolicy({
    useDefaults: true,
    directives: {
        "font-src": ["'self'", "external-website.com"],
        // allowing styles from any website
        "style-src": null,
    },
});
helmet_1.default.frameguard({
    action: "deny",
});
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
