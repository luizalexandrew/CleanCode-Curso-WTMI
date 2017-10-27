// C2: Comentário obsoleto


//Função responsável por fazer logout do sistema, recomendo o token do localstorage
function logout(){
    let config = document.querySelector('#config');
    config.auth = false;
    toHash('/', 'right');
}