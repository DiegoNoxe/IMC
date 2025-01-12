function imc()
{
 /*Criando variaveis*/
 let A = Number(document.querySelector('.altura').value);
 let P = Number(document.querySelector('.peso').value);
 let R = document.querySelector('.resultado');
 let L = document.querySelector('.line');
 /*Exibindo*/
 L.style.display = 'block';

 if(valido(A,P))
 {
    R.innerHTML = 'Dados invalidos';
    return;
 }
 mensagem(A, P, R); 
}
 function mensagem(A, P, R)
 {
    let C = document.querySelector('.action');
    C.classList.replace('obeso', 'action');
     A = A/100;
     
     let imc = (P/(A*A)).toFixed(2);
     
     if(imc < 18.5)
         R.innerHTML = `Seu IMC é ${imc} e sua classificação é: Magreza`;
 
     else
     {
     if(imc >= 18.5 && imc <= 24.9)
         R.innerHTML = `Seu IMC é ${imc} e sua classificação é: Normal`;
 
     else if(imc >= 25 && imc <= 29.9)
         R.innerHTML = `Seu IMC é ${imc} e sua classificação é: Sobrepeso`;  

     else if(imc >= 30 && imc <= 34.9)
        {   
        R.innerHTML = `Seu IMC é ${imc} e sua classificação é: Obesidade grau I`; 
        C.classList.add('obeso');
        } 

     else if(imc >= 35 && imc <= 39.9)
        {
         R.innerHTML = `Seu IMC é ${imc} e sua classificação é: Obesidade grau II`;  
         C.classList.add('obeso');
        }

     else 
         {
         R.innerHTML = `Seu IMC é ${imc} e sua classificação é: Obesidade grau III`;  
         C.classList.add('obeso');
         }
     }
 }


 function valido(A, P)
 {
    if(A <= 50 || A >= 270)
        return true;
    if(P <= 20 || P >= 300)
        return true;
    else 
       return false;
 }