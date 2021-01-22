//variables
const formulario = document.querySelector('#formulario');
const listaul = document.querySelector('#listaul');
const contenido = document.querySelector('#contenido');
let arrayList = [];


//eventos
(function(){
formulario.addEventListener('submit', validarForm);
})()



//funciones
function validarForm(e){
e.preventDefault();
//tomando el valor de los campos
const producto = document.querySelector('#producto').value
const precio = document.querySelector('#precio').value

//validando formulario
if( producto == '' || precio == '' ){
    mostrarAlerta('Llene todos los campos','error');
}else{
    mostrarAlerta('Producto agregado...')
    creandoObjeto(producto, precio);
    //limpiando el formulario
    formulario.reset();

}
}

//alerta de error
function mostrarAlerta(mensaje, tipo){
    //creando la alerta
    const alerta = document.createElement('div');
    alerta.classList.add('alert')
    if(tipo == 'error'){
        alerta.classList.add('alert-danger', 'my-2');
        alerta.innerHTML = `
            <h4><strong>Error!...</strong></h4>
            <span>${mensaje}</span>
        `
        contenido.appendChild(alerta)
        setTimeout(() => {
            alerta.remove()
        }, 2000);
    }else{
        alerta.classList.add('alert-success', 'my-2');
        alerta.innerHTML = `
            <h4><strong>Exito!...</strong></h4>
            <span>${mensaje}</span>
        `
        contenido.appendChild(alerta)
        setTimeout(() => {
            alerta.remove()
        }, 2000);
    }
}
//mostrando en el HTML
function creandoObjeto(producto, precio){
    const objeto = {producto, precio}
    arrayList = [...arrayList, objeto];
    // arregando en el html
    agregandoEnHTML(arrayList);
}

// agregando en el HTML la lista de productos
function agregandoEnHTML(lista){
    //limpiando el HTML
    limpiarHTML();
    lista.forEach((item) => {
        const{ producto, precio} = item
        //creando la lista
        const listas = document.createElement('li');
        listas.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
        listas.textContent = `${producto}`
        //creando span
        const span = document.createElement('span');
        span.classList.add('badge', 'bg-primary', 'rounded-pill')
        span.textContent = `${precio}`

        //insertando a el ul
        listas.appendChild(span)
        listaul.appendChild(listas)
    });
}

//limpiar HTML
function limpiarHTML(){
    while(listaul.firstChild){
        listaul.removeChild(listaul.firstChild);
    }
}
