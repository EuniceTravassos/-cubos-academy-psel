function solucao(joao, andre) {
    if(joao == "TESOURA" && andre == "PAPEL"){
       console.log("JOAO")
   }else  
    if(joao == "PAPEL" && andre == "PEDRA"){
       console.log("JOAO")
   }else
    if(joao == "PEDRA" && andre == "TESOURA"){
       console.log("JOAO")
   }else
    if(andre == "TESOURA" && joao == "PAPEL"){
       console.log("ANDRE")
   }else  
    if(andre == "PAPEL" && joao == "PEDRA"){
       console.log("ANDRE")
   }else
    if(andre == "PEDRA" && joao == "TESOURA"){
       console.log("ANDRE")
   }else       
    if(joao == andre){
        console.log("EMPATE")
    }
}
