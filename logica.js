//Trabajando con eventos 
//Seleccionamos los elementos
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const btn2 = document.querySelector('#btnCalcular2');
const pResult = document.querySelector('#result');

//Para el form
const form = document.querySelector('#formulario');
const input1_1 = document.querySelector('#calculo1_1');
const input2_1= document.querySelector('#calculo2_1');
const btn_1 = document.querySelector('#btnCalcular_1');
const pResult_1 = document.querySelector('#result_1');


//escuchamos los eventos de lo que sea que pase con los inputs o botones
//creamos función para el evento click
function btnOnClick(){
    //Para agarrar los valores de los input
   const sumaInputs = input1.value + input2.value;
   pResult.innerHTML = "Resultado: "+sumaInputs;
}


//Suponemos que eliminamos el contenido JavaScript en nuestro html
//addEventListener

//Estos es para trabajar con addEventListener
//Agregamos el evento y la función(aquí a la función no le ponemos los 2 parentesis)
btn2.addEventListener('click',btnOnClick);

//Trabajando con formulario; esto es para que podamos ver los resultados al momento de darle submit.
//Ya que cuando trabajamos con formularios y se le da submit, se hace tan rapido que no es visible y para que sea visible haremos esto

form.addEventListener('submit',sumarInputValues);

function sumarInputValues(event){
    //console.log({event});
    //Gracias a esto ya podremos ver los resultados estando trabajando con un formulario
    event.preventDefault();//Para que no ejecute lo que por defecto genera nuestro evento
    //Para agarrar los valores de los input
   const sumaInputs = input1_1.value + input2_1.value;
   pResult_1.innerHTML = "Resultado: "+sumaInputs;
}

//Otra forma de poder resolver el problema del formulario es ponerle al boton como tipo button