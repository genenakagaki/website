'use strict';

angular.module('mainApp')
.animation('.animate-skill-hover', function() {
  return {
    addClass: function(element, className, doneFn) {
      if (element[0].className.search(/ng-hide/i) < 0) {
        var img = element.children()[0];
        TweenMax.to(img, 0.2, {
          width  : 100,
          height : 100,
          padding: "0 0 0",
          onComplete: doneFn
        });

        var span = element.children()[1];
        TweenMax.to(span, 0, {
          visibility: "visible",
          onComplete: doneFn
        });
      }
    },
    removeClass: function(element, className, doneFn) {
      if (element[0].className.search(/ng-hide/i) < 0) {
        var img = element.children()[0];
        TweenMax.to(img, 0.2, {
          width  : 50,
          height : 50,
          padding: "25px 0 25px", 
          onComplete: doneFn
        });
    
        var span = element.children()[1];
        TweenMax.to(span, 0, {
          visibility: "hidden", 
          onComplete: doneFn
        });
      }
    },
    setClass: function(element, addedClass, removedClass, doneFn) {
    }
  }
})
.animation('.ng-hide', function() {
  return {
    addClass: function(element, className, doneFn) {
      var img = element.children()[0];

      TweenMax.to(img, 0.5, {
        width  : 0,
        height : 0,
        padding: "25px 0 50px",
        onComplete: doneFn
      });
      
      TweenMax.to(element, 0, {
        display : "none",
        delay: 0.5, 
        onComplete: doneFn
      });
    },
    removeClass: function(element, className, doneFn) {
      var img = element.children()[0];

      TweenMax.to(img, 0.5, {
        width  : 50,
        height : 50,
        padding: "25px 0 25px",
        onComplete: doneFn
      });

      TweenMax.to(element, 0, {
        display : "inline-block",
        onComplete: doneFn
      });
    },
    setClass: function(element, addedClass, removedClass, doneFn) {
    }
  }
});