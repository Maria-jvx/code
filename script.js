let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3= document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let moonlight= document.querySelector('.moonlight');
window.onscroll = function(){
   let value = this.scrollY;
   stars.style.left= value + 'px';
    moon.style.top= value*4+ 'px';
    mountains3.style.top= value*2+ 'px';
    mountains4.style.top= value*1.5+ 'px';
    river.style.top= value+ 'px';
    boat.style.top= value+ 'px';
    boat.style.left= value*3+ 'px';
    moonlight.style.fontSize= value+ 'px';
    if(scrollY>=70){
        moonlight.style.fontSize= 70+ 'px';
        moonlight.style.position= 'fixed';
        if(scrollY>=300){
            moonlight.style.display = 'none';
        }else{
            moonlight.style.display = 'block';
        }
        if(scrollY>=127){
            document.querySelector('.main').style.background = 'linear-gradient(rgba(64, 108, 131, 1), #1d153aff)';

        }
        else{
            document.querySelector('.logos').style.background = 'linear-gradient(rgb(35, 1, 39),#271229)';

        }
     
}
}