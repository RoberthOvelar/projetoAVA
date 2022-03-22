const itens = document.querySelectorAll(".coursebox")

var cont = 0
while(cont < itens.length){
    console.log(itens[cont].querySelector(".aalink").innerHTML);
    cont++
}

console.log("================== DEPOIS DA ORDENAÇÃO ==================")

//Como ordenar?

//console.log(itens[2].querySelector(".aalink").innerHTML.substr(itens[2].querySelector(".aalink").innerHTML.length-6, itens[2].querySelector(".aalink").innerHTML.length))
/*itens[0].querySelector(".aalink").innerHTML.substr(itens[0].querySelector(".aalink").innerHTML.length-6, itens[0].querySelector(".aalink").innerHTML.length)*/ 

