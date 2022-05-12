class producto {
    constructor(id,nombre,precio){
        this.id = id        
        this.nombre = nombre
        this.precio = precio
    }
}

const producto1 = new producto (1,"Cargador Inalambrico",1000)
const producto2 = new producto (2,"Cable USB",500)
const producto3 = new producto (3,"Auriculares",5000)
const producto4 = new producto (4,"Teclado Gamer",3500)

let productos = [producto1, producto2, producto3, producto4]

let divProductos = document.getElementById("divProductos")

productos.forEach(producto => {
    divProductos.innerHTML += `
    <div class="card h-100" id="producto${producto.id}">
        <img src="/images/producto${producto.id}.png">
        <div class="card-body p-4">
            <div class="text-center">
            <h5 class="fw-bolder">${producto.nombre}</h5>
                 <p>$${producto.precio}</p>
                
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent"></div>
             <div class="text-center"><a class="btn btn-outline-dark mt-auto" id="boton${producto.id}" href="#">Agregar al carrito</a></div>
                   
        </div>
    </div>
   ` 
});

let Carrito = []

boton1.addEventListener('click', ()=> {
    Carrito.push(producto1)
    console.clear()
    console.log(Carrito)
})
boton2.addEventListener('click', ()=> {
    Carrito.push(producto2)
    console.clear()
    console.log(Carrito)
})
boton3.addEventListener('click', ()=> {
    Carrito.push(producto3)
    console.clear()
    console.log(Carrito)
})
boton4.addEventListener('click', ()=> {
    Carrito.push(producto4)
    console.clear()
    console.log(Carrito)
})

