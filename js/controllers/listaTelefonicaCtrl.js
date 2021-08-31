
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatoAPI) {
    
    $scope.app = "Lista Telefônica";
    $scope.controleDeError = false;
    
    // Os contatos estão sendo chamados pelo servidor
    $scope.contatos = [];
    
    const carregarContatos = function() {
        contatoAPI.getContatos()
            .then(function(response) {
                const data = response.data;
                $scope.contatos = data;
                console.log("Conexão ao servidor feita com sucesso!!!");
                
        }, function(e) {
            console.log("Erro na conexção com o servidor!!!");
            $scope.controleDeError = true;
        });
    };

    const deletandoContatoNoServer = (contatos) => {
        $scope.contatos = contatos.filter(contato => {
            if (!contato.selecionado){ 
                // contatoAPI.deleteContatos(contatos).then(contato => {
                //     console.log(contato);
                // }, function(e) {console.log(e)});

                return contato;  
            };
        });

    };

    $scope.apagarContatos = function (contatos) {
        deletandoContatoNoServer(contatos)
    };

    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };

    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };
    
    carregarContatos();

});