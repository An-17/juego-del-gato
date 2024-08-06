const espacios = document.querySelectorAll("div")


for (let index = 0; index < espacios.length; index++) {

  espacios[index].addEventListener ("click", function () {

  if (espacios[index].textContent === "") {

    espacios[index].innerHTML = "X"
    
  }
    
  })

  

    

    
    
    
}
