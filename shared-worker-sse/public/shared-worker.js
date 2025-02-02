console.log('Shared worker is running');

const ports = [];
const eventSource = new EventSource('http://localhost:3000/events');

eventSource.onmessage = (e) => {
    console.log('Message from server:', e.data);
    ports.forEach(p => p.postMessage(e.data));
};

onconnect = function (e) {
    const port = e.ports[0];
    ports.push(port);
};