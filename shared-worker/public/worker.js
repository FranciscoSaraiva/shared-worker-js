console.log('Shared worker started');

const ports = [];

onconnect = function (e) {
    const port = e.ports[0];
    ports.push(port);

    port.onmessage = function (e) {
        console.log('Received ping from tab: ', e.data);
        broadcastMessage('Pong');
    };
}

function broadcastMessage(message) {
    ports.forEach(port => {
        port.postMessage(message);
    });
}