 var num1, num2, result, out;
 
 out = document.getElementById('out');

 function plus() {
 	num1 = document.getElementById('n1').value; 
 	num1 = parseInt(num1)
  	num2 = document.getElementById('n2').value;
  	num2 = parseInt(num2)

	out = document.getElementById('out').innerHTML = num1 + num2;
 }

  function minus() {
 	num1 = document.getElementById('n1').value; 
 	num1 = parseInt(num1)
  	num2 = document.getElementById('n2').value;
  	num2 = parseInt(num2)
  	
	out = document.getElementById('out').innerHTML = num1 - num2;
 }

  function multiplication() {
 	num1 = document.getElementById('n1').value; 
 	num1 = parseInt(num1)
  	num2 = document.getElementById('n2').value;
  	num2 = parseInt(num2)
  	
	out = document.getElementById('out').innerHTML = num1 * num2;
 }

  function division() {
 	num1 = document.getElementById('n1').value; 
 	num1 = parseInt(num1)
  	num2 = document.getElementById('n2').value;
  	num2 = parseInt(num2)
  	
	out = document.getElementById('out').innerHTML = num1 / num2;
 }




