angular.module("listaTelefonica").filter("ellipsis", function() {
    return function(input, size) {
        return input.length <= size ? input : input.substring(0, (size || 10)) + "...";
    };
});