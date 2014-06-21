function car(seats, engine, theRadio){
	this.seats = seats;
	this.engine = engine;
	this.theRadio = theRadio;
}

var workCar=new car("cloth","v6","tape deck");
var funCar=new car("leather","v6","cd-player");
var engineType= wor kCar.engine;
var seatType = workCar.seats;
var radioType = workCar.theRadio;

document.write("seatType "+ seatType + "<br>");
document.write("engineType "+ engineType + "<br>");
document.write("theRadioType "+ radioType + "<br>");

