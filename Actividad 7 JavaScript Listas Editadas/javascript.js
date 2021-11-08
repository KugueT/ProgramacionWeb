
function agregarli(){
     var lista=document.getElementById("list").value;
    if(lista.length>0 ){
if(find_li(lista))
       {
       
        var li=document.createElement('li');
        li.innerHTML="<button onclick='eliminar(this)'> Borrar Li </button> <button onclick='modificar(this)'> Modifcar</button> ";
        var text=document.createTextNode(lista);
        li.appendChild(text);
        document.getElementById("UL").appendChild(li);
      }
      }
    return false;
     }

 function find_li(contenido) {
     var li = document.getElementById("UL").getElementsByTagName("li");
     for (var i=0; i<li.length; i++)
     {
        if(li[i].innerHTML==contenido)
             return false;
     }
 return true;
 }
 
    function eliminar(lista)
    {
    lista.parentNode.remove();
    }
var cont=1;
    function modificar(contenido)
    {      
    var inpu=document.getElementById("modificar").value;
                 if(inpu.length>0){
                 if(find_li(inpu)){
                      var li=document.createElement('li');
                        li.innerHTML="<button onclick='eliminar(this)'> Borrar Li </button> <button onclick='modificar(this)'> Modifcar</button> ";
                      var text=document.createTextNode(inpu);
                      li.appendChild(text)
                     document.getElementById("UL").appendChild(li);
           console.log(inpu);
            contenido.parentNode.remove();
       }} 
       return false;
 }

     
    


