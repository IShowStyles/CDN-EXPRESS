// index.js
const express = require('express');
const path = require('node:path');

const app = express();

// Serve font files
app.use((req, res, next) => {
    if (req.url.match(/\.(woff|woff2)$/)) {
        res.setHeader('Content-Type', 'image/svg+xml');
        res.setHeader('Cache-Control', 'fonts, max-age=31536000, immutable');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Mime-Type', 'image/svg+xml');
        res.setHeader('Mime-Type', 'application/font-woff');
    }
    next();
});
app.use('/fonts', express.static(path.join(__dirname, 'fonts')));

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`CDN server is running on port ${port}`);
});