//alert("eğer gerçekten bu linke girebiliyorsan benim için önemlisin")
const muzik = document.getElementById("muzik");
const durdur = document.getElementById("durdur");
const muzik2 = document.getElementById("muzik2")

function openmusic(){
    muzik.play();
    muzik.volume=0.2;
    durdur.innerText="durdur";
}

function stopmusic(){
    muzik.pause();

}

function openmusic2(){
    muzik2.play();
}

function stopmusic2(){
    muzik2.pause();

}