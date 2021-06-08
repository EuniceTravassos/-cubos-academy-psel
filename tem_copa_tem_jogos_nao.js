function solucao(ano) {
	var anoAtual = ano
    
    if ((anoAtual == 2022) || ((anoAtual - 2022) % 4 == 0)) {
        console.log("COPA")       
    }else if ((anoAtual - 2022) % 4 == 2) {
        console.log("JOGOS")    
    }else{
        console.log("MEH")
    }
}
  
function processData(input) {
	solucao(parseInt(input, 10));
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