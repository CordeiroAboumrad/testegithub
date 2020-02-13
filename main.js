// var nome = "Jean Aboumrad"
// var idade = 30;
// alert(nome + " tem " + idade + " anos.");
// idadeNova = idade + 1;

// console.log("O Jean fará " + idadeNova + " anos este ano.");



function clicando(){
//    alert("Obrigado por clicar. Até a próxima!");
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!";
    window.open("https://www.youtube.com/");
}

function clicando2(){
    alert("Clique alternativo. Funcionalidade oculta ativada.");
    document.getElementById("agradecimento2").innerHTML = "Obrigado por clicar no botão alternativo!";
}

function trocadinha(elemento){
    elemento.innerHTML = "SAI DE CIMA DE MIM!";
}

function voltando(elemento){
    elemento.innerHTML = "Obrigado por clicar!";
}


function redirecionar(){

    window.location.href = "https://www.fluminense.com.br";

}

function funcaoChange(elemento){
    console.log(elemento.value);

    switch(elemento.value){
        case "1":
            alert("O elemento clicado foi o primeiro.");
            break;
        
        case "2":
            alert("O elemento clicado foi o segundo.");
            break;
        
        case "3":
            alert("O elemento clicado foi o terceiro.");
            break;

        default:
            alert("Opção inválida. Tente novamente.");
        
    }
}



// var lista=["maçã","pera","laranja"];
// lista.push("uva");
// console.log(lista.length);
// 
//console.log(lista.reverse());
// 
// console.log(lista.reverse().join(" - ")); 


    // var idade = prompt("Qual é a sua idade?");

    // if(idade>=18){
    //     alert("Maior de idade");
    // }else{
    //     alert("Menor de idade");
    // }


            // var count=1;
            // while(count<6){

            //     alert("Contador: " + count);

            //     count++;

            // }

// var d = new Date();
// alert(d.getMinutes());

    // function soma(n1,n2){

    //     return n1+n2;
    // }

    // alert(soma(1,2));

