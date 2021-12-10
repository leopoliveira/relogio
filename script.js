setInterval(atualizaHora, 1000);

function atualizaHora() {
    let agora = new Date(Date.now());

    let horas = agora.getHours();
    horas = Number(horas) < 10 ? "0"+horas : horas;

    let minutos = agora.getMinutes();
    minutos = Number(minutos) < 10 ? "0"+minutos : minutos;

    let segundos = agora.getSeconds();
    segundos = Number(segundos) < 10 ? "0"+segundos : segundos;
    
    let relDigital = document.querySelector(".digital");
    relDigital.innerHTML = `${horas}:${minutos}:${segundos}`;

    let ponteiroHora = document.querySelector(".p_h");
    let ponteiroMinuto = document.querySelector(".p_m");
    let ponteiroSegundo = document.querySelector(".p_s");

    ponteiroSegundo.style.transform = `rotate(${((segundos*360)/60)-90}deg)`;
    ponteiroMinuto.style.transform = `rotate(${((minutos*360)/60)-90}deg)`;

    if(Number(horas) > 12) {
        ponteiroHora.style.transform = `rotate(${(((horas - 12)*360)/12)-90}deg`;
    } else {
        ponteiroHora.style.transform = `rotate(${((horas*360)/12)-90}deg)`;
    }
}

atualizaHora();

