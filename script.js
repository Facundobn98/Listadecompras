let formulario = document.getElementById('producto')

let nombre = document.getElementById('nombre')

let cantidad = document.getElementById('cantidad')

let precio = document.getElementById('precio')

let agregar = document.getElementById('agregar')

let total = document.getElementById('total')

let lista = document.getElementById('lista')

formulario.addEventListener('submit', (event) =>{
    event.preventDefault()
    console.log('no recarga la pagina')


let nombreValor = nombre.value.trim()
let precioValor = parseFloat(precio.value)
let cantidadValor = parseInt(cantidad.value)

if (nombreValor === ''){
    alert('Ingrese el nombre correctamente')
    return
}
if (isNaN(precioValor) || precioValor <= 0){
     alert('Ingrese un número positivo para el precio')
    return
}
if (isNaN(cantidadValor || cantidadValor <= 0)){
    alert('Ingrese un número positivo para la cantidad')
    return
}

    agregarProducto(nombreValor,precioValor, cantidadValor)
})


function agregarProducto(nombre, precio , cantidad){
    let li = document.createElement('li')
    li.textContent = `${nombre} - ${cantidad} - ${precio}` 
    lista.appendChild(li)

    let subTotal = precio * cantidad

    let totalActual = parseFloat(total.textContent)
    total.textContent = totalActual + subTotal
}

