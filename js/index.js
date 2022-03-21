function Validar(){
 
 	var ExpressaoRegular = document.getElementById("regex").value	
 	var String =  document.getElementById("word").value
 	var resultado = document.querySelector("#resultado")
 	
 
 	var Expressao  = new RegExp(ExpressaoRegular)
 	var testando   = String.match(Expressao)
 	
 		if(testando){
 			resultado.style.color = "black"
 			resultado.innerHTML = "Expressão Valida: "  +Expressao
 		}else{ 
 			resultado.style.color = "red"
 			resultado.innerHTML = "Expressão não encontrada " + Expressao
 		}
 	}
      
