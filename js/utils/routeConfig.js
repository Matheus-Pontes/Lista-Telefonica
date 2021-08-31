angular.module("listaTelefonica").config(function ($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');

    $routeProvider.when("/contatos", {

        templateUrl: 'view/contatos.html',
        controller: 'listaTelefonicaCtrl',

    });

    $routeProvider.when("/novoContato", {
        templateUrl: 'view/novoContato.html',
        controller: 'novoContatoCtrl',
        resolve: {
            operadoras: function(operadorasAPI) {
                return operadorasAPI.getOperadoras();
            }
        }
    });

    $routeProvider.when("/detalhesContato/:nome", {
        controller: "detalhesContatoCtrl",
        templateUrl: "view/detalhesContato.html",
    });

    $routeProvider.when("/error", {
        templateUrl: "view/error.html",
    });

    $routeProvider.otherwise({ redirectTo: "/contatos" });
});