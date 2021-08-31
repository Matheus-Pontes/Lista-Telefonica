angular.module("uiAccordion", []);
angular.module("uiAccordion").run(function($templateCache) {

    /* Na nossa view não existe o arquivo accordion.html.
        Porem, com esse metodo, meio que é criado e colocado o código lá

        Usando template strinng (``) para identar o código HTML.
    */ 

    $templateCache.put('view/accordion.html', `
        <div class="ui-accordion-title" ng-click="open()">
            {{ title }} 
        </div>
        <div class="ui-accordion-content" ng-show="isOpened" ng-transclude></div>`
    );
});

angular.module("uiAccordion").directive("uiAccordions", function() {
    return {
        controller: function($scope, $element, $attrs) {
            var accordions = [];

            this.registerAccordion = function(accordion) {
                accordions.push(accordion);
            };

            this.closeAll = function() {
                accordions.forEach( accordion => {
                    accordion.isOpened = false;
                });   
            }
        },
    };
});

angular.module("uiAccordion").directive("uiAccordion", function() {
    return {
        templateUrl: "view/accordion.html",
        transclude: true,
        scope: {
            title: "@"
        }, 
        require: "^uiAccordions",
        link: function( scope, element, attrs, crtl) {
            crtl.registerAccordion(scope);
            scope.open = function() {
                crtl.closeAll()
                scope.isOpened=!scope.isOpened;
            };
        },  
    }
})