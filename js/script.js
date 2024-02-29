const contSqrJs = document.querySelector(".container-sqr");
const btnStart = document.getElementById("start")
const btnReset = document.getElementById("reset")
const difficultJs = document.getElementById("difficult");

btnReset.addEventListener("click", function(){
  reset();
})

btnStart.addEventListener("click", function(){

  reset();
  if (difficultJs.value == "easy") {

    for (let i = 1; i <= 49; i++) {

      const sqrReu = innSqr(i);
      contSqrJs.append(sqrReu);
      contSqrJs.className = "container-sqr-e";

    }
  }else if (difficultJs.value == "medium") {
    for (let i = 1; i <= 81; i++) {

      const sqrReu = innSqr(i);
      contSqrJs.append(sqrReu);
      contSqrJs.className = "container-sqr-m";

    }
  }else{

    for (let i = 1; i <= 100; i++) {

      const sqrReu = innSqr(i);
      contSqrJs.append(sqrReu);
      contSqrJs.className = "container-sqr-h";

    }
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