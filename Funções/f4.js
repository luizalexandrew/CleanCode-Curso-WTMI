//F4: Função morta

_convertDate: function(timestamp){
				var options = {weekday: "long", year: "numeric", month: "long", day: "numeric", hour: '2-digit', minute:'2-digit'};
				return new Date(timestamp).toLocaleString('pt-BR', options);
			},


function convertDate(timestamp){
	var options = {weekday: "long", year: "numeric", month: "long", day: "numeric", hour: '2-digit', minute:'2-digit'};
	return new Date(timestamp).toLocaleString('pt-BR', options);
}

function convertJulianToGregorianCalendar(timestamp){
	...
	return Date(...)
}