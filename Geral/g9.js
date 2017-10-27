//G9: Código morto

function getData() {
	try{
		return new Date();
	}catch(err){
		console.log(err);
		return err
	}
}