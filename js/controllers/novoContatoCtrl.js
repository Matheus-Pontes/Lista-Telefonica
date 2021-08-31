
angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope,  serialGenerator, operadoras) {
    $scope.operadoras = operadoras.data;
    $scope.app = "Novo Contato";

    const postandoNovoContatoESalvandoNoServidor = (contato) => {
        contatoAPI.postContatos(contato).then(response => {
            console.log(response.config.data);

            $scope.contatos.push(angular.copy(contato));
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
        },  function(e) {

        });
    }

    $scope.adicionarContato = function (contato) {
        $scope.contato.serial = serialGenerator.generate();
        $scope.contato.data = new Date();
        postandoNovoContatoESalvandoNoServidor(contato);
    };

});