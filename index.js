const express = require('express');
const Gamedig = require('gamedig');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/server-info', async (req, res) => {
    const { ip, port } = req.query;
    if (!ip || !port) {
        return res.status(400).json({ error: 'ip and port are required query params' });
    }
    try {
        // Selon ton jeu : cs16 (pour Counter-Strike 1.6), csgo (pour CS:GO), etc.
        const result = await Gamedig.query({
            type: 'cs16',
            host: ip,
            port: parseInt(port)
        });
        res.json({
            serverName: result.name,
            map: result.map,
            players: result.players.length,
            maxPlayers: result.maxplayers
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`API listening on port ${PORT}`);
});