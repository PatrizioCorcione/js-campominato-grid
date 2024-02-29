const contSqrJs = document.querySelector(".container-sqr");
const btnJsE = document.getElementById("btn-e");
const btnJsM = document.getElementById("btn-m");
const btnJsH = document.getElementById("btn-h");


btnJsE.addEventListener("click", function(){

  reset();

  for (let i = 1; i <= 49; i++) {
  const sqrReu = innSqr(i);
  contSqrJs.append(sqrReu);
  contSqrJs.className = "container-sqr-e";

}
})
btnJsM.addEventListener("click", function(){

  reset();

  for (let i = 1; i <= 81; i++) {
  const sqrReu = innSqr(i);
  contSqrJs.append(sqrReu);
  contSqrJs.className = "container-sqr-m";


}
})
btnJsH.addEventListener("click", function(){

  reset();

  for (let i = 1; i <= 100; i++) {
  const sqrReu = innSqr(i);
  contSqrJs.append(sqrReu);
  contSqrJs.className = "container-sqr-h";


}
})


/*********************FUNCTION********************/ 

function innSqr(inum) {

  const funcSqr = document.createElement("div");
  funcSqr.className = "sqr";

  funcSqr.addEventListener("click", function(){

    this.innerHTML = !(this.classList.contains("clicked"))
    ? this.innerHTML = inum
    : this.innerHTML = "";
    this.classList.toggle("clicked");
    console.log(inum);

  })
  
  return funcSqr;
}

function reset() {
  contSqrJs.innerHTML = "";
  
}