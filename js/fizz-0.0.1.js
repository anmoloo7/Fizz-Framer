//So that scroll always start from begin
window.onbeforeunload = function () {
	window.scrollTo(0, 0);
}
//run app from any other app
function runApp(app, side) {
	var frame = window.top.document.getElementById(side);
	frame.contentWindow.location.replace('../../index.html#home');
	frame.src = 'apps/' + app + '/index.html';
	window.top.location.assign('../../index.html#' + side);
}
//go to home directly from any app page stored directly in its index folder
function home() {
	window.top.location.replace('../../index.html#home');
}
//go back inside a app
function back() {
	if (window.top.location.hash == "#home") {
		if (confirm("Do you want to reload?")) {
			window.top.location.reload();
		}
	} else {
		history.back();
	}
}