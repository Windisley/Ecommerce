
document.addEventListener('DOMContentLoaded', function() {
    const boximg = document.querySelector(".boximgpd");
    const img = document.querySelector(".boximgpd img");
    const phome = document.querySelector(".boxpreçopd div h1")
    const spanhome = document.querySelector(".span")
    const spanpreço = document.querySelector(".spanpç")
    const boxlogo = document.querySelector(".boxlogo");

    const carproduct = document.querySelector(".bi-cart-fill")

    carproduct.addEventListener("click", ()=>{
    window.location.href = "carrinho.html"

    })

        boxlogo.addEventListener("click", () => {
            window.location.href = "index.html";
        });

    
    if(img.src === ""){
        let imagem = localStorage.getItem('imagem');
        
       img.src = imagem;
        
   }else{ 
    img.src = ""

    let imagem = localStorage.getItem('imagem');
        
       img.src = imagem;
   }

  console.log(phome.innerHTML)
   if(phome.innerHTML === ""){
    let texto = localStorage.getItem('h1');
   phome.innerHTML = texto;
   
    
}else{ 
 phome.innerHTML = ""

let texto = localStorage.getItem('h1');
      
phome.innerHTML = texto;
  
}

 if(spanpreço.innerHTML === ""){
    let span = localStorage.getItem('span');
    spanpreço.innerHTML = span

 }else{
   spanpreço.innerHTML = ""
   let span = localStorage.getItem('span');
    spanpreço.innerHTML = span
   
 }

if(spanhome.innerHTML === ""){
    let span = localStorage.getItem('span');
    
    let div = span / 10;
   spanhome.innerHTML = div;
   
    
}else{ 
 spanhome.innerHTML = ""
 let span = localStorage.getItem('span');
 let div = parseFloat(span).toFixed(2) / 10 
      
spanhome.innerHTML ="R$"+ parseFloat(div).toFixed(2).replace(".", ",");
  
}
 
const buttoncar = document.querySelector(".boxbuttonspd div")

buttoncar.children[1].addEventListener("click", ()=>{
    let imagemproduct = localStorage.getItem('imagem');
    localStorage.setItem("imgproduct", imagemproduct)

    let texto = localStorage.getItem('h1');
    let textcar = localStorage.setItem('h1product', texto);

    let span = localStorage.getItem('span');
    let spancar = localStorage.setItem("spanproduct", span)
 
   
 window.location.href = "carrinho.html"
})

buttoncar.children[0].addEventListener("click", ()=>{
  
  window.location.href = "buy.html"  
})

});


  





