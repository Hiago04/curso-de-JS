let inteiro = '3'; //string
let quebradoOuFlutuante = '3.1' // string

console.log(parseFloat(inteiro), '-->',typeof parseFloat(inteiro), parseFloat(quebradoOuFlutuante), '-->', typeof parseFloat(quebradoOuFlutuante), '(Float)'); // transformei em number, o float preserva as casas decimais

console.log(parseInt(inteiro), '-->',typeof parseInt(inteiro), parseInt(quebradoOuFlutuante), '-->', typeof parseInt(quebradoOuFlutuante), '(Int)'); // transforma em number ignorando as casas decimais

console.log(Number(inteiro), '-->',typeof Number(inteiro), Number(quebradoOuFlutuante), '-->', typeof Number(quebradoOuFlutuante), '(Number)'); // transforma em number independente se é inteiro ou quebrado
 