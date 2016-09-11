
app.directive('productReview', function(){
  return{
    restrict:'E',
    templateUrl:"assets/js/directives/views/product-review.html"
  };
});
app.directive('productSpec', function(){
    return{
      restrict:'E',
      templateUrl:"assets/js/directives/views/product-specs.html"
    };
});
app.directive('productDescription', function(){
  return {
    restrict:'A',
    templateUrl:"assets/js/directives/views/product-description.html"
  };
});

app.directive('productTabs', function(){
  return {
    restrict:'E',
    templateUrl:"assets/js/directives/views/product-tabs.html",
    controller:function(){
    this.tab=1;
    this.selectTab=function(setTab){
      this.tab=setTab;
    }
    this.isActive=function(setTab){
      if(this.tab===setTab)
        return true;
      else return false;
    }
    },
    controllerAs: "data"
  };
});

app.directive('galleryImgs', function(){
  return{
    restrict:'E',
    templateUrl:"assets/js/directives/views/product-gallery.html",
    controller:function(){
    this.current=0;
    this.hasImages=function(gallery){
      if(gallery.length>0)
        return true;
      else return false;
    }
    this.setCurrent=function(currentPic){
    this.current=currentPic;
    }
    },
    controllerAs:"gallery"
  };
});