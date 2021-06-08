function solucao(numero) {
    var contador = numero
    while(contador >= 0){
        console.log(contador)
        contador --
    }
    console.log("KABUM")
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
