window.addEventListener("DOMContentLoaded", ()=>{
 const buttonbuy = document.querySelector("#buttonpaymentbuy")
 let precobuy = localStorage.getItem("span")
 let totalbuy = localStorage.getItem("totalbuy")
const referrer = document.referrer

 if(referrer.includes("produto.html")){
   buttonbuy.innerHTML = "confirmar pagamento"+" R$"+`${precobuy}`
 }else if(referrer.includes("carrinho.html")){
    buttonbuy.innerHTML = "confirmar pagamento"+` ${totalbuy}`

 }


})