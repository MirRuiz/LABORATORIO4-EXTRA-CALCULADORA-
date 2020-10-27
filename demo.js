

//variables

let numero1;
let operacion;
let numero2;
let resultado;





 //eventos 
 //suma
 
 document.getElementById("boton-suma").addEventListener("click",function(){
    numero1 = parseInt(document.getElementById("numeros").value);
    operacion = document.getElementById("boton-suma").value;
    document.getElementById("numeros").value=" ";

 })
//resta
document.getElementById("boton-resta").addEventListener("click",function(){
     numero1 = document.getElementById("numeros").value;
     operacion = document.getElementById("boton-resta").value;
     document.getElementById("numeros").value = " ";
 })

 //multiplicacion
 document.getElementById("boton-multiplicar").addEventListener("click", function(){
     numero1 = document.getElementById("numeros").value;
     operacion = document.getElementById("boton-multiplicar").value;
     document.getElementById("numeros").value =" ";
 })

 //division
 document.getElementById("boton-dividir").addEventListener("click", function(){
     numero1 = document.getElementById("numeros").value;
     operacion = document.getElementById("boton-dividir").value;
     document.getElementById("numeros").value = " ";
 })

//switch
 document.getElementById("boton-igual").addEventListener("click", function(){
     numero2 = parseInt(document.getElementById("numeros").value);
     switch (operacion) {
         case "+":
            resultado = numero1 + numero2;

             break;
         case "-":
             resultado = numero1 - numero2;
             break;
         case "*":
             resultado = numero1 * numero2;
             break;
         case "/":
             resultado = numero1 / numero2;
             break;
     };
    document.getElementById("numeros").value = resultado;

     
    })
    

    