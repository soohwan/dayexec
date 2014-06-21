function getpayment(){
	var thepayment=250;
	thepayment += (this.seats == "leather")? 100 : 50;
	thepayment += (this.engine == "v-8")? 150 : 75;
	thepayment += (this.theradio == "cd player")? 35 : 10;
	return thepayment;
}
function car(seats, engine, theradio){
	this.seats=seats;
	this.engine=engine;
	this.theradio=theradio;
	this.payment=getpayment;
}

var workCar = new car("cloth","v-6", "tape deck");
var funCar = new car("leather","v-8", "cd player");
var customCar = new car(funCar.seats, workCar.engine, funCar.theradio);
var workCarPayment = workCar.payment();
var funCarPayment = funCar.payment();
var customCarPayment = customCar.payment();

document.write("<h2>the information on the cars you requested </h2>");
document.write("<strong> fun car : </strong>");
document.write(workCar.seats + "," + workCar.engine + "," + workCar.theradio);
document.write("<br> <strong>payment : </strong> $" + workCarPayment);


