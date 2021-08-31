angular.module("serialGenerator",[]);

angular.module("serialGenerator").factory("serialGenerator", () => {
        
    const _generate = function() {
        
        var serial = "";
        
        while(serial.length < 10) { 
            serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
        }
        
        return serial;  
    }


    return {
        generate: _generate,
    };
});