window.addEventListener("DOMContentLoaded", ()=>{
 const logocar = document.querySelector(".locationproduct")
 logocar.addEventListener("click", ()=>{
  window.location.href = "produto.html"

 })

 let count = 1;
 const counter = document.querySelector(".boxcounter .counter")

 const counterarrow = document.querySelector(".counterarrow")
 counter.innerHTML = count
 counterarrow.children[0].addEventListener("click", ()=>{
   count++
   counter.innerHTML = count
  
   if(counter.innerHTML > "1"){
    counterarrow.children[1].removeAttribute("id")
  }

   
  })
  
  counterarrow.children[1].addEventListener("click", ()=>{
    counter.innerHTML = count -1
    count--
    if(count < 1){
      counter.innerHTML = 1
    }

    if(counter.innerHTML === "1"){
      counterarrow.children[1].setAttribute("id", "novisible")
    }

  })
  
  const imgcar = document.querySelector(".boximgcar img")
  const nameproduct = document.querySelector(".titleproductcar h1")
  const valuetotal = document.querySelector("#valuetotal")
  const valuetotalbuy = document.querySelector("#valuetotalbuy")
  
  const imgproduct = localStorage.getItem("imgproduct")
  const namepdt = localStorage.getItem("h1product")
  const valueproduct = localStorage.getItem("spanproduct")
  
  

  if(imgcar.src === ""){
   imgcar.src = imgproduct
  

  }else if(imgcar.src !== "") {
    imgcar.src = ""
    imgcar.src = imgproduct
  }
 
  if(nameproduct.innerHTML === ""){
  nameproduct.innerHTML = namepdt

  }else if(nameproduct.innerHTML !== ""){
   nameproduct.innerHTML = ""

   nameproduct.innerHTML = namepdt
   
  }

 if(valuetotal.innerHTML === ""){
  valuetotal.innerHTML ="R$"+ valueproduct
  

 }else if(valuetotal.innerHTML !== ""){
  valuetotal.innerHTML = ""
  valuetotal.innerHTML ="R$"+ parseFloat(valueproduct).toFixed(2)

 }

  valuetotalbuy.innerHTML  = "R$"+ parseFloat(valueproduct).toFixed(2).replace(".", ",")
 counterarrow.children[0].addEventListener("click", ()=>{
 
 
  let mult = parseFloat(valueproduct.match(/\d+/)) * count
 valuetotalbuy.innerHTML = "R$" + mult.toFixed(2).replace(".", ",")
 
 })

 counterarrow.children[1].addEventListener("click", ()=>{
   let sub = parseFloat(valuetotalbuy.innerHTML.match(/\d+/) - parseFloat(valueproduct))
   valuetotalbuy.innerHTML = "R$" + sub.toFixed(2)

  })
  const containercar = document.querySelector(".containercar")
  const removeproduct = document.querySelector("#clearcont")
  
  removeproduct.addEventListener("click", ()=>{
   containercar.remove()
   
  })

  const buttoncar = document.querySelector(".contsticycar")

  buttoncar.addEventListener("click", ()=>{
    localStorage.setItem("totalbuy", valuetotalbuy.innerHTML)
    window.location.href = "buy.html"
  })

})  


