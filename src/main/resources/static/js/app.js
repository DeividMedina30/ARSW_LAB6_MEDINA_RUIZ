var modulo = (function(){
    var _author;
    var _bluePrints = [];
    var _modulo = apimock;

    var getBluePrintsByAuthor = function(){
        _bluePrints = [];
        $("#idTableBluePrints > tbody").empty(); //elimina todos los nodos secundarios y el contenido de los elementos seleccionados.
        _author = document.getElementById("inputAuthor").value;
        setAuthorBluePrint(_author);
        setBlueprints(_author);
    }

    var setAuthorBluePrint = function(nameBluePrint){
        $("#idNameBluePrintTitulo").text(nameBluePrint + "´s blueprints:")
    }

    var setBlueprints = function(author){
        _modulo.getBlueprintsByAuthor(author, _getNameAndSize)
    }

    var _getNameAndSize = function(blueprintsArray){
        _blueprints = blueprintsArray.map(blueprint => [blueprint.name, blueprint.points.length]);
        _setTable(_blueprints);
    }

    var _setTable = function(blueprintsArray){
        blueprintsArray.map(blueprint => $("table tbody").append("<tr><td>"+ (blueprintsArray.indexOf(blueprint)+1) +"</td><td>" + blueprint[0] + "</td><td>" + blueprint[1] + "</td><td><button type='button' class='btn btn-outline-success' id="+blueprint[0] +" "+ "type='button' onclick=module.getBluePrintToShow(this)>Open</button></td></tr>"));
                var numArray = blueprintsArray.map(blueprint => blueprint[1]);
        $("#totalPoints").text(" Total user points: " + numArray.reduce((previousValue, currentValue) => previousValue + currentValue, 0));
    }

    var getBluePrintToShow = function(button){
        /*idBlueprint = button.id;
        console.log("ID DEL PLANO " + idBlueprint)
        _module.getBlueprintsByNameAndAuthor(_author,idBlueprint,_drawInCanvas);*/
    }

    return{
        getBluePrintsByAuthor:getBluePrintsByAuthor,
        getBluePrintToShow:getBluePrintToShow
    };
})();