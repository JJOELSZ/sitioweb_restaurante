const d = document;
const $btnSubir=d.querySelector(".btnSubir");
const $imagenes = d.querySelectorAll("img");
const $hamburguesa = d.querySelector(".hamburguesa");
const $navegacion = d.querySelector(".navegacion");
const $cerrarX = d.createElement("P");
const $buttonFiltro = d.querySelectorAll(".botones-productos button");
const $contenedorProductos = d.querySelector(".productos");
d.addEventListener("DOMContentLoaded", () => {
  mostrarMenu();
  subirScroll();
  filtrosProductos();
});
/*SUBIR SCROLL */

 const subirScroll=()=>{
   window.addEventListener("scroll",()=>{
    let scrollTop=d.documentElement.scrollTop;
     if(scrollTop<900){
       $btnSubir.classList.add("ocultar");
       console.log("ocultate");}
       else {
        $btnSubir.classList.remove("ocultar");
        console.log("Muestrate");
       }
   })

 
   d.addEventListener("click",(e)=>{
     if(e.target.matches(".btnSubir") || e.target.matches(".btnSubir *") ){
        
     }
   })
 }
/**FILTRO PLATRILLOS**/
const filtrosProductos = () => {
  let $todos = []; //si o si debe ser let
  const $allProductos = d.querySelectorAll(".producto");

  $allProductos.forEach((producto) => ($todos = [...$todos, producto]));

  const $seccionA = $todos.filter(
    (producto) => producto.getAttribute("data-seccion") === "A"
  );
  const $seccionB = $todos.filter(
    (producto) => producto.getAttribute("data-seccion") === "B"
  );
  const $seccionC = $todos.filter(
    (producto) => producto.getAttribute("data-seccion") === "C"
  );
  filtroBotones($todos, $seccionA, $seccionB, $seccionC);
};
const filtroBotones = (todos, seccionA, seccionB, seccionC) => {
  d.addEventListener("click", (e) => {
    if (e.target.matches(".seccionA")) {
        $contenedorProductos.innerHTML = "";
        seccionA.forEach(producto=>$contenedorProductos.appendChild(producto));
    }
    if (e.target.matches(".seccionB")) {
        $contenedorProductos.innerHTML = "";
        seccionB.forEach(producto=>$contenedorProductos.appendChild(producto));
    }
    if (e.target.matches(".seccionC")) {
        $contenedorProductos.innerHTML = "";
        seccionC.forEach(producto=>$contenedorProductos.appendChild(producto));
    }
    if (e.target.matches(".todos")) {
        $contenedorProductos.innerHTML = "";
        todos.forEach(producto=>$contenedorProductos.appendChild(producto));
      }
  });
};
/*!BOTONES APERTURA Y CIERRR DEL MENU */

const mostrarMenu = () => {
  $hamburguesa.addEventListener("click", () => {
    $navegacion.classList.remove("ocultar");
    cerrarMenu();
  });
};
const cerrarMenu = () => {
  $cerrarX.textContent = "X";
  $cerrarX.classList.add("btnCerrar");
  $navegacion.appendChild($cerrarX);
  $cerrarX.addEventListener("click", () => {
    $navegacion.classList.add("ocultar");
  });
};
/** MANEJO EN LA CARGA DE IMAGENES */
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const imagen = entry.target;
      imagen.src = imagen.dataset.src;
      observer.unobserve(imagen);
    }
  });
});
$imagenes.forEach((imagen) => {
  observer.observe(imagen);
});
