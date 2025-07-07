const numeroSenha = document.querySelector('.parametro-senha__texto');
const campoSenha = document.querySelector('#campo-senha')
const checkbox = document.querySelectorAll('.checkbox')
const botoes = document.querySelectorAll('.parametro-senha__botao');
const forcaSenha = document.querySelector('forca')
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@%*?';
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function aumentaTamanho() {
    if (tamanhoSenha < 20){
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}


geraSenha();

function geraSenha() {
    let senha = '' ;
    if (checkbox[0].cheked){
        ]alfabeto = alfabeto + letrasMaiusculas;
}
if (checkbox[1].cheked){
    alfabeto = alfabeto + letrasMinusculas;
}
 if (checkbox[2].cheked){
    alfabeto = alfabeto + numeros;
}
 if (checkbox[3].cheked){
    alfabeto = alfabeto + simbolos;
 }

 let senha = '';
    for(let i=0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.random()*alfabeto.lenght;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha; 
classificaSenha()/
}

forcaSenha.classificaSenha(){
    forcaSenha.classList.remove('fraca', 'media', 'forte',);
    if (tamanhoSenha>11){
function classList.add("forte");
    }else if (tamanhoSenha<12){
        forcaSenha.classList.add('media');
    }else if (tamanhoSenha<=5)
forcaSenha.classList.add('fraca');
    }
}

