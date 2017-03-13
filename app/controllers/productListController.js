app
  .constant('productListActiveClass', 'btn-primary')
  .constant('productListPageCount', 3)
  .controller('productListCtrl', ['$scope', '$filter', 'productListActiveClass',
    'productListPageCount', function($scope, $filter, productListActiveClass, productListPageCount){

  var self = this;
  var selectedCategory = null;

  self.selectedPage = 1;
  self.pageSize = productListPageCount;

  self.selectCategory = function(newCategory){
    selectedCategory = newCategory;
    self.selectedPage = 1;
  };

  self.selectPage = function( newPage ){
    self.selectedPage = newPage;
  };

  self.categoryFilterFn = function (product) {
    return selectedCategory == null || product.category == selectedCategory;
  };

  self.getCategoryClass = function( category ){
    return selectedCategory == category ? productListActiveClass : "";
  };

  self.getPageClass = function( page ){
    return self.selectedPage == page ? productListActiveClass : "";
  };

}]);
