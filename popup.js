var activateTracking = document.getElementById('activateTracking');
var storage = chrome.storage.local;

window.onload = function(){
	storage.get('activate', function(result){
		if(result.activate == 'True'){
			activateTracking.innerHTML = 'Activated';
		}
		else{
			activateTracking.innerHTML = 'Activate';
		}
	});
};

activateTracking.onclick = function() {
	var obj = {};
	obj.activate = 'True';
	storage.set(obj);
	storage.get('activate', function(result){
		if(result.activate == 'True'){
			activateTracking.innerHTML = 'Activated';
		}
		else{
			activateTracking.innerHTML = 'Activate';
		}
	});
};



