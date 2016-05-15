var salDia = 0, dLab=0, cdad=0;
var txt2 = "Monto total";
var txt3=[];
var mont=[];
	$(function(){
		var parametros = cargarParametros();
		$("#ingresoSalario").val(parametros.salLoad);
		$("#cajaAho").val(parametros.cajaLoad);
		$("#generar").on("click", function(){
			salDia = $("#ingresoSalario").val();
			dLab = $("#dLab").val();
			cdad = $("#cajaAho").val();
			diaSelc();

			for(var i=0; i<txt3.length; i++){
			$("<tr><td>"+txt3[i]+"</td><td>"+mont[i]+"</td></tr>").appendTo("#tabla tbody");
			$("#panel").removeAttr("style");}
		});

		$("#boton-guardar").on("click", guardarParametros);
	});
	
function push(item){
	txt3.push(item);
}

function pushMont(valor){
	valor = parseFloat(valor);
	valor = valor.toFixed(2);
	mont.push(valor);
}

function diaSelc(){
	switch ($("#rotacion4x4").val()){
		case "Lun-Mar-Mie-Jue":	
		calcRot_16_17_18(salDia, dLab, cdad);
		break;

		case "Mar-Mie-Jue-Vie": 
		calcRot_16_17_18(salDia, dLab, cdad);
		break;

		case "Mie-Jue-Vie-Sab": 
		calcRot_16_17_18(salDia, dLab, cdad);
		break;

		case "Jue-Vie-Sab-Dom": 
		calcRot_19(salDia, dLab, cdad);
		break;

		case "Vie-Sab-Dom": 
		calcRot_20(salDia, dLab, cdad);
		break;

		case "Sab-Dom-Lun": 
		calcRot_21(salDia, dLab, cdad);
		break;

		case "Dom-Lun-Mar": 
		calcRot_22(salDia, dLab, cdad);
		break;

		case "Lun-Mar-Mie": calcRot_23(salDia, dLab, cdad);
		break;
	}
}
