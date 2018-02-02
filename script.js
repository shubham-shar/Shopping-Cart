let app = angular.module('Firstapp',[]);

app.controller('appctrl', function($scope){
  $scope.list = ["Nothing in the list"];
  $scope.addItem = function() {
    $scope.errortext = "";
    if (!$scope.listitem) {
      $scope.errortext = "Please enter something to add.";
      return;
    }
    if ($scope.list.indexOf($scope.listitem) == -1) {
      if ($scope.list.indexOf("Nothing in the list") != -1){
        let x = $scope.list.indexOf("Nothing in the list");
        $scope.list.splice(x, 1);
      }
      $scope.list.push($scope.listitem);
    } else {
      $scope.errortext = "The item is already in your shopping list.";
    }
  }
  $scope.removeItem = function (x) {
      $scope.errortext = "";
      $scope.list.splice(x, 1);
      if($scope.list.length == 0){
        $scope.list.push("Nothing in the list");
      }
  }
});
