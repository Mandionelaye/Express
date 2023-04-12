var tab = document.querySelectorAll(".card");
 var fleche1p = document.querySelector(".img-svg1p");
 var fleche2p = document.querySelector(".img-svg2p");
 var fleche1t = document.querySelector(".img-svg1t");
 var fleche2t = document.querySelector(".img-svg2t");
 var fleche1o = document.querySelector(".img-svg1o");
 var fleche2o = document.querySelector(".img-svg2o");
 var slidep = document.querySelector(".slidep");
 var slidet = document.querySelector(".slidet");
 var slideo = document.querySelector(".slideo");
 var indice_elm_active=1;


function Fleches(variable1 , variable2, variable3){
variable1.onclick=()=>{
   if(indice_elm_active!=1){
   variable3.scrollBy(-210,0);
   indice_elm_active= indice_elm_active -1;
   }
};
variable2.onclick=()=>{
   if(indice_elm_active!=10){
   variable3.scrollBy(210,0);
   indice_elm_active= indice_elm_active +1;
   }
}
}
Fleches(fleche1p,fleche2p,slidep);
Fleches(fleche1t,fleche2t,slidet);
Fleches(fleche1o,fleche2o,slideo);
