/*------Variables para calulos-----------------------------------------------------------------------------------------------------------*/
var diasLab=0, salDiario=0, salario=0, cajaAhorroD=0, prevCompNoc=0, tiempoViaje=0, cRotS44Diu=0, cRotS44Noc=0;
var bonoNoc=0, diaLib=0, ahorroOrd=0, compFDSN=0, compFDSD=0, suma=0, primaDomDiu=0, primaDomNoc=0, descLegSabEqu_norm=0;
var descLegSabEqu_dev=0, descLegSabEqu_total=0, descLegDomEqu_dev=0, descLegDomEqu_norm=0, descLegDomEqu_sabF=0, sobTiem=0, asisPerf=0;
var descLegDomEqu_total=0, diaFeriado=0, gesDes=0, cumplimiento=0, diasInhab=0, stLibreDiu=0, stDescansoDiu=0, stLibreNoc=0, stDescansoNoc=0;
var salLoad=0, cajaLoad=0, totalTotal=0;
/*------Variables para calulos-----------------------------------------------------------------------------------------------------------*/

function calcRot_16_17_18(sd, dlab, cdad){
	salario = sd * dlab;
	cajaAhorroD = sd * (cdad/100);
	diasLab = dlab;
	push("Salario");
	pushMont(salario);
	PrevCompNoc(sd, cajaAhorroD);
	TiempoViaje(sd, cajaAhorroD);
	CompRotSem44Diu(sd, cajaAhorroD);
	CompRotSem44Noc(sd, cajaAhorroD);
	BonoNocturno(sd, cajaAhorroD);
	DiaLibre(sd, cajaAhorroD, 1);
	AhorroOrd(sd);
	DescLegSabEqu(sd, cajaAhorroD);
	DescLegDomEqu(sd, cajaAhorroD);
}

function calcRot_19(sd, dlab, cdad){
	salario = sd * dlab;
	cajaAhorroD = sd * (cdad/100);
	diasLab = dlab;
	push("Salario");
	pushMont(salario);
	CompTraFinSemNoc(sd, cajaAhorroD);
	PrimaDomNoc(sd, cajaAhorroD);
	PrevCompNoc(sd, cajaAhorroD);
	TiempoViaje(sd, cajaAhorroD);
	CompRotSem44Diu(sd, cajaAhorroD);
	CompRotSem44Noc(sd, cajaAhorroD);
	BonoNocturno(sd, cajaAhorroD);
	DiaLibre(sd, cajaAhorroD, 1);
	AhorroOrd(sd);
	DescLegSabEqu(sd, cajaAhorroD);
	DescLegDomEqu(sd, cajaAhorroD);
}

function calcRot_20(sd, dlab, cdad){
	salario = sd * dlab;
	cajaAhorroD = sd * (cdad/100);
	diasLab = dlab;
	push("Salario");
	pushMont(salario);
	TiempoViaje(sd, cajaAhorroD);
	PrimaDomNoc(sd, cajaAhorroD);
	BonoNocturno(sd, cajaAhorroD);
	DiaLibre(sd, cajaAhorroD, 2);
	DescLegSabEqu(sd, cajaAhorroD);
	DescLegDomEqu(sd, cajaAhorroD);
}

function calcRot_21(sd, dlab, cdad){
	salario = sd * dlab;
	cajaAhorroD = sd * (cdad/100);
	diasLab = dlab;
	push("Salario");
	pushMont(salario);
	TiempoViaje(sd, cajaAhorroD);
	PrimaDomDiu(sd, cajaAhorroD);
	BonoNocturno(sd, cajaAhorroD);
	DiaLibre(sd, cajaAhorroD, 2);
	DescLegSabEqu(sd, cajaAhorroD);
	DescLegDomEqu(sd, cajaAhorroD);
}

function calcRot_22(sd, dlab, cdad){
	salario = sd * dlab;
	cajaAhorroD = sd * (cdad/100);
	diasLab = dlab;
	push("Salario");
	pushMont(salario);
	TiempoViaje(sd, cajaAhorroD);
	PrevCompNoc(sd, cajaAhorroD);
	PrimaDomDiu(sd, cajaAhorroD);
	BonoNocturno(sd, cajaAhorroD);
	DiaLibre(sd, cajaAhorroD, 2);
	DescLegSabEqu(sd, cajaAhorroD);
	DescLegDomEqu(sd, cajaAhorroD);
}

function calcRot_23(sd, dlab, cdad){
	salario = sd * dlab;
	cajaAhorroD = sd * (cdad/100);
	diasLab = dlab;
	push("Salario");
	pushMont(salario);
	TiempoViaje(sd, cajaAhorroD);
	PrevCompNoc(sd, cajaAhorroD);
	BonoNocturno(sd, cajaAhorroD);
	DiaLibre(sd, cajaAhorroD, 2);
	DescLegSabEqu(sd, cajaAhorroD);
	DescLegDomEqu(sd, cajaAhorroD);
}

