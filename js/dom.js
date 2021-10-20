/*dom.js
Ejercicios Guiados de DOM.
Autora: Esperanza Rogríguez Martínez <erodriguezmartinez.guadalupe@alumnado.fundacionloyola.net>.
Licencia: GPL v3 o superior.
Año 2021
*/
'use strict'

function ejecutar(){
  //console.log("funciona");
//  let input=document.getElementById('iNombre'); //creamos objeto input y guardaremos la estructura del input iNombre
//  console.log(input.value); //usamos el atributo value para mostrar el contenido


  //let campos=document.getElementsByTagName('input');
  //console.log(campos);

  let campos=document.getElementsByTagName('input');
  console.log(campos[2].value);

//innerHTML muestr contenido de c1 con las etiquetas por consola sin incluir <p class="c1">
  let p = document.querySelector('#c1');
  console.log(p.innerHTML);

  //outerHTML muestr contenido de c1 con las etiquetas por consola  incluido <p class="c1">
    let p2 = document.querySelector('#c1');
    console.log(p2.outerHTML);

    //muestra todos los spans contenidos dentro de c1-querySelectorAll trae todos los elementos que complan Array
      let spans = document.querySelectorAll('#c1 span');
      //console.log(spans);
      //console.log(spans[1].outerHTML);
      console.log(spans[0].innerHTML);

      //Modificación de DOM
      spans[1].innerHTML='¡Viva la Pepa!';

      //Modificar atributos de estilo
      spans[0].style.color='blue';
      spans[0].style.fontSize='20pt';

      //Ejercicio de movimiento
      setInterval(mover,50);

}
let posicion=0;
function mover(){
  //console.log('TRON');
  let p = document.getElementById("c2");
  p.style.left=`${posicion}px`;
  posicion+=2;
  if(posicion==1180){
    posicion=0;
  }
}
//Función para crear elememntos dentro del div definido en html
function construir(){
  //console.log("Hola");
  let div = document.getElementsByClassName("borde")[0];  //Buscamos div
  //console.log(div);
  //div.innerHTML='<p> Este es un texto <span>en negrita</span>.</p>'
  let p = document.createElement('p');  //Creamos párrafo
  div.appendChild(p); //Lo añadimos a su padre
  let nodoTexto = document.createTextNode('Esto es un texto '); //Creamos el texto que queremos que almacene p
  p.appendChild(nodoTexto); //Añadimos el texto definido anteriormente al p SIEMPRE COMO ÚLTIMO HIJO,AL FINAL

  let span = document.createElement('span');  //Creamos span
  p.appendChild(span); //Lo añadimos a su padre
  span.classList.add('negrita');  //Le agregamos span un atributo definido en css
 //Creamos el texto que queremos que almacene span---> document.createTextNode('en negrita.')
  span.appendChild(document.createTextNode('en negrita.')); //Añadimos el texto definido anteriormente al span  SIEMPRE COMO ÚLTIMO HIJO,AL FINAL

  let img = document.createElement('img');  //Creamos img
  div.insertBefore(img, p);  //Lo añadimos a su padre haciendo que se coloque delante del p
  img.setAttribute('src','img/cacatua.jpg');  //Le agregamos atributos a img indicando la imagen a visualizar
}
//Función para destruir el parrafo que dice "Soy el hereu"
function destruir(){
  //console.log("Adios");
  //let p = document.querySelector('.borde p');
  //let p = document.getElementsByClassName("borde")[0].getElementsByTagName('p')[0];
  let p = document.getElementsByTagName('p')[3];  //Buscamos el p que queremos destruir
  //console.log(p.innerHTML);
  p.remove(); //Borramos p
}
//Función para borrar todo el contenido de div (semejante a clear o cls detro de un elemento)
function destruirTodo(){
  let div = document.getElementsByClassName("borde")[0];  //Buscamos div
  while(div.firstElementChild){   //Miestras que div tenga un primer hijo que borre a este
    div.removeChild(div.firstElementChild);
  }

}
