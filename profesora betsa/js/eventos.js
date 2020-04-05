document.addEventListener('keypress',function(tecla){
    if(tecla.key == "q"){
        alert("oprimiste la letra q");
    }
    else if(tecla.key == "a"){
        alert("oprimiste la letra a");
    }
    else if(tecla.key == "s"){
        document.write("pintaste con la tecla s")
    }
});

document.addEventListener('DOMContentLoaded',function(){
    var button = document.getElementById('example');
    var imagen = document.getElementById('img1');

    button.addEventListener('mouseenter',function(){
        alert("hola boton");
    });   
    
    button.addEventListener('click',function(){
        alert("oprimiste el boton yei");
    }); 

    imagen.addEventListener('dblclick',function(){
        alert("este es pantheon");
    });

});
