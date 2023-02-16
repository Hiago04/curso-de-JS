varA = 'A'; // B
varB = 'B'; // C
varC = 'C'; // A

a = varA;
varA = varB;
varB = varC;
varC = a;




console.log(varA, varB, varC);