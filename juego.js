const espacios = document.querySelectorAll("div") // valor de celdas
const contedor = document.getElementById("contenedorPrincipal") // section
const juagador = document.getElementById("jugador")
const computadora = document.getElementById("computadora")



for (let index = 0; index < espacios.length; index++) { // recorre cada cuadrito 

  // para añadir x
  espacios[index].addEventListener ("click", function () { 

    espacios[index].innerHTML = "X"
    

  // Variable para O
  let listaNueva = []
  

  // Para agregar O
  for (let index = 0; index < espacios.length; index++) {
    if (espacios[index].textContent === "") {
      listaNueva.push(index)
      
    }
   
    
  }

  // para que O se ponga aleatoriamente 

  let numeroAle = Math.floor(Math.random()* listaNueva.length)
  
  let listaA = listaNueva[numeroAle]

  espacios[listaA].innerHTML="O"

  espacios[listaA].style.pointerEvents = "none"
  
  espacios[index].style.pointerEvents = "none"


////Validación de gane de X


// primer fila
   if (espacios[0].textContent === "X" && espacios[1].textContent === "X" && espacios[2].textContent === "X") {
    espacios[0].style.backgroundColor = "blue" 
    espacios[1].style.backgroundColor = "blue"
    espacios[2].style.backgroundColor = "blue"
    alert ("X ha ganado")

 // Segunda fila 
  
} else {
    if (espacios[3].textContent === "X" && espacios[4].textContent === "X" && espacios[5].textContent === "X") {
    espacios[3].style.backgroundColor = "blue" 
    espacios[4].style.backgroundColor = "blue"
    espacios[5].style.backgroundColor = "blue"
      alert ("X ha ganado")

// Tercer fila

  } else {
      if (espacios[6].textContent === "X" && espacios[7].textContent === "X" && espacios[8].textContent === "X") {
        espacios[6].style.backgroundColor = "blue" 
        espacios[7].style.backgroundColor = "blue"
        espacios[8].style.backgroundColor = "blue"
        alert ("X ha ganado")

// Primer columna
     } else {

      if (espacios[0].textContent === "X" && espacios[3].textContent === "X" && espacios[6].textContent === "X") {
        espacios[0].style.backgroundColor = "blue" 
        espacios[3].style.backgroundColor = "blue"
        espacios[6].style.backgroundColor = "blue"
        alert ("X ha ganado")

// Segunda columna 
      } else {
    
        if (espacios[1].textContent === "X" && espacios[4].textContent === "X" && espacios[7].textContent === "X") {
          espacios[1].style.backgroundColor = "blue" 
          espacios[4].style.backgroundColor = "blue"
          espacios[7].style.backgroundColor = "blue"
          alert ("X ha ganado")

// Tercera columna
      } else {
        if (espacios[2].textContent === "X" && espacios[5].textContent === "X" && espacios[8].textContent === "X") {
          espacios[2].style.backgroundColor = "blue" 
          espacios[5].style.backgroundColor = "blue"
          espacios[8].style.backgroundColor = "blue"
           alert("X ha ganado")

// Primer linea diagonal 
        } else {

        if (espacios[0].textContent === "X" && espacios[4].textContent === "X" && espacios[8].textContent === "X") {
          espacios[0].style.backgroundColor = "blue" 
          espacios[4].style.backgroundColor = "blue"
          espacios[8].style.backgroundColor = "blue" 
          alert ("X ha ganado")


// Segunda linea diagonal 
        } else {

          if (espacios[2].textContent === "X" && espacios[4].textContent === "X" && espacios[6].textContent === "X") {
           espacios[2].style.backgroundColor = "blue" 
           espacios[4].style.backgroundColor = "blue"
           espacios[6].style.backgroundColor = "blue"  
            alert ("X ha ganado")
          } else {
            
          }
          
        }  
          
        }

          
        }

        
      }
      
     }
    
  }
  
}



// Validación de O

// primer fila
if (espacios[0].textContent === "O" && espacios[1].textContent === "O" && espacios[2].textContent === "O") {
    espacios[0].style.backgroundColor = "purple" 
    espacios[1].style.backgroundColor = "purple"
    espacios[2].style.backgroundColor = "purple"
  alert ("O ha ganado")

// Segunda fila 

} else {
  if (espacios[3].textContent === "O" && espacios[4].textContent === "O" && espacios[5].textContent === "O") {
    espacios[3].style.backgroundColor = "purple" 
    espacios[4].style.backgroundColor = "purple"
    espacios[5].style.backgroundColor = "purple"
    alert ("O ha ganado")
  
  // Tercer fila
  
  } else {
    if (espacios[6].textContent === "O" && espacios[7].textContent === "O" && espacios[8].textContent === "O") {
      espacios[6].style.backgroundColor = "purple" 
      espacios[7].style.backgroundColor = "purple"
      espacios[8].style.backgroundColor = "purple"
      alert ("O ha ganado")
  
  // Primer columna
   } else {
  
    if (espacios[0].textContent === "O" && espacios[3].textContent === "O" && espacios[6].textContent === "O") {
      espacios[0].style.backgroundColor = "purple" 
      espacios[3].style.backgroundColor = "purple"
      espacios[6].style.backgroundColor = "purple"
      alert ("O ha ganado")
  
  // Segunda columna 
    } else {
  
      if (espacios[1].textContent === "O" && espacios[4].textContent === "O" && espacios[7].textContent === "O") {
        espacios[1].style.backgroundColor = "purple" 
        espacios[4].style.backgroundColor = "purple"
        espacios[7].style.backgroundColor = "purple"
        alert ("O ha ganado")
  
  // Tercera columna
    } else {
      if (espacios[2].textContent === "O" && espacios[5].textContent === "O" && espacios[8].textContent === "O") {
        espacios[2].style.backgroundColor = "purple" 
        espacios[5].style.backgroundColor = "purple"
        espacios[8].style.backgroundColor = "purple"
        alert("O ha ganado")
  
  // Primer linea diagonal 
      } else {
  
      if (espacios[0].textContent === "O" && espacios[4].textContent === "O" && espacios[8].textContent === "O") {
        espacios[0].style.backgroundColor = "purple" 
        espacios[4].style.backgroundColor = "purple"
        espacios[8].style.backgroundColor = "purple"
        alert ("O ha ganado")
  
  
  // Segunda linea diagonal 
      } else {
  
        if (espacios[2].textContent === "O" && espacios[4].textContent === "O" && espacios[6].textContent === "O") {
          espacios[2].style.backgroundColor = "purple" 
          espacios[4].style.backgroundColor = "purple"
          espacios[6].style.backgroundColor = "purple"
          alert ("O ha ganado")
        } else {
          
        }
        
      }  
        
      }
  
        
      }
  
      
    }
    
   }
  
  }

}





 



                                                                                                                        




     





    
  }) 


}
