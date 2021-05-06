const express = require('express');
const app = express();

const port = 3333;

const createRoute = (path, callback) => {
    const server = app.get(path, callback);
    server.listen(port);
}

createRoute('/invite', async(req, res) => {
    res.redirect('https://discord.com/oauth2/authorize?client_id=821431467312807997&scope=bot+applications.commands&permissions=8');
});