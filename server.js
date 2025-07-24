const express = require('express');
const path = require('path');
const expressStaticGzip = require('express-static-gzip');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static Unity files first
app.use('/games', express.static(path.join(__dirname, 'build/games')));

// Serve rest of build folder compressed
app.use('/', expressStaticGzip(path.join(__dirname, 'build'), {
    enableBrotli: true,
    orderPreference: ['br', 'gz'],
    index: false,
}));

// Fallback to index.html for all other routes (React SPA)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
