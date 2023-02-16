let result = document.querySelector('#h1-main');
let data = new Date();

// ---> PRIMEIRA FORMA DE RESOLVER <---

/* function dayWeek (dw) {
    let dayWeekName;
    switch (dw) {
        case 0:
            return dayWeekName = 'Domingo';
        case 1:
            return dayWeekName = 'Segunda-feira';
        case 2:
            return dayWeekName = 'Terça-feira';
        case 3:
            return dayWeekName = 'Quarta-feira';
        case 4:
            return dayWeekName = 'Quinta-feira';
        case 5:
            return dayWeekName = 'Sexta-feira';
        case 6:
            return dayWeekName = 'Sábado';
    }
}

function dayMonth (dm) {
    let dayMonth;
    switch (dm) {
        case 0:
          return dayMonth = 'Janeiro';
        case 1:
          return dayMonth = 'Fevereiro';
        case 2:
          return dayMonth = 'Março';
        case 3:
          return dayMonth = 'Abril';
        case 4:
          return dayMonth = 'Maio';
        case 5:
          return dayMonth = 'Junho';
        case 6:
          return dayMonth = 'Julho';
        case 7:
          return dayMonth = 'Agosto';
        case 8:
          return dayMonth = 'Setembro';
        case 9:
          return dayMonth = 'Outubro';
        case 10:
          return dayMonth = 'Novembro';
        case 11:
          return dayMonth = 'Dezembro';
    }
}

// diasemana, datames de mes de ano hora:minuto

function addZero (zero){
    return zero >= 10 ? zero : `0${zero}`;
}

function setResult() {
    

    let diaSemana = dayWeek(data.getDay());

    let diaMes = data.getDate();
    let mes = dayMonth(data.getMonth());
    let ano = data.getFullYear();

    let hour = data.getHours();
    let minutes = data.getMinutes();

    result.innerHTML = `${diaSemana}, ${addZero(diaMes)} de ${mes} de ${ano} ${addZero(hour)}:${addZero(minutes)}`;

    return;
}

setResult(); */

                            // --- SEGUNDA FORMA ---

/* function addZero (zero){
    return zero >= 10 ? zero : `0${zero}`;
}

function diaSemana () {
    let dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    return dias[data.getDay()];
}

function mes () {
    let diaMes = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    return diaMes[data.getMonth()];
}
    let diaMes = data.getDate();
    let ano = data.getFullYear();

    let hour = data.getHours();
    let minutes = data.getMinutes();

result.innerHTML = `${diaSemana()}, ${addZero(diaMes)} de ${mes()} de ${ano} ${addZero(hour)}:${addZero(minutes)}`;

 console.log(diaSemana()) */


            // FORMA CORRETA


result.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle:'short'});