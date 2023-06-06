const innova = firebase.firestore().collection("Innova");
//console.log(innova);
let dataInnova = [];
let articulos;
let celulares = [];
let accesorios = [];
let computadoras = [];
let accesoriosenKit = [];
let category = document.getElementsByClassName("hm-page-block");
let categoria = document.getElementsByClassName("c-info");
let container = document.getElementById("container");
let cards = document.getElementById("cards");
let banner = document.getElementById("banner");
var contenedor = document.getElementById("contenedor");
var contacto = document.getElementById("idContacto");
var contenedorCarrito = document.getElementById("contenedorCarrito");
const contadorCarrito = document.getElementById("carrito");
var nosotros = document.getElementById("nosotrosContain")
var contenedorArticulosCarrito = document.getElementById("carrito-container")

const headerMenu = document.querySelector(".hm-header");
async function getDB() {
  await innova.get().then((results) => {
    //console.log(results);
    const data = results.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dataInnova.push(...data);

    articulos = dataInnova;
    //console.log("Toda data en la colección 'INNOVA' ", data);

    for (var i = 0; i < articulos.length; i++) {
      if (articulos[i].Tipo === "Celulares") {
        celulares.push(articulos[i]);
      } else if (articulos[i].Tipo === "Accesorios") {
        accesorios.push(articulos[i]);
      } else if (articulos[i].Tipo === "Accesorios en kit") {
        accesoriosenKit.push(articulos[i]);
      } else {
        computadoras.push(articulos[i]);
      }
    }

    //console.log("Celulares", celulares);
    //console.log("Accesorios", accesorios);
    //console.log("Computadoras", computadoras);
    //console.log("Accesorios en Kit", accesoriosenKit);
  });
}
getDB();

//console.log(headerMenu.offsetTop);
//console.log("Celulares", celulares);

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 80) {
    headerMenu.classList.add("header-fixed");
  } else {
    headerMenu.classList.remove("header-fixed");
  }
});

/*=========================================
    Tabs
==========================================*/
if (document.querySelector(".hm-tabs")) {
  const tabLinks = document.querySelectorAll(".hm-tab-link");
  const tabsContent = document.querySelectorAll(".tabs-content");

  tabLinks[0].classList.add("active");

  if (document.querySelector(".tabs-content")) {
    tabsContent[0].classList.add("tab-active");
  }

  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener("click", () => {
      tabLinks.forEach((tab) => tab.classList.remove("active"));
      tabLinks[i].classList.add("active");

      tabsContent.forEach((tabCont) => tabCont.classList.remove("tab-active"));
      tabsContent[i].classList.add("tab-active");
    });
  }
}

/*=========================================
    MENU
==========================================*/

const menu = document.querySelector(".icon-menu");
const menuClose = document.querySelector(".cerrar-menu");

menu.addEventListener("click", () => {
  document.querySelector(".header-menu-movil").classList.add("active");
});

menuClose.addEventListener("click", () => {
  document.querySelector(".header-menu-movil").classList.remove("active");
});

var buttonCategoria = []; //BOTON SECCION CATEGORÍAS

var buttonCat = document.getElementsByClassName("c-info"); //Capturo todos los elementos cuya clase es NAVLINK  document.getElementsByClassName. aca quedan todos los botones guardados
for (var i = 0; i < buttonCat.length; i++) {
  //Recorro todos los elementos con un for que tienen la clase NAVLINK y a medida que los recorre le agraga un escuchador de eventos
  const element = buttonCat[i];
  buttonCategoria.push(buttonCat[i].innerText);
  //Escuchador de eventos escucha el click
  element.addEventListener("click", function (e) {
    //Cuando le doy click a los botones por la funcion le pido que me traiga los atributos o propiedades del boton en este caso extraigo el ID
    //document.getElementById("name").innerHTML(e.target.innerText)
    imprimir(e.target.innerText);
  });
}


var buttonHeaderMenu = []; //BOTON SECCION BARRA DE NAVEGACIÓN

