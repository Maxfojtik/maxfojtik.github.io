
// var wsUri = "ws://localhost:12389"; // Localhost
var wsUri = "ws://192.168.1.42:8765"; // Max's
function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}
class BackendConnection {
	constructor() {
		this.connectionError = false;
		this.websocket = new WebSocket(wsUri);
		var self = this;
		this.websocket.onopen = function(evt) { self.onOpen(evt) };
		this.websocket.onclose = function(evt) { self.onClose(evt) };
		this.websocket.onmessage = function(evt) { self.onMessage(evt) };
		this.websocket.onerror = function(evt) { self.onError(evt) };
	}

	onOpen(evt) {
		console.log("CONNECTED");
	}

	onClose(evt) {
		console.log("DISCONNECTED");
	}

	onMessage(evt) {
		console.log('<-: ' + evt.data);
		var params = evt.data.split(":");
		if(params[0]=="Message")
		{
			alert(params[1]);
		}
		if(params[0]=="setProgress")
		{
			setProgress(parseInt(params[1]));
		}
		if(params[0]=="display")
		{
			$(".access"+params[1]).show();
		}
		if(params[0]=="User")
		{
			$(".userNum").text("You are the "+ordinal_suffix_of(parseInt(params[1]))+" person to visit");
		}
	}

	onError(evt) {
		console.log('ERROR: ' + evt.type);
	}

	send(message) {
		this.websocket.send(message);//sends a message to the server
		console.log("->: " + message);
	}
}
