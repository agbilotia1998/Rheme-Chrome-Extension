
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
		if(info.status == 'complete'){
			 chrome.tabs.getSelected(null,function(tab) {
				var tablink = tab.url;
				alert(tablink);
			 });
		}
	});
