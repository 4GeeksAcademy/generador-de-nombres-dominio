
// listas a utilizar

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

//generar nombres de dominio

pronoun.forEach(function(pronombre){
    adj.forEach(function(adjetivo){
        noun.forEach(function(sustantivo){
            console.log(pronombre + adjetivo + sustantivo + ".com");
            
        })
    })
})


