Webcam.set({
    width:340,
    heigth:300,
    image_format:"jpg",
    jpg_quality:90
  })
  var camera=document.getElementById("camera")
  Webcam.attach("#camera")
  
  function takeSnapshot(){
  Webcam.snap(function(data_uri){
    document.getElementById("resultado").innerHTML='<img id="capturar" src="'+data_uri+'" />'
  
  })
  
  }
  

