let nombreUsuario = prompt("Ingresa tu nombre");

  alert("Hola " + nombreUsuario + " Bienvenido a LUMA");

let edadUsuario = prompt(nombreUsuario + " Ingresa tu edad");
  if (edadUsuario >= 18) {
    alert("Avancemos con tu compra " + nombreUsuario);
  } else {
    alert(
      "Lo sentimos, no puedes realizar compras aqui si eres menor de edad."
    );
    location.reload();
    throw new Error("El usuario es menor de edad");
  };

alert(
  `Agrega a tu carrito lo que te gustaría comprar ${nombreUsuario}. Selecciona por el numero de item.`
);

// Productos en stock
let catalogo = [
  {
    nombre: "T-shirt Polonia",
    precio: 990,
  },
  {
    nombre: "T-shirt Clasica",
    precio: 890,
  },
  {
    nombre: "T-shirt LongSleeve",
    precio: 990,
  },
  {
    nombre: "Polos Black",
    precio: 1200,
  },
  {
    nombre: "Polos SkyBlue",
    precio: 1200,
  },
  {
    nombre: "Polos Green ",
    precio: 1200,
  },
  {
    nombre: "Pantalones clasicos",
    precio: 1500,
  },
  {
    nombre: "Pantalon deportivo Gray",
    precio: 1600,
  },
  {
    nombre: "Pantalon deportivo Drak Red",
    precio: 1600,
  },
  {
    nombre: "Chalecos inflados",
    precio: 3600,
  },
  {
    nombre: "Chaleco Polar",
    precio: 2800,
  },
  {
    nombre: "Canguros",
    precio: 3500,
  },
  {
    nombre: "Campera Estocolmo",
    precio: 3500,
  },
  {
    nombre: "Buzo Polar",
    precio: 3000,
  },
  {
    nombre: "Campera con bolsillo",
    precio: 3200,
  },
  {
    nombre: "Campera",
    precio: 5400,
  },
];

// Carrito para que se agreguen el o los productos seleccionados
let carrito = [];

// Funcion para mostrar los productos en stock
const mostrarCatalogo = () => {
  let catalogoString = "";
  for (let i = 0; i < catalogo.length; i++) {
    catalogoString += `${i} - ${catalogo[i].nombre} | $${catalogo[i].precio} \n`;
  }
  return catalogoString;
};
let productoElegido = prompt(mostrarCatalogo());

// Check respuesta (que sea un numero valido)
const verificadorDeProducto = () => {
  while (isNaN(productoElegido)) {
    alert("Por favor ingresa un numero");
    productoElegido = prompt(mostrarCatalogo());
  }
  while (productoElegido == "") {
    alert(
      "Lo Sentimos. No se permiten campos vacios. Por favor ingrese un numero"
    );
    productoElegido = prompt(mostrarCatalogo());
  }
  while (productoElegido < 0 || productoElegido > catalogo.length - 1) {
    alert(
      "Lo sentimos, ese producto no existe. Por favor ingrese un numero valido"
    );
    productoElegido = prompt(mostrarCatalogo());
  }  
};
verificadorDeProducto();

//Agregar productos al carrito 
carrito.push(catalogo[productoElegido]);
console.log(carrito);

alert(`${nombreUsuario} has elegido ${catalogo[productoElegido].nombre} por $${catalogo[productoElegido].precio}`);

let agregarOtroProducto = prompt("¿Quieres agregar otro producto? Responde si o no");
//Check respuesta si o no
const verificadorDeRespuesta = () => {
  while (agregarOtroProducto != "si" && agregarOtroProducto != "no") {
    agregarOtroProducto = prompt(
      "¿Quieres agregar otro producto? Responde si o no"
    );
  }
  while (agregarOtroProducto == "") {
    agregarOtroProducto = prompt(
      "Lo Sentimos. No se permiten campos vacios. ¿Quieres agregar otro producto? Responde si o no"
    );
  }
};
verificadorDeRespuesta();

//Agregar mas productos o avanzar a pagar
const agregarProducto = () => {
  if (agregarOtroProducto == "si") {
    productoElegido = prompt(mostrarCatalogo());
    verificadorDeProducto();
    carrito.push(catalogo[productoElegido]);
    console.log(carrito);
    alert(`${nombreUsuario} has elegido ${catalogo[productoElegido].nombre} por $${catalogo[productoElegido].precio}`);
    agregarOtroProducto = prompt("¿Quieres comprar otro producto? Responda si o no");
    verificadorDeRespuesta();
    agregarProducto();
  } else { 
    const mostrarCarrito = () => { 
      let texto = `${nombreUsuario} estás llevando: \n`;
      carrito.forEach((producto) => {
        texto += `${producto.nombre} - $${producto.precio} \n`;
      });
      const total = carrito.reduce((acc, item) => acc + item.precio, 0);
      texto += `El total a pagar es $${total}`;      
      return texto;
  };
    alert(mostrarCarrito());
  }
};
agregarProducto();

alert(`${nombreUsuario} muchas gracias por tu compra!`);
