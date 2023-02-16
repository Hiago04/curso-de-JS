/* Func que retorna se a imagem está em modo paisagem ou retrato (deitado ou em pé) */

// operação ternária
/* function ePaisagem (largura, altura){
    return largura > altura ? true : false;
} */

//se for maior retorna true se não retorna false
/* function ePaisagem (largura, altura){
    return largura > altura;
} */

const ePaisagem = (largura, altura) => largura > altura;


console.log(ePaisagem(1080, 1920));