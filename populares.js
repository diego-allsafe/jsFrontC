window.onload=function(){
  //Primero que nada hago fetch al endpoint que me interesa
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=EnY6NrEIjXkvff6T92lNZ3SQSnEiupBA&limit=25&rating=g')

  //El primer then sera el encargado de recibir un callback 
  //y retornara la respuesta de ese llamado asíncrono en 
  //formato .json
       .then(function (response){
        return response.json()
        })

  //El segundo then será el encargado de recibir un callback
  //el cual hará lo que le pidamos con la respuesta obtenida
  //en formato .json
        .then(function (information){
          console.log(information.data);

          for (let i=0;i<information.data.length;i++){
            let gif="p" + information.data[i].title +  "</p>";
            gif += "<img src=" + information.data[i].images.original.url + ">"
            
            document.querySelector("ul").innerHTML += "<li>" + gif + "</li>"
          }
        })
  // Y si no funciona el servidor ? En ese caso de haber 
        .catch(function (error) {
          alert("Error: Intente mas tarde ");
       })
  
        
}