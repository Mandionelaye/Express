function afficherHeure() {
    const date = new Date();
    const heure = date.getHours();
    const minute = date.getMinutes();
    const seconde = date.getSeconds();
  
    const heureFormat = heure < 10 ? "0" + heure : heure;
    const minuteFormat = minute < 10 ? "0" + minute : minute;
    const secondeFormat = seconde < 10 ? "0" + seconde : seconde;

    const heureHtml = document.getElementById("Heure");
    heureHtml.textContent = heureFormat + ":" + minuteFormat + ":" + secondeFormat;
  }
  
  setInterval(afficherHeure, 1000);