function salarioTotal(){
	totalTotal = salario+prevCompNoc+tiempoViaje+cRotS44Diu+cRotS44Noc+bonoNoc+diaLib+ahorroOrd+compFDSN+
				 compFDSD+primaDomDiu+primaDomNoc+descLegSabEqu_total+descLegDomEqu_total;
	push("Total");
	pushMont(totalTotal);
}

//-------------------------------------------------
//------   Calculos   -----------------------------
//-------------------------------------------------
function PrevCompNoc(sal, cda){
	sal = parseFloat(sal);
	cda = parseFloat(cda);

	prevCompNoc = ((sal + cda)/5.83)*0.63*11;

	push("Prevision compensatoria nocturna");
	pushMont(prevCompNoc);
}

function TiempoViaje(sal, cda){
	sal = parseFloat(sal);
	cda = parseFloat(cda);

	tiempoViaje = ((sal+cda)/5.83)*2.5;

	push("Tiempo de viaje");
	pushMont(tiempoViaje);
}

function CompRotSem44Diu(sal, cda){
	sal = parseFloat(sal);
	cda = parseFloat(cda);

	cRotS44Diu = ((sal+cda)/7)*2.41*2;

	push("Compensacion rotacion semana 44 horas diurnas");
	pushMont(cRotS44Diu);
}

function CompRotSem44Noc(sal, cda){
	sal = parseFloat(sal);
	cda = parseFloat(cda);

	cRotS44Noc = ((sal+cda)/5.83)*2.75*2;

	push("Compensacion rotacion semana 44 horas nocturnas");
	pushMont(cRotS44Noc);
}

function BonoNocturno(sal, cda){
	sal = parseFloat(sal);
	cda = parseFloat(cda);

	bonoNoc = ((sal+cda)/5.83)*0.65*24;

	push("Bono nocturno");
	pushMont(bonoNoc);
}

function DiaLibre(sal, cda, dlib){
	sal = parseFloat(sal);
	cda = parseFloat(cda);

	diaLib = sal*dlib;

	push("Dia libre");
	pushMont(diaLib);
}

function AhorroOrd(sal){
	sal = parseFloat(sal);

	ahorroOrd = (sal*7)*0.1;

	push("Ahorro ordinario");
	pushMont(ahorroOrd);
}

function CompTraFinSemNoc(sal, cda){
	sal = parseFloat(sal);
	cda = parseFloat(cda);

	compFDSN = ((sal+cda)/5.83)*0.63*1.5;

	push("Compensacion trabajo fin de semana nocturno");
	pushMont(compFDSN);
}

function CompTraFinSemDiu(sal, cda){
	sal = parseFloat(sal);
	cda = parseFloat(cda);

	compFDSD = ((sal+cda)/7)*1.5;

	push("Compensacion trabajo fin de semana diurno");
	pushMont(compFDSD)
}

function PrimaDomDiu(sal, cda){
	sal = parseFloat(sal);
	cda = parseFloat(cda);

	primaDomDiu = ((sal+cda)/7)*2.85*12;

	push("Prima dominical diurna");
	pushMont(primaDomDiu);
}

function PrimaDomNoc(sal, cda){
	sal = parseFloat(sal);
	cda = parseFloat(cda);

	primaDomNoc = ((sal+cda)/5.83)*2.85*12;

	push("Prima dominical nocturna");
	pushMont(primaDomNoc);
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

	push("Descanso legal sabado equivalente");
	pushMont(descLegSabEqu_total);
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
		descLegDomEqu_total = descLegDomEqu_dev;
	}

	else if(descLegDomEqu_sabF > descLegDomEqu_norm && descLegDomEqu_sabF > descLegDomEqu_dev){
		descLegDomEqu_total = descLegDomEqu_sabF;
	}

	push("Descanso legal domingo equivalente");
	pushMont(descLegDomEqu_total);
}

//---------------------------------------------------------------------------------------------------------------------------------------
//---------- Almacenaje y retiro de datos con LocalStorage ------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------

function guardarParametros(){
		var salarioGuardado = $("#ingresoSal").val();
		var cajaAhorro = $("#CdA").val();
		localStorage.setItem("SalDia", salarioGuardado);
		localStorage.setItem("CajaA", cajaAhorro);
	}


function cargarParametros(){
	this.salLoad = localStorage.getItem("SalDia");
	this.cajaLoad = localStorage.getItem("CajaA");
	return this;
}
