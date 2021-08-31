angular.module("listaTelefonica").factory("operadorasAPI", ($http, config) => {
    const urlOperadoras = config.baseURL + '/operadoras';

    var _getOperadoras = function() {
        return $http.get(urlOperadoras);
    }

    return {
        getOperadoras: _getOperadoras,
    }
});