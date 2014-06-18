/**


 */
function sum(){
	var i, _sum = 0;
		for(i=0;i<arguments.length; i++){
			document.write(i+' : '+ araguments[i] + ' <br />');
		_sum+= arguments[i];
		}
		return _sum;
}
document.write('result : '+ sum(1,2,3,4));
