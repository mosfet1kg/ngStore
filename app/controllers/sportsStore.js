app.controller("sportsStoreCtrl", ['$scope', function($scope){
  var self = this;

  self.products = [
      {
        name: "Product #1", description: "A product", category: "Category #1", price: 100
      },
      {
        name: "Product #2", description: "A product", category: "Category #1", price: 110
      },
      {
        name: "Product #3", description: "A product", category: "Category #2", price: 210
      },
      {
        name: "Product #4", description: "A product", category: "Category #3", price: 202
      }
    ];


}]);