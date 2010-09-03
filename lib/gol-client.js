var message_actions = {
	log: function(message) {
	  console.group('Client Received Message');
	  console.log( message );
	  console.groupEnd();
	}
}

$(function() {
	var context = document.getElementById('gol_canvas').getContext('2d')
	var canvas = new GoLCanvas(context, 50, 401)
	canvas.clear()
	
	message_actions.draw = function(delta) {
		canvas.draw(delta)
	}
	
	var worker = new Worker('./lib/gol-worker.js')
	
	worker.addEventListener('message', function (event) {
		message_actions[event.data.action](event.data.data)
	}, false);
})