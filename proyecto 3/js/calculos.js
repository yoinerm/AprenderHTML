/*------Variables para calulos-----------------------------------------------------------------------------------------------------------*/
var diasLab=0, salDiario=0, salario=0, cajaAhorroD=0, prevCompNoc=0, tiempoViaje=0, cRotS44Diu=0 cRotS44Noc=0;
var bonoNoc=0, diaLib=0, ahorroOrd=0, compFDSN=0, compFDSD=0 suma=0, primaDomDiu=0, primaDomNoc=0, descLegSabEqu_norm=0;
var descLegSabEqu_dev=0, descLegSabEqu_total=0, descLegDomEqu_dev=0, descLegDomEqu_norm=0, descLegDomEqu_sabF=0 sobTiem=0, asisPerf=0;
var descLegDomEqu_total=0, diaFeriado=0, gesDes=0 cumplimiento=0, diasInhab=0, stLibreDiu=0,stDescansoDiu=0, stLibreNoc=0, stDescansoNoc=0;
/*------Variables para calulos-----------------------------------------------------------------------------------------------------------*/

function calcRot_16_17_18(dl){

}

function calcRot_19(){

}

function calcRot_20(){

}

function calcRot_21(){

}

function calcRot_22(){

}

function calcRot_23(){

}

//-------------------------------------------------
//------   Calculos   -----------------------------
//-------------------------------------------------
function PrevCompNoc(sal, cda){
	sal = parseFloat(sal);
	cda = parseFloat(cda);

	prevCompNoc = ((sal + cda)/5.83)*0.63*11;
	alert("1");
	push("Prevision compensatoria nocturna");
}

function TiempoViaje(sal, cda){
	sal = parseFloat(sal);
	cda = parseFloat(cda);

	tiempoViaje = ((sal+cda)/5.83)*2.5;
}

function CompRotSem44Diu(sal, cda){
	sal = parseFloat(sal);
	cda = parseFloat(cda);

	cRotS44Diu = ((sal+cda)/7)*2.41*2;
}

function CompRotSem44Noc(sal, cda){
	sal = parseFloat(sal);
	cda = parseFloat(cda);

	cRotS44Noc = ((sal+cda)/5.83)*2.75*2;
}

function BonoNocturno(sal, cda){
	sal = parseFloat(sal);
	cda = parseFloat(cda);

	bonoNoc = ((sal+cda)/5.83)*0.65*24;
}

function DiaLibre(sal, cda, dlib){
	sal = parseFloat(sal);
	cda = parseFloat(cda);

	diaLib = sal*dlib;
}

function AhorroOrd(sal){
	sal = parseFloat(sal);

	ahorroOrd = (sal*7)*0.1;
}

function CompTraFinSemNoc(sal, cda){
	sal = parseFloat(sal);
	cda = parseFloat(cda);

	compFDSN = ((sal+cda)/5.83)*0.63*1.5;
}

function CompTraFinSemDiu(sal, cda){
	sal = parseFloat(sal);
	cda = parseFloat(cda);

	compFDSD = ((sal+cda)/7)*1.5;
}

function PrimaDomDiu(sal, cda){
	sal = parseFloat(sal);
	cda = parseFloat(cda);

	primaDomDiu = ((sal+cda)/7)*2.85*12;
}

function PrimaDomNoc(sal, cda){
	sal = parseFloat(sal);
	cda = parseFloat(cda);

	primaDomNoc = ((sal+cda)/5.83)*2.85*12;
}

function DescLegSabEqu(sal, cda){
	sal = parseFloat(sal);
	cda = parseFloat(cda);

	descLegSabEqu_norm = ((sal+prevCompNoc+tiempoViaje+cRotS44Diu+cRotS44Noc+compFDSD+compFDSN+bonoNoc+primaDomDiu+primaDomNoc+diaLib)/diasLab)+ahorroOrd;
	descLegSabEqu_dev = ((sal+prevCompNoc+tiempoViaje+cRotS44Diu+cRotS44Noc+compFDSD+compFDSN+bonoNoc+diaLib)/5)+ahorroOrd;

	if(descLegSabEqu_norm > descLegSabEqu_dev){
		descLegSabEqu_total = descLegSabEqu_norm;
	}

	else{
		descLegSabEqu_total = descLegSabEqu_dev;
	}
}

function DescLegDomEqu(sal, cda){
	sal = parseFloat(sal);
	cda = parseFloat(cda);

	descLegDomEqu_dev = ((sal+prevCompNoc+tiempoViaje+cRotS44Diu+cRotS44Noc+compFDSD+compFDSN+bonoNoc+primaDomDiu+primaDomNoc+diaLib+descLegSabEqu_dev)/6)+ahorroOrd;
	descLegDomEqu_norm = ((sal+prevCompNoc+tiempoViaje+cRotS44Diu+cRotS44Noc+compFDSD+compFDSN+bonoNoc+primaDomDiu+primaDomNoc+diaLib)/diasLab)+ahorroOrd;
	descLegDomEqu_sabF = descLegSabEqu_dev + ahorroOrd;

	if(descLegDomEqu_norm > descLegDomEqu_dev && descLegDomEqu_norm > descLegDomEqu_sabF){
		descLegDomEqu_total = descLegDomEqu_norm;
	}

	else if(descLegDomEqu_dev > descLegDomEqu_norm && descLegDomEqu_dev > descLegDomEqu_sabF){
		descLegDomEqu_total = descLegSabEqu_dev;
	}
}
