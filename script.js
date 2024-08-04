const menuopem = document.querySelector(".menuopem")
const navmobile = document.querySelector(".boxclosemenu")

menuopem.addEventListener("click", ()=>{
 if(navmobile.classList.contains("boxclosemenu")){
   navmobile.classList.remove("boxclosemenu")
   navmobile.classList.add("navmobile")
  
  menuopem.setAttribute("src", "./imgs/closemenu.png")
 }else {
  navmobile.classList.add("boxclosemenu")
  navmobile.classList.remove("navmobile")
  menuopem.setAttribute("src", "./imgs/opemmenu.png")
 }

})


 const car = document.querySelector(".bi-cart-fill")

 car.addEventListener("click", ()=>{
  window.location.href = "carrinho.html"
 })

const boxproduct = document.querySelectorAll(".boxcontent")

boxproduct.forEach((ev)=>{
  ev.addEventListener("click", ()=>{
    
    let $img = ev.children[0].src
    
    console.log($img)
    
    let $p = ev.children[1].innerHTML
    console.log($p)
    
    const $span = ev.children[2]
    let valueproduct = ""

    if (isNaN($span.innerHTML)) {
      
      const match = $span.innerHTML.match(/\d+/);
      if (match) {
        valueproduct = match[0];
        console.log(valueproduct);
      } else {
        console.log("Nenhum número encontrado no conteúdo do <span>.");
      }
    }
   localStorage.setItem("imagem", $img)  
   localStorage.setItem("h1", $p)
   localStorage.setItem("span", valueproduct)  
  
    window.location.href = "produto.html"
  })
  
  
})

 
  
  const barsearch = document.querySelector("#search");
const boxcontentdiv = document.querySelectorAll(".boxcontent");
const titlepdc = document.querySelectorAll(".titleproduct") 

barsearch.addEventListener("input", () => {
  const valueinput = barsearch.value.toUpperCase();

  boxcontentdiv.forEach((box) => {
    const textproduct = box.querySelector("p");
    
  
    if (textproduct && textproduct.innerHTML.toUpperCase().trim().includes(valueinput)) {
      // box.style.opacity = "1"; 
      box.style = "opacity: 1; filter:blur(0px);";
     
    } else {
      // box.style.opacity = "0";
      box.style = "opacity: 0; filter:blur(10px);";
    }
  });
   
  if(textproduct === "" && textproduct.innerHTML.toUpperCase().trim()=== ""){
    box.style.opacity = "1"
  
  }


});

