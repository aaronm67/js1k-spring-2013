// create an element and append it to the document
function createElement(el) {
	var a = document.createElement(el);
	return a;
}

function appendElement(el) {
	b.insertBefore(el, c);
}

URL = window.URL || window.webkitURL;
navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia || navigator.msGetUserMedia;

var audio = createElement("audio");
appendElement(audio);

var video = createElement("video");
appendElement(video);
navigator.getUserMedia({ audio: true, video: true }, function(stream) {
	console.log(stream);
	video.src = URL.createObjectURL(stream);
});