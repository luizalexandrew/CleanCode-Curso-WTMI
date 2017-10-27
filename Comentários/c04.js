//C4: Comentário mal escrito


/*
Função responsável em receber um objeto e retornar seu clone
*/

function cloneObject(object){

    if (object === null || typeof object !== 'object') {
        return object;
    }
    
    var temp = object.constructor();
    for (var key in object) {
        temp[key] = clone(object[key]);
    }
          
    return temp;

}