app.controller('userctrl', ['$scope', function($scope){




$scope.registerUser = function() {
	//retrieve data input from the form
	var registerUser = $scope.username
	var registerPassword = $scope.password
	var newUser = {
	username:registerUser, 
	password:registerPassword}

	reglist.push(newUser)
	console.log(reglist)


}

}])