var buttonHeaMen = document.getElementsByClassName("nav-link"); //Capturo todos los elementos cuya clase es NAVLINK  document.getElementsByClassName. aca quedan todos los botones guardados
for (var i = 0; i < buttonHeaMen.length; i++) {
  const element = buttonHeaMen[i];
  buttonHeaderMenu.push(buttonHeaMen[i].innerText);

  element.addEventListener("click", function (e) {    
   imprimir(e.target.id);
    
  });
}




function imprimir(id) {
  console.log(id);
  switch (id) {
    case "Home":
      banner.style.display="flex"
      homeCategorias.style.display="flex"
      productosDestacados.style.display="flex"
      cards.style.display="none"
      console.log("Estoy en Home");
      formularios.style.display="none"
      contadorCarrito.style.display="flex"
      contenedorArticulosCarrito.style.display="none"
      pasarelaPago.style.display="none"
      nosotrosContain.style.display="none"
     
      
    break;
    case "Telefonos":
      cards.style.display="flex"
      banner.style.display="none"
      homeCategorias.style.display="none"
      productosDestacados.style.display="none"
      console.log("Estoy en Telefonos");
      display(celulares);
     
      break;

    case "Computadoras":
      banner.style.display="none"
      homeCategorias.style.display="none"
      productosDestacados.style.display="none"
      cards.style.display="flex"
      console.log("Estoy en Computadoras")
      display(computadoras)
      
      break;

    case "Accesorios":
      cards.style.display="flex"
      banner.style.display="none"
      homeCategorias.style.display="none"
      productosDestacados.style.display="none"
      console.log("Estoy En Accesorios");
      display(accesorios);
      
      break;

    case "Productos":
      cards.style.display="flex"
      console.log("Estoy En Productos")
      display(dataInnova)
      banner.style.display="none"
      homeCategorias.style.display="none"
      productosDestacados.style.display="none"
      nosotrosContain.style.display="none"
      formularios.style.display="none"
      pasarelaPago.style.display="none"
      contenedorArticulosCarrito.style.display="none"
      
      break;

    case "Nosotros":
      imprimirNosotros()
      cards.style.display="none"
      banner.style.display="none"
      homeCategorias.style.display="none"
      productosDestacados.style.display="none"
      console.log("Estoy En Nosotros");
      nosotrosContain.style.display="flex"
      formularios.style.display="none"
      pasarelaPago.style.display="none"
      contenedorArticulosCarrito.style.display="none"
      break;

    case "Contacto":
     
      formulario();
      console.log("Estoy En Contacto");
      formularios.style.display="flex"
      banner.style.display="none"
      homeCategorias.style.display="none"
      productosDestacados.style.display="none"
      nosotrosContain.style.display="none"
      contenedorArticulosCarrito.style.display="none"
      pasarelaPago.style.display="none"
      cards.style.display="none"
      break;

    case "carrito":
      cards.style.display="none"
      formularios.style.display="none"
      imprimirCarruaje()
      mostrarCarrito()
      contadorCarrito.style.display="flex"
      contenedorArticulosCarrito.style.display="flex"
      pasarelaPago.style.display="flex"
      banner.style.display="none"
      homeCategorias.style.display="none"
      productosDestacados.style.display="none"
      nosotrosContain.style.display="none"
      
      break;
      
    default:
      banner.style.display="none"
      homeCategorias.style.display="none"
      productosDestacados.style.display="none"
      cards.style.display="flex"
      console.log("Estoy en Accesorios en kit");
      display(accesoriosenKit);
      
      break;
  }
}

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function display(array) {
  var html = "";
  for (var i = 0; i < array.length; i++) {
    html += `
    
    <div class="grid-product ajuste">
    <div class="product-item">
    <div class="p-portada">
      <a href="">
        <img
          src="${array[i].Imagen}"
          alt="">
      </a>
      </div>
    <div class="p-info">
    <a href="">
      <h5>${array[i].Nombre}</h3>
    </a>
    <div class="precio">
      <span>$/ ${array[i].Precio}</span>
    </div>
    <a href="#" class="hm-btn btn-primary uppercase boton-agregar" id="agregar${array[i].id}">AGREGAR AL CARRITO</a>

  </div>
  </div>
</div>
        `;
  }

  document.getElementById("cards").innerHTML = html;


  
  
// Agregar evento click a los botones "Agregar al carrito"

const botonesAgregar = document.getElementsByClassName("boton-agregar");
for (let i = 0; i < botonesAgregar.length; i++) {
  const boton = botonesAgregar[i];
  const id = boton.id.replace("agregar", ""); // Obtener el ID del producto

  boton.addEventListener("click", () => {
    const producto = array.find((prod) => prod.id === id);
    if (producto) {
      agregarAlCarrito(producto);
      mostrarTotalPagar();
    }
  });
}

}

