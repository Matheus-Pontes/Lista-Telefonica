angular.module("listaTelefonica").directive("uiAlert", () => {
    return {
        templateUrl: "view/alert.html",
        replace: true,
        restrict: "AE",
        scope: {
            titleMessageError: "@title",
            messageError: "=message",
        },
    };
}); 