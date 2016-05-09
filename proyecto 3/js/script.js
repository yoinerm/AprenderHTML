var txt = ["Hola", "Salario", "Bono"];
var txt2 = "Monto total";
var txt3=[];
	$(function(){
		// $("#generar").on("click", function(){
		// 	$("#tabla tbody tr:eq(0)").clone().removeClass("fila-base").appendTo("#tabla tbody");
		// 	$("#panel").removeAttr("style");
		// });

		$("#generar").on("click", function(){
			for(var i=0; i>txt3.length; i++){
			$("<tr><td>"+txt3[i]+"</td><td>"+txt2+"</td></tr>").appendTo("#tabla tbody");
			$("#panel").removeAttr("style");}
		});
	});
	
function push(item){
	txt3.push(item);
}
