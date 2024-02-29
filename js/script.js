const contSqrJs = document.querySelector(".container-sqr")


for (let i = 1; i <= 100; i++) {
  const sqrReu = innSqr();
  contSqrJs.append(sqrReu);
  
}











/*********************FUNCTION********************/ 

function innSqr() {
  const funcSqr = document.createElement("div");
  funcSqr.className = "sqr";
  
  return funcSqr;
}