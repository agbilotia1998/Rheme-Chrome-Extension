
chrome.runtime.onInstalled.addListener(function() {
	chrome.storage.local.set({'activate': 'False'}, function() {
		console.log('Deactivated');
	});
});

chrome.runtime.onInstalled.addListener(function(){
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		chrome.declarativeContent.onPageChanged.addRules([{
			conditions: [new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {}
			})
			],
			actions: [new chrome.declarativeContent.ShowPageAction()]
		}]);
	});
});

chrome.tabs.onUpdated.addListener(function(tabId, info) {
		var storage = chrome.storage.local;
		if(info.status == 'complete'){
			storage.get('activate',function(result){
				if(result.activate == 'True'){
					chrome.tabs.getSelected(null,function(tab) {
						var tablink = tab.url;
						//alert(tablink);
						$.ajax({
							method: "GET",
							url: 'https://7f6e3dec.ngrok.io/log',
							headers:{'Access-Control-Allow-Origin': '*'},
							data: { link:tablink,time : Math.random(), visitors: Math.floor(Math.random()*5) },
							contentType: "application/json",
							success:function(result){
								console.log(result);
							}
						});
						
					});
				}
			});
		}
});
