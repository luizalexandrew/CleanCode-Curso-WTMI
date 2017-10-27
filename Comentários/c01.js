// Informações inapropriadas

/*
@Autor: Luiz Alexandre
Documento: 115
Versão: 1.0.1

O metodo toHash recebe uma url e a direção redirecionando o usuário

*/

function toHash(hash, direcao){
    var options = {
        "direction": direcao, // left|right|up|down
        "duration": 250
    };

    if(options.direction) {
        try {
            window.plugins.nativepagetransitions.slide(options);
        } catch (erro) {
            console.log("[Sem suporte a Native Transition no Navegador]");
        }
    }
    
    window.location.hash = hash;

    if(event)
        event.preventDefault();

}

