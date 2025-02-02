const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    //return index.html
    res.sendFile(__dirname + '/index.html');
}
);

app.get('/events', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    let i = 0;
    const interval = setInterval(() => {
        res.write(`data: event number ${i}\n\n`);
        i++;
        if (i === 5) {
            clearInterval(interval);
            res.end();
        }
    }, 5000);
});


server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
