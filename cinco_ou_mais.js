
function solucao(precos) {
    var soma = 0
    var numeroRemover = 0
        for(var i = 0; i < precos.length; i++){
            
        var itens = precos[i]
        var totalItens = precos.length
        var menorItem = Math.min.apply(Math, precos)
      
      soma += precos[i]
  }
    if(totalItens >= 5){
        numeroRemover += menorItem
        }
    soma = soma - numeroRemover
    console.log(soma)
    
}

function processData(input) {
	solucao(input.trim().split(" ").filter(x => x).map(x => parseInt(x, 10)));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});