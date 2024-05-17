let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});


const nombre =document.getElementById("Nombre");
const email =document.getElementById("Email");
const telefono =document.getElementById("Telefono");
const form = document.getElementById("Contraseña");
const parrafo = document.getElementById("warning");

form.addEventListener("submit", e => {
    e.preventDefault();
    let entrar=false;
    let warnings = ""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(nombre.value.length<6){
      warnings += 'El nombre debe tener al menos 6 caracteres <br>'
      entrar=true;

    }
    if(!regexEmail.test(email.value)){
        warnings += 'El email no es valido <br>'    
        entrar=true;
    }
    if(telefono.value.length<9){
        warnings += 'El telefono debe tener al menos 9 caracteres <br>'
        entrar=true;
    }

    if(entrar){
            parrafo.inertHTML = warnings;
    }
    else{
        parrafo.inertHTML = "enviado";
    }
})

fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT')
  .then(response => response.json())
  .then(data => {
    const precioBTC = data.price;
    const BTCUSDT = Math.floor(precioBTC);
    const elementoPrecioBTC = document.getElementById('precio-btc');
    elementoPrecioBTC.innerHTML = BTCUSDT;
});