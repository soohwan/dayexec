		function newPage(){
			var thename=document.getElementById("yourname").value;
			document.open();
			document.write("<h1>welcome!</h1>");
			document.write("hello. "+ thename + ", and welcome to  my page!");
			document.close();
		}