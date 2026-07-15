"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    routes: [
        {
            method: 'POST',
            path: '/articles/:documentId/clap',
            handler: 'article.clap',
            config: {
                auth: false,
            }
        }
    ]
};
