var modulo = (function(){
    var authorBluePrint;
    var bluePrints = [];
    //var moduloApimock = apimock;

    var getBluePrintsByAuthor = function(){
        bluePrints = [];
        $("#idTableBluePrints > tbody").empty(); //elimina todos los nodos secundarios y el contenido de los elementos seleccionados.
        authorBluePrint = document.getElementById("inputAuthor").value;
        setAuthorBluePrint(authorBluePrint);
    }

    var setAuthorBluePrint = function(nameBluePrint){
        $("#idNameBluePrintTitulo").text(nameBluePrint + "´s blueprints:")
    }

    return{
        getBluePrintsByAuthor:getBluePrintsByAuthor
    };
})();