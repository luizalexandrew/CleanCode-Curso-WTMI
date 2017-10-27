//g30: As funções devem fazer uma coisa só

public void pagamento(){

	for(funcionario f: funcionarios){

		if(f.isDiaDePagamento()){

			Pagamento pagamento = f.calculePagamento();

			f.enviarPagamento();

		}

	}

}