var txt = ["Hola", "Salario", "Bono"];
var txt2 = "Monto total";

	$(function(){
		// $("#generar").on("click", function(){
		// 	$("#tabla tbody tr:eq(0)").clone().removeClass("fila-base").appendTo("#tabla tbody");
		// 	$("#panel").removeAttr("style");
		// });

		$("#generar").on("click", function(){
			$("<tr><td>"+txt[2]+"</td><td>"+txt2+"</td></tr>").appendTo("#tabla tbody");
			$("#panel").removeAttr("style");
		});
	});
