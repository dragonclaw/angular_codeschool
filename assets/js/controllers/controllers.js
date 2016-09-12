app.controller('StoreController', ['$scope','gemJson', function($scope,gemJson){
	store=this;
  gemJson.success(function(data){
  store.products=data;
  });
}]);

app.controller('ReviewController', function($scope){
    this.review={};
    this.addReview=function(product){
      this.review.createdOn=Date.now();
      product.reviews.push(this.review);
      this.review={};
    }
    this.dating=function(){
      return Date.now();
    }
  });