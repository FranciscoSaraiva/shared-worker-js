    console.log('Shared worker is running');


const eventSource = new EventSource('http://localhost:3000/events');
eventSource.onmessage = (e) => {
    console.log('Message from client:', e.data);
    port.postMessage(e.data);
}
