angular.module("listaTelefonica").factory("contatoAPI", function($http, config) {
    const urlContatos = config.baseURL + '/contatos';

    var _getContatos = function() {
        return $http.get(urlContatos);
    };

    var _postContatos = function(contato) {
        return $http.post(urlContatos, contato);
    }

    var _deleteContatos = function(contato) {
        return $http({
            method: 'DELETE',
            url: urlContatos,
            data: {
                contato: contato, 
            },
            headers: {
                'Content-type': 'application/json;charset=utf-8',
            }
        });
        
    }

    return {
        getContatos: _getContatos,
        postContatos: _postContatos,
        deleteContatos: _deleteContatos,
    };
})