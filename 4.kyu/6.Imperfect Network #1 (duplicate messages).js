var message = {};

function NetworkClient(sendFunction, callback) {
	this.sendFunction = sendFunction;
	this.callback = callback;
}

NetworkClient.prototype.send = function(data) {
	console.log('send --' + data + this);
	console.log(message['s' + data]);
	if (!message['s' + data + this]) {
		message['s' + data] = 1;
		this.sendFunction(data);
	}
};

NetworkClient.prototype.recv = function(data) {
	if (!message['r' + data + this]) {
		message['r' + data] = 1;
		this.callback(data);
	}
};