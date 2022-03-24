//Selecionando divs que queremos ordenar
var itens = document.querySelectorAll(".courses .coursebox")
cursos = document.querySelector(".courses") //div geral dos cursos

//convertendo NodeList para ArrayList
var itensOrdenados = [].map.call(itens, function(element){return element})

//Ordenando com sort
itensOrdenados.sort(function(a, b){
    //Critério de ordenação será a partir dos últimos 6 elementos da string
    var x = a.querySelector(".aalink").innerHTML.slice(a.querySelector(".aalink").innerHTML.length-6)
    var y = b.querySelector(".aalink").innerHTML.slice(b.querySelector(".aalink").innerHTML.length-6)
    if(x > y){return -1}
    if(x < y){return 1}
    return 0
})

//Chamando a função para adicionar a nova lista ordenada na página HTML
adicionaItensOrdenados()

function adicionaItensOrdenados(){
    var semestre = itensOrdenados[0].querySelector(".aalink").innerHTML.substr(itensOrdenados[0].querySelector(".aalink").innerHTML.length-6)
    cursos.appendChild(document.createTextNode(semestre))

    for(var i = 0; i < itensOrdenados.length; i++){
        var len = itensOrdenados[i].querySelector(".aalink").innerHTML.length
        //Zebrando tabelas
        if(i%2 == 0){itensOrdenados[i].style.backgroundColor = "rgba(0,0,0,.05)"}
        else {itensOrdenados[i].style.backgroundColor = "rgba(255,255,255)"}
        
        //Adicionando linhas <hr> antes que uma disciplina de um novo semestre seja inserida em tela
        if(itensOrdenados[i].querySelector(".aalink").innerHTML.slice(len-6) != semestre){
            semestre = itensOrdenados[i].querySelector(".aalink").innerHTML.slice(len-6)
            cursos.appendChild(document.createElement("hr")) //adicionar antes de um novo semestre
            cursos.appendChild(document.createTextNode(semestre)) //escrevendo em tela o novo semestre
        }
        //adicionando a div cursos a coursebox
        cursos.appendChild(itensOrdenados[i])
    }
}





//Como ordenar?

//console.log(itens[2].querySelector(".aalink").innerHTML.substr(itens[2].querySelector(".aalink").innerHTML.length-6, itens[2].querySelector(".aalink").innerHTML.length))
/*itens[0].querySelector(".aalink").innerHTML.substr(itens[0].querySelector(".aalink").innerHTML.length-6, itens[0].querySelector(".aalink").innerHTML.length)*/ 