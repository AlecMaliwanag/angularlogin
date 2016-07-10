app.controller('myctrl', ['$scope', function($scope){


$scope.loginUser = function() {
	//retrieve data input from the form
	var loginUser = $scope.loginUserName
	var loginPassword = $scope.loginPassword
	
	//loop through all the user objects and confirm if the username and passwords are correct
	for(i = 0; i < reglist.length; i++) {
		if(loginUser == reglist[i].username &&  loginPassword == reglist[i].password) {
			console.log(loginUser + " is logged in!!!")
			return
		}
	}

	//error if username and password do not match
	console.log("incorrect username or password")
}

	
}])