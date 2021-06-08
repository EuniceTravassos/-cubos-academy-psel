

function solucao(tempo, distancia) {
	var valorCorrida = 0
    var valorAcrescimo = 0
    
    if(tempo <5){
        valorCorrida = 600
    } else if(tempo >= 5 && tempo <= 60){
        valorCorrida = 100 * tempo
        valorAcrescimo = 50 * distancia
    }else if (tempo > 60 && distancia <100){
        valorCorrida = 200 * distancia
    }else if (tempo > 60 && distancia >= 100){
        valorCorrida = 150 * distancia
    }
    var totalCorrida = valorCorrida + valorAcrescimo
    console.log (totalCorrida)
}

function processData(input) {
    const {tempo, distancia} = JSON.parse(input);
    solucao(tempo, distancia);
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