function imprimirCarruaje() {
  document.getElementById("pasarelaPago").innerHTML = `
  <div class="carrito-info col-12 col-sm-6">
  <div class="align-items-center d-flex justify-content-center mb-2">
   <input class="col-6" type="text" id="cupon-input" placeholder="Ingresa tu cupón de descuento" />
   <button class="col-4" id="aplicar-cupon-btn">Aplicar</button>
 </div>

 <p>Total a pagar: $<span id="precioTotal">0.00</span></p>
 <p>Descuento: $<span id="descuento">0.00</span></p>
 <p>Total con descuento: $<span id="totalConDescuento">0.00</span></p>
 <div class="row justify-content-around">
   <button class="col-4" id="vaciar-carrito-btn">
     Vaciar carrito
   </button>
   <button class="col-4" id="pagar-btn">Pagar</button>
 </div>
</div>
  `
}




function imprimirNosotros() {
  document.getElementById("nosotrosContain").innerHTML = `
 
  <div class="tex">
        Sobre Nosotros
        Somos una empresa con más de 10 años en el mercado, acercando la mejor tecnología a tus manos. <br>

        Innova surge como respuesta a la oportunidad dentro del mercado tecnológico que un grupo de estudiantes de IT
        vio en la Argentina, buscando ampliar las opciones a ofrecer en equipos como Computadoras, teléfonos y
        accesorios a personas dentro y fuera de este sector; ofreciendo no solo mayor variedad en productos, sino
        calidad en cada uno de ellos y siempre apuntando a que nuestros clientes puedan encontrar en nuestra oferta, la
        mejor opción, que verdaderamente se adapte a sus requerimientos.<br>

        Comenzó como una compañía especializada en brindar a profesionales del mundo IT productos que, de acuerdo a su
        profesión, los ayuden a llevar su trabajo un paso más adelante, brindándoles además orientación para poder
        elegir el equipo más conveniente para cada uno.Hoy en día también cuenta con una oferta de productos 
        especialmente para gamers y creadores de contenido digital.  <br>

        Somos los principales proveedores de equipos tecnológicos de empresas como Accenture, Adev, 
        Kodear, IArg, estudios de arquitectura y diseño como ArquiTech, 3desing y PrintOn. 
        Patrocinadores oficiales de diferentes personalidades del mundo del streaming,  
        de diversos equipos de Esport y del equipo profesional de League of Legends argentino. 

      </div>
      <div class="nosoPic">
        <img src="https://firebasestorage.googleapis.com/v0/b/innova-d38dd.appspot.com/o/Dise%C3%B1o%2Fnosotros.jpeg?alt=media&token=11dfeffd-4831-410c-92e0-ff67fdb3f943&_gl=1*1g9dhd8*_ga*MTU4NDY2NzI4Ni4xNjg0NTQxOTM3*_ga_CW55HF8NVT*MTY4NTk5OTAxMi4xNi4xLjE2ODU5OTkwNjkuMC4wLjA." alt="">
      </div>
  `
}


// function imprimirDetalle() {
//   document.getElementById("detalle").innerHTML = `
//   <div >
//   <a href="">
//       <h5>${array[i].Descripcion}</h3>
//     </a>
// </div>
//   `
// }
