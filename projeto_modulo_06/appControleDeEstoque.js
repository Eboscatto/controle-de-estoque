//Sistema para controle de estoque de peça.

const input = require('prompt-sync')({sigint: true})

let opcao =1;
let estoqueAtual;
let quantidadeEntranda;
estoqueAtual = Number(input("Informe o estoque atual: ")); 
   while(opcao == 1 || opcao == 2 ){  
    opcao = Number(input("Digite [1]compra - [2]venda - [0]Sair "));   
    if(opcao == 0){
        break;    
    }   
    quantidadeEntranda = Number(input("Informe a quantidade de entrada: "));    
    if(opcao == 1){
        estoqueAtual = estoqueAtual + quantidadeEntranda;
    }
    else if(opcao == 2){        
        if(estoqueAtual < quantidadeEntranda){
            console.log("Estoque insuficiente!!");
        }else{
            estoqueAtual = estoqueAtual - quantidadeEntranda;
        }
    } 
    console.log(`Estoque atual:${estoqueAtual} `);
   }    
console.log(`Estoque final: ${estoqueAtual}`);
console.log("S i s t e m a    e n c e r r a d o!")
console.log();
