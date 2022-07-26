//Tema: - var, const e let

//var - variável global

if (true){
    var a = 10;
}
console.log(a);


/*let - variável local, funcionando somente no BLOCO que eu declarei, por exemplo, só existe dentro de um IF 
Essa variável não pode ser declarada modificada no mesmo escopo/bloco*/
    
if (true){
    let a = 10000; //vai dar erro!! 
}
console.log(a);  //aqui será exibido 10, valor do bloco 'var a = 10' acima

/* let greeting = "say Hi";
   let greeting = "say Hello instead"; // erro: identificador 'greeting' já foi declarado */


//const - o mesmo caso da let, no entanto, por ser uma constante ela não deixa outro valor ser atribuído a uma constante já declarada

const greeting = "say Hi";
greeting = "say Hello instead";// erro: atribuição a uma variável constante. 
