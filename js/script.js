const contSqrJs = document.querySelector(".container-sqr");
const btnJs = document.getElementById("btn");


btnJs.addEventListener("click", function(){

  for (let i = 1; i <= 100; i++) {
  const sqrReu = innSqr(i);
  contSqrJs.append(sqrReu);

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