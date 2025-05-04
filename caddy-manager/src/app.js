const express = require('express');
const path = require('path');
const caddyApi = require('./api/caddy'); // Import the caddy API module

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Define routes for Caddy API
app.get('/api/caddy/config', async (req, res) => {
    try {
        const config = await caddyApi.getCaddyConfig();
        res.json(config);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch Caddy configuration' });
    }
});

app.post('/api/caddy/config', async (req, res) => {
    try {
        const updatedConfig = await caddyApi.updateCaddyConfig(req.body);
        res.json(updatedConfig);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update Caddy configuration' });
    }
});

app.get('/api/caddy/status', async (req, res) => {
    try {
        const status = await caddyApi.getCaddyStatus();
        res.json(status);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch Caddy status' });
    }
});

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});