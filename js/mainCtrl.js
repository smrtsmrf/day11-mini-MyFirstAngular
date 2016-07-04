angular.module('friendsList').controller('mainCtrl', function($scope) {
	$scope.friends = ['scott', 'emily', 'adara', 'karly'];
	$scope.addFriend = function(newFriend) {
		$scope.friends.push(newFriend);
		
	}
})