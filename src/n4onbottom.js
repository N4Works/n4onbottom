"use strict";

;
(function(ng) {
  ng
    .module('n4OnBottom', [])
    .directive('n4OnBottom', [
      '$document',
      '$window',
      '$timeout',
      function($document, $window, $timeout) {
        return {
          restrict: 'A',
          scope: {
            onBottom: '&n4OnBottom'
          },
          compile: function(tElement, tAttrs) {
            return function(scope, element, attributes) {
              var timeout;
              attributes.$observe('onWindowBottom', function(onWindow) {
                if (/true/i.test(onWindow)) {
                  element.off('scroll');

                  $($window).on('scroll', function() {
                    $timeout.cancel(timeout);
                    if (($($window).scrollTop() + $($window).height()) === $($document).height()) {
                      timeout = $timeout(scope.onBottom, 1000);
                    }
                  });
                } else {
                  $($window).off('scroll');

                  element.on('scroll', function() {
                    $timeout.cancel(timeout);
                    if ((element.scrollTop() + element.innerHeight()) >= this.scrollHeight) {
                      timeout = $timeout(scope.onBottom, 1000);
                    }
                  });
                }
              });

              scope.$on('$destroy', function() {
                element.off('scroll');
                $($window).off('scroll');
              });
            };
          }
        };
      }
    ]);

}(angular))
