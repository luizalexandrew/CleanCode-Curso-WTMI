// C5: Código como comentário

function convertData(){
	let options = {weekday: "long", year: "numeric", month: "long", day: "numeric", hour: '2-digit', minute:'2-digit'};

	// return new Date(timestamp).toLocaleString('pt-BR', {weekday: "long", year: "numeric", month: "long"});
	return new Date(timestamp).toLocaleString('pt-BR', options);
}