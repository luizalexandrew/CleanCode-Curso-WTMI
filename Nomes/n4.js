//N4: Nomes não ambíguos

function total(produtos){
	let valorTotal = 0;
	
	if(produtos){
		produtos.forEach(function(item){
						
			if(item.Venda.isManual){
				if(!item.Venda.precoManual)
					item.Venda.precoManual = 0
	   				valorTotal += item.Venda.precoManual * item.Venda.quantidade;
	           	}else{
	           		valorTotal += item.Venda.preco * item.Venda.quantidade;
	           	}
			})
		return valorTotal; 
	}
	return 0;
}