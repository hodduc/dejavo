$(document).ready(function(){

	function statusChangeCallback(response) {
		console.log('statusChangeCallback');
		console.log(response);
		// The response object is returned with a status field that lets the
		// app know the current login status of the person.
		// Full docs on the response object can be found in the documentation
		// for FB.getLoginStatus().
		if (response.status === 'connected') {
			// Logged into your app and Facebook.
			console.log('connected');
			registerOrLogin(response.authResponse.accessToken);
		} else if (response.status === 'not_authorized') {
			// The person is logged into Facebook, but not your app.
		} else {
			// The person is not logged into Facebook,
			// so we're not sure if they are logged into this app or not.
		}
	}

	function registerOrLogin(accessToken) {
		$.ajax({
			'method' : 'GET',
			'dataType' : 'json',
			'url' : '/social/auth/facebook/?access_token=' + accessToken,
			'success' : function(j) {
				// TODO update user status menu
				console.log(j);
			},
		});
	}

	window.fbAsyncInit = function() {
		FB.init({
			appId   : '274526142597066',
			xfbml   : true,
			status  : true,
			cookie  : true,
			version : 'v2.2'
		});

		FB.getLoginStatus(function(response) {
			statusChangeCallback(response);
		});
	};
});
