angular.module('greetings', []);

angular.module('greetings').directive("welcome", function() {
  return {
    restrict: "E",
    template: "<div>Howdy there! You look splendid.</div>"
  }
});

angular.module('functionalities', [])
.directive("entering", function(){
 return function(scope, element) {
      element.bind("mouseenter", function(){
        console.log("Mouse has entered the div");
      })
    }
})

.directive("leaving",function(){
  
return function(scope,element){
  element.bind("mouseleave",function(){
    
    console.log("mouse has left the division")
  })
}

});