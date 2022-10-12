const media = matchMedia('(max-width: 450px)').matches;
const logo = document.querySelector("#logo")
if(media){
    logo.classList.add("text-center")
}


function countdown(){
    var now = new Date();
                // Altere a data do seu evento aqui
    var eventDate = new Date("Oct 12, 2022 15:00:00");
    var currentTiime = now.getTime();
    var eventTime = eventDate.getTime();
    var remTime = eventTime - currentTiime;
    // calculando o dia, hora, minuto e segundo
      var d = Math.floor(remTime / (1000 * 60 * 60 * 24));
      var h = Math.floor((remTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var m = Math.floor((remTime % (1000 * 60 * 60)) / (1000 * 60));
      var s = Math.floor((remTime % (1000 * 60)) / 1000);
    document.getElementById("days").textContent = d;
    document.getElementById("days").innerText = d;
    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;
    setTimeout(countdown, 1000);
    
    // Verifica se acabou o período do evento
     if (remTime < 0) {
      document.getElementById("countdown_dashboard").classList.add("d-none"); 
      document.getElementById("btnShop").classList.remove("d-none"); 

    } 
  }
  countdown();