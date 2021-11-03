let contador = 1;
function agregarli(){
     var lista=document.getElementById("lista").value=`Lista numero ${contador}`;
    contador++
if(find_li(lista))
       {
        var li=document.createElement('li');
        li.innerHTML="<button onclick='eliminar(this)'> Borrar Li </button> ";
        var text=document.createTextNode(lista);
        li.appendChild(text);
        document.getElementById("UL").appendChild(li);
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

