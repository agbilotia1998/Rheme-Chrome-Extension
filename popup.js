var activateTracking = document.getElementById('activateTracking');
activateTracking.onclick = function() {
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
		var url = tabs[0].url;
		alert(url);
		console.log(url);
		// $.ajax({
		// 	url:'https://google.com',
		// 	success:''
		// })
	});
};